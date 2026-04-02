/**
 * Configuration for password-gating selected case study pages.
 * Client-side check only (portfolio protection, not strong security).
 */

/** Project IDs that require a password to view. */
export const PASSWORD_PROTECTED_PROJECT_IDS = new Set<string>(["nvidia", "pods", "ey"])

/** Project IDs that are always public (no gate). */
export const PUBLIC_PROJECT_IDS = new Set<string>(["worldbank", "solventum"])

/** Password accepted by the gate overlay. */
export const CASE_STUDY_GATE_PASSWORD = "thisisamazing"

/** How long an unlock persists in localStorage (7 days). */
export const UNLOCK_TTL_MS = 7 * 24 * 60 * 60 * 1000

/** localStorage key prefix for unlock records. */
export const UNLOCK_STORAGE_KEY_PREFIX = "caseStudyUnlocked:"

export function isCaseStudyPasswordProtected(projectId: string): boolean {
  const id = projectId.trim().toLowerCase()
  if (!id) return false
  if (PUBLIC_PROJECT_IDS.has(id)) return false
  return PASSWORD_PROTECTED_PROJECT_IDS.has(id)
}
