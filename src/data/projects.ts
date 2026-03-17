/**
 * Project particle shape must match a key in ParticleVisualization LUCIDE_ICONS.
 * e.g. "arrow-right" | "lightbulb" | "zap" | "star" | "heart" | "trending-up" | "circle" | "earth" | "bot" | "send"
 */
export type ParticleShape =
  | "arrow-right"
  | "lightbulb"
  | "zap"
  | "star"
  | "heart"
  | "trending-up"
  | "circle"
  | "earth"
  | "bot"
  | "send"

export interface ProjectNumber {
  value: number
  caption: string
}

export interface ProjectImpactBlock {
  title: string
  body: string
}

export interface Project {
  id: string
  client: string
  title: string
  summary: string
  tags: string[]
  image: string
  /** Large images for project gallery carousel (Overview section). */
  galleryImages: string[]
  /** Optional images for Solution section carousel. */
  solutionGalleryImages?: string[]
  particleShape: ParticleShape
  /** Hero summary (same as summary for cards). */
  summarySection: {
    subtitle: string
    title: string
    text: string
  }
  myRoleSection: {
    subtitle: string
    title: string
    text: string
    numbers: ProjectNumber[]
  }
  solutionSection: {
    subtitle: string
    title: string
    text: string
  }
  impactSection: {
    subtitle: string
    title: string
    text: string
    blocks: ProjectImpactBlock[]
  }
}

