import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getProject, getProjectsList } from "@/data/projects"
import { pageMetadata } from "@/lib/page-metadata"
import {
  isCaseStudyPasswordProtected,
  CASE_STUDY_GATE_PASSWORD,
  UNLOCK_TTL_MS,
} from "@/data/projectPasswordGate"
import { CountUpNumber } from "@/components/CountUpNumber"
import { ProjectGalleryCarousel } from "@/components/ProjectGalleryCarousel"
import { ProjectPasswordGate } from "@/components/ProjectPasswordGate"
import { TAG_BADGE_CLASS } from "@/lib/tag-accent"

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const projects = getProjectsList()
  return projects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id: rawId } = await params
  const id = rawId.trim().toLowerCase()
  const project = getProject(id)
  if (!project) {
    return {}
  }
  return pageMetadata({
    path: `/projects/${project.id}`,
    title: `${project.title} | ${project.client}`,
    description: project.summary,
    ogImage: project.image,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id: rawId } = await params
  const id = rawId.trim().toLowerCase()
  const project = getProject(id)
  if (!project) notFound()

  return (
    <ProjectPasswordGate
      projectId={id}
      isPasswordProtected={isCaseStudyPasswordProtected(id)}
      expectedPassword={CASE_STUDY_GATE_PASSWORD}
      unlockTtlMs={UNLOCK_TTL_MS}
    >
      <>
        {/* Hero: subtitle (client), title, tags + particle shape */}
      <section
        data-particle-shape={project.particleShape}
        className="w-full pt-[120px] md:pt-0 md:min-h-[100dvh] flex items-center px-[clamp(2rem,8vw,4rem)] animate-in-view"
      >
        <div className="w-full lg:max-w-[80%] flex flex-col gap-[clamp(1rem,3vw,1.5rem)]">
          <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
            {project.client}
          </p>
          <h1 className="text-[clamp(3rem,10vw,5.75rem)] font-bold leading-[1.05] tracking-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-[clamp(0.5rem,1.25vw,0.75rem)]">
            {project.tags.filter(Boolean).map((tag, i) => (
              <span
                key={i}
                className={`text-[clamp(0.75rem,1.5vw,0.875rem)] font-semibold px-[clamp(0.5rem,1.25vw,0.75rem)] py-[clamp(0.25rem,0.5vw,0.375rem)] rounded-full ${TAG_BADGE_CLASS}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Summary (Overview): subtitle, title, text + image carousel */}
      <section
        data-particle-shape="false"
        className="w-full pt-[120px] md:pt-[clamp(4rem,10vw,6rem)] md:min-h-[100dvh] flex flex-col justify-center px-[clamp(2rem,8vw,4rem)] pb-[clamp(4rem,10vw,6rem)] animate-in-view overflow-x-clip"
      >
        <div className="w-full flex flex-col gap-[clamp(2rem,5vw,3rem)]">
          <div className="w-full lg:max-w-[60%] flex flex-col gap-[clamp(1rem,3vw,1.5rem)]">
            <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
              {project.summarySection.subtitle}
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
              {project.summarySection.title}
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed" dangerouslySetInnerHTML={{ __html: project.summarySection.text }} />
          </div>
          {project.galleryImages.length > 0 && (
            <div className="w-screen relative left-1/2 -translate-x-1/2 mt-[clamp(1rem,2vw,1.5rem)]">
              <ProjectGalleryCarousel images={project.galleryImages} />
            </div>
          )}
        </div>
      </section>

      {/* My Role: subtitle, title, text, by-the-numbers */}
      <section
        data-particle-shape="false"
        className="w-full pt-[120px] md:pt-[clamp(4rem,10vw,6rem)] md:min-h-[100dvh] flex flex-col justify-center px-[clamp(2rem,8vw,4rem)] pb-[clamp(4rem,10vw,6rem)] animate-in-view"
      >
        <div className="w-full lg:max-w-[60%] flex flex-col gap-[clamp(1rem,3vw,1.5rem)]">
          <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
            {project.myRoleSection.subtitle}
          </p>
          <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
            {project.myRoleSection.title}
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed" dangerouslySetInnerHTML={{ __html: project.myRoleSection.text }} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(2rem,5vw,3rem)] mt-[clamp(2rem,4vw,3rem)] pt-[clamp(2rem,4vw,3rem)]">
            {project.myRoleSection.numbers.map((num, i) => (
              <CountUpNumber key={i} value={num.value} caption={num.caption} />
            ))}
          </div>
        </div>
      </section>

      {/* Solution: subtitle, title, text + carousel */}
      <section
        data-particle-shape="false"
        className="w-full pt-[120px] md:pt-[clamp(4rem,10vw,6rem)] md:min-h-[100dvh] flex flex-col justify-center px-[clamp(2rem,8vw,4rem)] pb-[clamp(4rem,10vw,6rem)] animate-in-view overflow-x-clip"
      >
        <div className="w-full flex flex-col gap-[clamp(2rem,5vw,3rem)]">
          <div className="w-full lg:max-w-[60%] flex flex-col gap-[clamp(1rem,3vw,1.5rem)]">
            <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
              {project.solutionSection.subtitle}
            </p>
            <h2 className="text-[clamp(2.5rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight">
              {project.solutionSection.title}
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed" dangerouslySetInnerHTML={{ __html: project.solutionSection.text }} />
          </div>
          {project.solutionGalleryImages && project.solutionGalleryImages.length > 0 && (
            <div className="w-screen relative left-1/2 -translate-x-1/2 mt-[clamp(1rem,2vw,1.5rem)]">
              <ProjectGalleryCarousel images={project.solutionGalleryImages} />
            </div>
          )}
        </div>
      </section>

      {/* Impact (Outcomes): eyebrow + headline + text, then three tiles below */}
      <section
        data-particle-shape="false"
        className="w-full border-y border-stone-200/70 bg-white pt-[120px] md:pt-[clamp(4rem,10vw,6rem)] md:min-h-[100dvh] flex flex-col justify-center px-[clamp(2rem,8vw,4rem)] pb-[clamp(4rem,10vw,6rem)] animate-in-view"
      >
        <div className="flex flex-col gap-[clamp(3rem,8vw,5rem)]">
          <div className="w-full lg:max-w-[60%] flex flex-col gap-[clamp(1rem,3vw,1.5rem)]">
            <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
              {project.impactSection.subtitle}
            </p>
            <h2 className="text-[clamp(2.25rem,5vw,3rem)] font-bold leading-[1.08] tracking-tight">
              {project.impactSection.title}
            </h2>
            <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed" dangerouslySetInnerHTML={{ __html: project.impactSection.text }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,4vw,2rem)]">
            {project.impactSection.blocks.map((block, index) => (
              <div
                key={index}
                className="rounded-xl border border-stone-200/60 bg-[#faf9f7] p-[clamp(1.5rem,4vw,2rem)] flex flex-col gap-[clamp(1rem,2.5vw,1.25rem)]"
              >
                <h3 className="text-[clamp(1.375rem,3.5vw,1.75rem)] font-semibold tracking-tight leading-tight">
                  {block.title}
                </h3>
                <p className="text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: block.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    </ProjectPasswordGate>
  )
}
