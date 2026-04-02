"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const STORAGE_KEY_PREFIX = "caseStudyUnlocked:"

interface UnlockRecord {
  expiresAt: number
}

function getStorageKey(projectId: string): string {
  return `${STORAGE_KEY_PREFIX}${projectId}`
}

function isUnlockedInStorage(projectId: string): boolean {
  if (typeof window === "undefined") return false
  try {
    const raw = localStorage.getItem(getStorageKey(projectId))
    if (!raw) return false
    const record = JSON.parse(raw) as UnlockRecord
    return typeof record.expiresAt === "number" && Date.now() <= record.expiresAt
  } catch {
    return false
  }
}

function setUnlockedInStorage(projectId: string, expiresAt: number): void {
  if (typeof window === "undefined") return
  try {
    localStorage.setItem(getStorageKey(projectId), JSON.stringify({ expiresAt }))
  } catch {
    // ignore
  }
}

export interface ProjectPasswordGateProps {
  projectId: string
  isPasswordProtected: boolean
  expectedPassword: string
  unlockTtlMs: number
  children: React.ReactNode
}

export function ProjectPasswordGate({
  projectId,
  isPasswordProtected,
  expectedPassword,
  unlockTtlMs,
  children,
}: ProjectPasswordGateProps) {
  const [unlocked, setUnlocked] = useState<boolean>(() => {
    if (!isPasswordProtected) return true
    return false
  })
  const [checkedStorage, setCheckedStorage] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!isPasswordProtected) return
    // Read localStorage after mount so SSR HTML matches first client paint; then sync unlock state.
    queueMicrotask(() => {
      if (isUnlockedInStorage(projectId)) setUnlocked(true)
      setCheckedStorage(true)
    })
  }, [projectId, isPasswordProtected])

  // After unlocking, notify InViewObserver to re-observe so .animate-in-view sections get their fade-in
  useEffect(() => {
    if (!unlocked || !isPasswordProtected) return
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent("reobserve-in-view"))
      })
    })
    return () => cancelAnimationFrame(id)
  }, [unlocked, isPasswordProtected])

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      setError(null)
      if (password.trim() === expectedPassword) {
        const expiresAt = Date.now() + unlockTtlMs
        setUnlockedInStorage(projectId, expiresAt)
        setUnlocked(true)
      } else {
        setError("Incorrect password")
      }
    },
    [password, expectedPassword, unlockTtlMs, projectId],
  )

  if (!isPasswordProtected) return <>{children}</>

  if (!checkedStorage) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" aria-hidden>
        <div className="h-8 w-8 animate-pulse rounded-full border-2 border-primary border-t-transparent" />
      </div>
    )
  }

  if (unlocked) return <>{children}</>

  return (
    <div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gate-heading"
      >
        <div className="mx-4 w-full max-w-sm rounded-lg border border-border bg-background/90 p-6 shadow-lg backdrop-blur-sm">
          <h2 id="gate-heading" className="text-lg font-semibold tracking-tight">
            Protected case study
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Enter the password to view this case study.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setError(null)
              }}
              placeholder="Password"
              autoComplete="current-password"
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              )}
              aria-invalid={!!error}
              aria-describedby={error ? "gate-error" : undefined}
            />
            {error && (
              <p id="gate-error" className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}
            <Button type="submit" size="lg" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
  )
}