const projects: Project[] = [
  {
    id: "solventum",
    client: "Solventum",
    title: "Enterprise marketing & commerce transformation for a new brand",
    summary:
      "Led the transformation of Solventum’s global marketing engine following its spin-off from 3M, unifying four business units under a scalable design and content system that reduced time-to-market from months to weeks.",
    tags: [
      "Design Systems",
      "Marketing Transformation",
      "Content Strategy",
      "Organizational Change",
    ],
    image: "/images/solventum/solventum_card_background.jpg",
    galleryImages: [
      "/images/solventum/Solventum_01.jpg",
      "/images/solventum/Solventum_02.jpg",
      "/images/solventum/Solventum_04.jpg",
      "/images/solventum/Solventum_03.jpg",
    ],
    particleShape: "earth",
    summarySection: {
      subtitle: "Overview",
      title: "New brand, a new experience",
      text: "When Solventum spun off from 3M, it had to build an entirely new marketing engine while decoupling from decades of legacy systems and processes. Four independent business units needed to align under a unified brand, digital ecosystem, and operating model—at speed and under executive scrutiny.<br/><br/>This wasn’t a website redesign. It was a foundational transformation that would define how the new company went to market and sold its products globally.",
    },
    myRoleSection: {
      subtitle: "My Role",
      title: "Design and experience leadership",
      text: "I served as Executive Design & Experience Lead, responsible for shaping the experience strategy, design system architecture, and content operating model. I partnered with the Global VP of Experience Design and collaborated closely with MarTech and IT leadership to influence both MVP and post-MVP roadmap decisions.",
      numbers: [
        { value: 17, caption: "Designers, strategists, and writers coordinated" },
        { value: 120, caption: "Stakeholders aligned across business units and teams" },
        { value: 4, caption: "Business units unified under a single design system" },
        { value: 40, caption: "Countries included in global rollout in twelve languages" },
      ],
    },
    solutionSection: {
      subtitle: "Solution",
      title: "Systems-first transformation",
      text: "We built a design system and content operations model that enabled regional teams to launch localized experiences quickly while maintaining brand and accessibility standards. Commerce and marketing experiences were unified under a single design language and component library.",
    },
    solutionGalleryImages: [
      "/images/solventum/Solventum_05.jpg",
      "/images/solventum/Solventum_06.jpg",
      "/images/solventum/Solventum_07.jpg",
      "/images/solventum/Solventum_08.jpg",
    ],
    impactSection: {
      blocks: [
        {
          title: "Faster time to market",
          body: "The new market technology stack was launched in globally in nine months, enabling a 60% reduction in time to launch new products and pages online.",
        },
        {
          title: "Consistent brand experience",
          body: "60 components. A single source of truth for components and patterns ensured the new Solventum brand was represented consistently across touchpoints.",
        },
        {
          title: "Scalable operations",
          body: "Content and design governance enabled the organization to scale digital experiences without proportional growth in central teams.",
        },
      ],
      subtitle: "Outcomes",
      title: "New brand, brand new",
      text: "Solventum’s global marketing and commerce presence launched on schedule, with a design system and operating model that continue to support growth and localization.",
    },
  },
  {
    id: "nvidia",
    client: "NVIDIA",
    title: "Partner incentives & revenue systems transformation",
    summary:
      "Led the transformation of NVIDIA's global partner incentive systems—standardizing workflows, enabling self-service, and introducing AI to reduce manual processing and unlock scalable revenue operations.",
    tags: [
      "Business Transformation",
      "Process Change",
      "Experience Design",
      "AI-enabled Transformation",
    ],
    image: "/images/nvidia/nvidia_card_background.jpg",
    galleryImages: [
      "/images/nvidia/NVIDIA_01.jpg",
      "/images/nvidia/NVIDIA_02.jpg",
      "/images/nvidia/NVIDIA_03.jpg",
    ],
    particleShape: "zap",
    summarySection: {
      subtitle: "Overview",
      title: "Partner incentives at scale",
      text: "NVIDIA's MDF and rebate programs are a critical driver of partner-led revenue, generating hundreds of millions of dollars annually across a complex global ecosystem of distributors, OEMs, and resellers. But the systems powering these programs hadn't kept pace with scale—relying heavily on spreadsheets, manual workflows, and internal orchestration.<br/><br/>As the business grew, this created increasing friction: programs were difficult to scale, partners lacked visibility and self-service capabilities, and internal teams were spending significant time managing operations instead of optimizing performance. The result was inefficiency, limited agility, and ultimately, missed revenue opportunities.",
    },
    myRoleSection: {
      subtitle: "My Role",
      title: "Experience design lead across UX and process transformation",
      text: "I served as Experience Design Lead across both UX and process transformation, responsible for redefining how NVIDIA's incentive programs operate—not just how they look. I owned the process transformation workstream, leading current-state assessment, future-state design, and the standardization of workflows to enable scale. In parallel, I led the design of the future-state platform experience built on Salesforce. This was less about interface design—and more about redesigning how a revenue engine operates.",
      numbers: [
        { value: 8, caption: "Cross-functional team members managed (design, technology, product)" },
        { value: 12, caption: "Business groups engaged (product, revenue finance, marketing, operations)" },
        { value: 60, caption: "Fragmented processes standardized to 22 scalable processes" },
      ],
    },
    solutionSection: {
      subtitle: "Solution",
      title: "Standardize the foundation to enable flexibility at scale",
      text: "The core challenge was fragmentation. Each program was treated as a one-off—custom-built, manually managed, and difficult to scale. We consolidated 60+ fragmented workflows into 22 standardized, scalable processes; designed a \"parent-child\" program model to support reuse, variation, and experimentation; reimagined the end-to-end partner experience to enable self-service and transparency; and built the future-state system on Salesforce, aligning workflows across internal and external users.<br/><br/>We introduced AI across the lifecycle—accelerating current-state analysis and gap identification, enabling rapid prototyping of future-state workflows, and designing automated claim validation to reduce manual review. We weren't just improving a system—we were transforming how NVIDIA operates its partner ecosystem.",
    },
    solutionGalleryImages: [
      "/images/nvidia/NVIDIA_04.jpg",
      "/images/nvidia/NVIDIA_05.jpg",
    ],
    impactSection: {
      subtitle: "Outcomes",
      title: "Operational and revenue impact",
      text: "While still in implementation, the transformation is expected to deliver significant operational and revenue impact: standardized and scalable global program structure, faster time to launch and iterate on partner programs, improved transparency for both internal teams and external partners, and reduced operational burden across finance and marketing teams.",
      blocks: [
        {
          title: "Claims processing transformation",
          body: "AI-assisted validation reduces manual review to flagged cases only, with an estimated reduction to a fraction of total processing time—unlocking hundreds of hours of operational capacity while improving speed and accuracy.",
        },
        {
          title: "Scalable program structure",
          body: "Standardized global program structure enables faster time to launch and iterate on partner programs without proportional growth in support.",
        },
        {
          title: "Transparency and self-service",
          body: "Improved transparency for internal teams and external partners, with self-service capabilities reducing back-and-forth and operational burden.",
        },
      ],
    },
  },
  {
    id: "worldbank",
    client: "The World Bank",
    title: "Global road safety platform from concept to launch",
    summary:
      "Led experience strategy and platform design for the World Bank’s global road safety data initiative, improving transportation safety outcomes worldwide.",
    tags: [
      "Platform Design",
      "Product Strategy",
      "Rapid Prototyping",
      "User Research",
    ],
    image: "/images/worldbank/worldbank_card_background.jpg",
    galleryImages: [
      "/images/worldbank/worldbank_card_background.jpg",
    ],
    particleShape: "earth",
    summarySection: {
      subtitle: "Overview",
      title: "Data for safer roads",
      text: "The World Bank’s road safety initiative needed a platform to collect, analyze, and share road safety data across countries. We led experience strategy and platform design from concept through launch.",
    },
    myRoleSection: {
      subtitle: "My Role",
      title: "Experience strategy and design",
      text: "I led user research, experience strategy, and end-to-end platform design, working with technical and policy teams to align the product with real-world workflows and reporting needs.",
      numbers: [
        { value: 15, caption: "Countries in pilot" },
        { value: 6, caption: "Months to first release" },
        { value: 100, caption: "Data points per country (target)" },
      ],
    },
    solutionSection: {
      subtitle: "Solution",
      title: "Research-driven platform design",
      text: "We designed a platform that supported data entry, validation, and reporting for diverse country contexts—with clear governance and accessibility. Rapid prototyping and user testing kept the product aligned with stakeholder needs.",
    },
    impactSection: {
      blocks: [
        {
          title: "Faster insights",
          body: "Countries could submit and analyze road safety data in a consistent format, enabling faster regional and global insights.",
        },
        {
          title: "Inclusive design",
          body: "The platform was designed for varied literacy and connectivity, so more countries could participate meaningfully.",
        },
        {
          title: "Scalable foundation",
          body: "The initial launch established a foundation that could grow as more countries and data types were added.",
        },
      ],
      subtitle: "Outcomes",
      title: "Outcome",
      text: "The platform launched on schedule and was adopted by pilot countries, contributing to the World Bank’s road safety and data goals.",
    },
  },
  {
    id: "pods",
    client: "PODS",
    title: "Sales & service experience transformation (quote-to-cash)",
    summary:
      "Led the transformation of PODS' quote-to-cash experience, connecting sales and service systems to reduce call time, improve customer satisfaction, and eliminate revenue loss from fragmented workflows.",
    tags: [
      "Experience Design",
      "Quote-to-Cash",
      "Sales & Service",
      "Process Transformation",
    ],
    image: "/images/pods/pods_card_background.jpg",
    galleryImages: [
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
    ],
    particleShape: "lightbulb",
    summarySection: {
      subtitle: "Overview",
      title: "From fragmented touchpoints to a unified system",
      text: "PODS' sales and service operations were powered by disconnected legacy systems that hadn't kept pace with the business. Customer interactions spanned web, phone, and chat, but the experience across channels was fragmented—leading to poor handoffs, inconsistent pricing, and operational inefficiencies.<br/><br/>The impact was real: longer call times, frustrated agents, declining customer experience, and lost revenue due to errors and service breakdowns. The business needed to reimagine its entire quote-to-cash journey to create a connected, scalable system.",
    },
    myRoleSection: {
      subtitle: "My Role",
      title: "User Experience Lead for design and research",
      text: "I served as UX Lead for the experience design and research workstream, responsible for reimagining the end-to-end customer and agent experience across sales and service. While I owned the experience design, I also influenced business process transformation and the technical implementation on Salesforce—ensuring alignment across systems, workflows, and customer interactions. This was a full lifecycle transformation, from initial customer intent through fulfillment and service.",
      numbers: [
        { value: 3, caption: "Designers led within a broader team of 25+ (engineering, BA, PMO)" },
        { value: 40, caption: "Cross-functional stakeholders collaborated with (30–40 range)" },
        { value: 8, caption: "C-suite & executive leaders engaged across Sales, Service, Operations, IT" },
        { value: 3000, caption: "Agents trained and onboarded onto the new platform" },
      ],
    },
    solutionSection: {
      subtitle: "Solution",
      title: "One goal: a unified experience across all channels",
      text: "The core issue wasn't just outdated interfaces—it was a disconnected system. We reframed the problem around a single goal: create a unified, end-to-end customer and agent experience across all channels.<br/><br/>We reimagined the full quote-to-cash journey—from research to fulfillment and service; developed personas and journey maps across residential and commercial segments; redesigned the experience across web and agent-facing systems within Salesforce; standardized and simplified workflows to reduce friction and eliminate redundancy; and integrated critical systems (Salesforce, PROS pricing, Sitecore) to enable real-time data access..<br/><br/>We reduced reliance on \"swivel chair\" workflows by connecting previously siloed systems. The transformation focused on making the system work for both customers and agents—reducing friction at every step.",
    },
    solutionGalleryImages: [
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
      "/images/pods/pods_card_background.jpg",
    ],
    impactSection: {
      subtitle: "Outcomes",
      title: "Immediate and measurable impact",
      text: "The impact was immediate and measurable across both customer and operational metrics. The organization gained a connected system that enables more consistent, reliable customer interactions at scale.",
      blocks: [
        {
          title: "Faster, more effective calls",
          body: "Significant reduction in call times due to fewer system delays and improved access to information.",
        },
        {
          title: "Agent experience transformed",
          body: "Usability scores increased from 3.2 to 8.8, with improved satisfaction and efficiency.",
        },
        {
          title: "Customer satisfaction",
          body: "Increased customer satisfaction and improved Net Promoter Score, with enhanced cross-channel continuity between web and assisted experiences.",
        },
        {
          title: "Revenue protection",
          body: "Reduced revenue loss caused by pricing inconsistencies and service errors.",
        },
      ],
    },
  },
  {
    id: "ey",
    client: "Ernst & Young",
    title: "AI-enabled design lifecycle transformation and tool experimentation",
    summary: "AI-enabled design lifecycle transformation and tool experimentation at EY.",
    tags: ["AI", "Design Operations", "Tooling"],
    image: "/images/ey/ey_card_background.jpg",
    galleryImages: [
      "/images/ey/ey_card_background.jpg",
    ],
    particleShape: "bot",
    summarySection: {
      subtitle: "Overview",
      title: "Design at scale with AI",
      text: "EY’s design organization needed to scale delivery and consistency while exploring how AI could augment the design lifecycle. We led strategy and experimentation for AI-enabled design tools and processes.",
    },
    myRoleSection: {
      subtitle: "My Role",
      title: "Strategy and experimentation",
      text: "I led discovery, roadmap definition, and pilot design for AI tools in the design lifecycle, working with design, engineering, and risk to align on use cases and guardrails.",
      numbers: [
        { value: 4, caption: "Pilot tools evaluated" },
        { value: 10, caption: "Design teams in pilot" },
        { value: 1, caption: "Design lifecycle model aligned" },
      ],
    },
    solutionSection: {
      subtitle: "Solution",
      title: "Pilots and governance",
      text: "We defined a design lifecycle model and ran structured pilots for AI-assisted research, concepting, and delivery. Governance and quality checks were built in so teams could experiment safely.",
    },
    impactSection: {
      subtitle: "Outcomes",
      title: "Outcome",
      text: "The organization adopted a shared view of the design lifecycle and selected AI tools for broader rollout based on pilot results.",
      blocks: [
        {
          title: "Clear use cases",
          body: "We identified where AI could meaningfully accelerate work without compromising quality or consistency.",
        },
        {
          title: "Safe experimentation",
          body: "Pilots were run with clear scope and success criteria, so the organization could learn and scale what worked.",
        },
      ],
    },
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}

export function getProjectsList(): Pick<Project, "id" | "client" | "title" | "summary" | "tags" | "image">[] {
  return projects.map(({ id, client, title, summary, tags, image }) => ({
    id,
    client,
    title,
    summary,
    tags,
    image,
  }))
}
