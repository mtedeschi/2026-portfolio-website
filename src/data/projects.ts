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
    title: "Global road safety platform from concept to global deployment",
    summary:
      "Led the end-to-end design of the World Bank's DRIVER platform, enabling governments across 13+ countries to use data and predictive modeling to reduce traffic accidents and save lives.",
    tags: [
      "Platform Design",
      "Product Strategy",
      "Rapid Prototyping",
      "User Research",
    ],
    image: "/images/worldbank/worldbank_card_background.jpg",
    galleryImages: [
      "/images/worldbank/DRIVER_01.jpg",
      "/images/worldbank/DRIVER_04.jpg",
      "/images/worldbank/DRIVER_03.jpg",
      "/images/worldbank/DRIVER_02.jpg",
    ],
    particleShape: "earth",
    summarySection: {
      subtitle: "Overview",
      title: "From fragmented data to life-saving decisions",
      text: "Road traffic accidents are one of the leading causes of death globally, particularly in developing regions where data is fragmented, inconsistent, or not captured at all. Without reliable data, governments struggle to identify high-risk areas (\"blackspots\") or justify investments in infrastructure and policy changes.<br/><br/>The World Bank's Global Road Safety Facility (GRSF) set out to change this by developing DRIVER, an open platform designed to help governments and organizations track, analyze, and reduce traffic-related fatalities. This wasn't just a data problem. It was a systems problem spanning countries, agencies, and on-the-ground realities, with the potential to directly impact human lives.",
    },
    myRoleSection: {
      subtitle: "My Role",
      title: "Lead UI/UX from concept through rollout",
      text: "I served as Lead UI/UX Designer, owning product direction from early concept through global deployment. This included defining the product vision, conducting research across multiple countries, prototyping and validating solutions, designing the full platform experience, and building the front-end foundation for implementation.<br/><br/>This was not a prototype. It was a product deployed and used globally.",
      numbers: [
        { value: 10, caption: "Core team members collaborating with stakeholders and government users" },
        { value: 15, caption: "Pilots implemented across 13+ countries" },
        { value: 16, caption: "Government organizations engaged in the initial pilot" },
        { value: 4500, caption: "Users trained globally" },
        { value: 13, caption: "Countries reached, with multilingual and RTL-ready design" },
      ],
    },
    solutionSection: {
      subtitle: "Solution",
      title: "Standardize data to unlock action",
      text: "The core challenge was fragmentation. In many regions, accident data was paper-based, inconsistent, or siloed across agencies, making it nearly impossible to take meaningful action.<br/><br/>We grounded the solution in a simple idea: standardize data to unlock decision-making. From that foundation, I helped design an end-to-end platform: a mobile app for field data capture by police and officials; a centralized data system to unify inputs across agencies; dashboards and analytics tools to identify high-risk locations; and a predictive modeling experience to simulate interventions (for example, traffic lights or barriers) and forecast impact.<br/><br/>Beyond interface design, I helped define the data model and taxonomy, ensuring consistency across countries while allowing for local variation. I also influenced front-end architecture to support a scalable, white-label solution. The platform leveraged machine learning and statistical modeling to move beyond reporting, enabling governments to proactively plan and justify interventions.",
    },
    impactSection: {
      blocks: [
        {
          title: "Global adoption and reach",
          body: "Implemented in 15 pilots across 13+ countries, with 4,500+ trained users and 16+ government organizations actively supported across regions.",
        },
        {
          title: "Policy and infrastructure impact",
          body: "Used to inform infrastructure investments and policy decisions while enabling cross-agency collaboration through shared data systems.",
        },
        {
          title: "Recognized road safety outcomes",
          body: "The platform and broader GRSF initiative received multiple Prince Michael International Road Safety Awards. Cities such as Fortaleza, Brazil, used DRIVER to implement safety improvements tied to award-winning outcomes.",
        },
        {
          title: "From reactive to proactive",
          body: "DRIVER helped shift road safety work from reactive response to proactive, data-driven planning at national and city levels.",
        },
      ],
      subtitle: "Outcomes",
      title: "Global systems change with real-world impact",
      text: "This project demonstrates leadership across systems, not just screens. It required navigating government and policy environments, cross-country implementation complexity, and global data standardization under real-world field constraints.<br/><br/>Ultimately, DRIVER reflects the kind of work where design, technology, and systems thinking come together to improve how the world operates and help save lives.",
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
      "/images/pods/PODS_01.jpg",
      "/images/pods/PODS_02.jpg",
      "/images/pods/PODS_03.jpg",
      "/images/pods/PODS_09.jpg",
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
      "/images/pods/PODS_04.jpg",
      "/images/pods/PODS_05.jpg",
      "/images/pods/PODS_06.jpg",
      "/images/pods/PODS_07.jpg",
      "/images/pods/PODS_08.jpg",
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
    title: "EY Studio+ AI Lab Design & Delivery Transformation",
    summary:
      "Created and led EY’s AI Lab to operationalize AI across design and delivery—aligning teams, defining workflows, and enabling scalable, AI-driven ways of working.",
    tags: ["AI Enablement", "Design & Delivery", "Operating Model", "Tooling Strategy"],
    image: "/images/ey/ey_card_background.jpg",
    galleryImages: [
      "/images/ey/EY_01.jpg",
      "/images/ey/EY_02.jpg",
      "/images/ey/EY_03.jpg",
      "/images/ey/EY_04.jpg",
    ],
    particleShape: "bot",
    summarySection: {
      subtitle: "Overview",
      title: "Moving from experimentation to scalable AI-enabled delivery",
      text: "As AI rapidly entered the design and product space, EY’s Design Studio faced a familiar challenge: high interest, fragmented experimentation, and no clear path to scale. Teams were exploring tools independently, but without a shared strategy, it was unclear which tools to adopt, how they fit into delivery, or how to communicate their value to clients.<br/><br/>I initiated and led the creation of an AI Lab to unify these efforts—moving from experimentation to a structured, scalable approach that could reshape how the organization sells and delivers work.",
    },
    myRoleSection: {
      subtitle: "My Role",
      title: "Led the AI Lab from concept through execution",
      text: "I led the AI Lab from concept through execution, defining the strategy, tooling, and operating model for AI-enabled design and delivery. This included aligning leadership, evaluating tools, and designing new ways of working that could be adopted across the organization.",
      numbers: [
        { value: 80, caption: "Design Studio designers impacted" },
        { value: 1500, caption: "Studio+ team members influenced" },
        { value: 50, caption: "AI tools evaluated across use cases" },
        { value: 8, caption: "Strategic tools selected for adoption" },
        { value: 3, caption: "Structured experimentation cycles ran" },
        { value: 6, caption: "Core delivery flows redefined" },
      ],
    },
    solutionSection: {
      subtitle: "Solution",
      title: "Tooling with intent, process flows, and practical enablement",
      text: "The core issue wasn’t lack of interest in AI—it was lack of structure. We grounded the effort in a simple belief: AI only creates value when it’s embedded into how work is sold and delivered.<br/><br/>From that, we evaluated and curated a focused set of tools aligned to real use cases, supported by “battle cards” that clarified when and how each tool should be used, analyzed historical project data and used AI (Copilot) to identify common delivery patterns, then defined six standardized process flows—mapping how staffing, timelines, and outputs change in an AI-enabled model, and created reusable materials for internal teams and client conversations—equipping teams to explain how AI changes delivery, value, and cost with confidence.<br/><br/>To avoid hype, we introduced a confidence-based framework—grounding every projection in how likely it was to deliver real impact.",
    },
    impactSection: {
      subtitle: "Outcomes",
      title: "Alignment that enabled scalable adoption",
      text: "The AI Lab shifted the organization from experimentation to alignment—establishing a clear shared approach to AI-enabled delivery, enabling adoption of new tools in a complex enterprise environment, and reducing friction in sales by giving teams a structured way to talk about AI.",
      blocks: [
        {
          title: "Shared approach to AI-enabled delivery",
          body: "Established a clear, coordinated, and repeatable way to deliver AI-enabled work across teams—so adoption wasn’t dependent on individual experimentation.",
        },
        {
          title: "Reduced sales friction with confidence-based enablement",
          body: "Enabled teams to communicate AI value to clients with reusable materials and “battle cards,” improving internal confidence and strengthening client conversations.",
        },
        {
          title: "Upskilling and learning priorities",
          body: "Informed upskilling and learning priorities across the Studio+ ecosystem, ensuring teams built capability as tools and workflows evolved.",
        },
        {
          title: "From isolated tasks to AI-augmented systems",
          body: "Changed how teams think about their work—from disconnected tool usage to AI-augmented delivery systems connected to proposals, staffing, and outcomes.",
        },
      ],
    },
  },
]

export function getProject(id: string): Project | undefined {
  const normalized = id.trim().toLowerCase()
  return projects.find((p) => p.id === normalized)
}

export function getProjectsList(): Pick<Project, "id" | "client" | "title" | "summary" | "tags" | "image">[] {
  // Controls homepage carousel order without affecting individual project pages.
  const carouselOrder = ["nvidia", "solventum", "ey", "pods", "worldbank"]
  const byId = new Map(projects.map((p) => [p.id, p] as const))

  const orderedProjects = carouselOrder
    .map((id) => byId.get(id))
    .filter((p): p is Project => Boolean(p))

  // If more projects are added later, keep them after the explicit order.
  const restProjects = projects.filter((p) => !carouselOrder.includes(p.id))

  return [...orderedProjects, ...restProjects].map(
    ({ id, client, title, summary, tags, image }) => ({
      id,
      client,
      title,
      summary,
      tags,
      image,
    }),
  )
}
