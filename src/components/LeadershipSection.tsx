export function LeadershipSection() {
  const blocks = [
    {
      title: "Design and product leader",
      body: "I lead at the intersection of design, product, and technology—embedding AI where it meaningfully accelerates outcomes. With deep experience across UX, engineering, and business transformation, I help organizations align vision, feasibility, and measurable impact while navigating complexity.",
    },
    {
      title: "Design systems, not just UI",
      body: "I design scalable ecosystems—design systems, content operations, governance models, and AI-enabled workflows—that enable teams to move faster without sacrificing quality or trust. I don't just launch products, I create operating models that grow and adapt as technology evolves.",
    },
    {
      title: "Outcome-focused innovation",
      body: "I integrate AI and emerging technologies with intention—prioritizing measurable business impact over experimentation for its own sake. I focus on reducing friction, accelerating delivery, and ensuring innovation strengthens the organization.",
    },
  ]

  return (
    <section data-particle-shape="false" className="w-full border-y border-stone-200/70 bg-white px-[clamp(2rem,8vw,4rem)] pt-[120px] md:pt-[clamp(4rem,12vw,8rem)] pb-[clamp(4rem,12vw,8rem)] animate-in-view">
      <div className="flex flex-col gap-[clamp(3rem,8vw,5rem)]">
        {/* Header Content */}
        <div className="flex flex-col gap-[clamp(1.5rem,4vw,2rem)] w-full lg:max-w-[80%]">
          <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
            A little about me
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,4.25rem)] font-bold leading-[1.08] tracking-tight">
            20 years of <strong>cross-functional experience</strong> across technology, design, and product
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed">
            Digital transformation succeeds when strategy, systems, and
            experience are aligned. I provide cross-functional, strategic leadership — advising
            organizations on AI-enabled digital transformation and scalable customer
            experiences that deliver <strong>measureable results</strong>, not just ideas.
          </p>
        </div>

        {/* Staggered Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,4vw,2rem)]">
          {blocks.map((block, index) => (
            <div
              key={index}
              className="rounded-xl border border-stone-200/60 bg-[#faf9f7] p-[clamp(1.5rem,4vw,2rem)] flex flex-col gap-[clamp(1rem,2.5vw,1.25rem)]"
            >
              <h3 className="text-[clamp(1.625rem,4vw,1.875rem)] font-semibold tracking-tight leading-tight">
                {block.title}
              </h3>
              <p className="text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: block.body }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
