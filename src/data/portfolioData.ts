import { Project, ExperienceItem, SkillGroup, Achievement, Certificate } from '../types';

export const PERSONAL_INFO = {
  name: "A SNEHA",
  firstName: "A SNEHA",
  professionalIdentity: "SOCIAL MEDIA MARKETER · DIGITAL MARKETER · CONTENT STRATEGIST",
  roleTitles: [
    "SOCIAL MEDIA MARKETER",
    "DIGITAL MARKETER",
    "CONTENT STRATEGIST",
  ],
  heroGreeting: "Hello, I'm",
  heroHeadline: "Hi, I'm A Sneha. I turn content into audience growth.",
  heroIntroduction:
    "I'm A Sneha, a BBA Digital Marketing student at Presidency University, Bengaluru. I plan content, study competitors and build brands on Instagram and LinkedIn. I grew my own LinkedIn from 100+ to 500+ connections, and I now lead social media at Digitopedia.",
  topBadgeLeft: "SOCIAL MEDIA MARKETER / DIGITAL CREATOR",
  topBadgeRight: "OPEN TO INTERNSHIPS & COLLABORATIONS",
  supportingSideText: "Turning ideas into meaningful digital growth.",
  email: "snehaa9577@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/a--sneha",
  portfolioUrl: "https://a-sneha.vercel.app/",
  location: "Bengaluru, India",
  resumePath: "/resume.pdf",
  portraitPath: "/sneha_portrait.jpg",
  brandQuote: "Good content doesn't just capture attention. It creates connections, builds trust, and turns audiences into communities.",
  brandSignature: "A Sneha",
  brandQuoteSub: "Let's create something meaningful together.",
};

export const STATISTICS_STRIP = [
  {
    number: "100+ → 500+",
    label: "LINKEDIN CONNECTIONS",
    description: "Organic professional network expansion",
  },
  {
    number: "30–40 → 2,000+",
    label: "POST IMPRESSIONS",
    description: "50x reach amplification per post",
  },
  {
    number: "40%",
    label: "FOLLOWER GROWTH",
    description: "Consistent audience expansion on managed handles",
  },
  {
    number: "3",
    label: "MARKETING ROLES",
    description: "Team Head & 2 industry internships",
  },
  {
    number: "5+",
    label: "COMPETITOR PAGES ANALYSED",
    description: "Benchmarked content cadence & hooks",
  },
];

export const ABOUT_CONTENT = {
  heading: "ABOUT ME",
  supportingHeading: "Creative thinking. Strategic execution. Measurable growth.",
  paragraphs: [
    {
      title: "Who I Am",
      text: "I'm A Sneha, a BBA (Digital Marketing) student at Presidency University, Bengaluru (2024–2027). I'm interested in social media growth, content strategy and brand building.",
    },
    {
      title: "My Journey",
      text: "I started by building my own personal brand on LinkedIn. By posting regularly about digital marketing, AI tools and professional development, I grew from 100+ to 500+ connections. My post impressions went from around 30–40 to over 2,000. I then used the same approach for client and team accounts at Digitopedia.",
    },
    {
      title: "How I Work",
      text: "I like to plan first, then create, then check the numbers. I research competitors, plan a posting schedule, make reels, carousels and promotional posts, and review what worked so the next post is better.",
    },
    {
      title: "What I'm Looking For",
      text: "I'm open to internships, networking and collaborations in digital marketing.",
    },
  ],
  quickFacts: [
    {
      label: "EDUCATION",
      primary: "BBA Digital Marketing",
      secondary: "2024–2027",
      institution: "Presidency University, Bengaluru",
    },
    {
      label: "LOCATION",
      primary: "Bengaluru, India",
      secondary: "Open to Remote & Hybrid Roles",
      institution: "Karnataka, IN",
    },
    {
      label: "FOCUS",
      primary: "Social Media Strategy",
      secondary: "Content Planning & Cadence",
      institution: "Audience Research & Growth",
    },
    {
      label: "PRIMARY TOOLS",
      primary: "Canva · CapCut · Meta Suite",
      secondary: "Google Analytics · WordPress",
      institution: "ChatGPT · Claude · Notion AI",
    },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-01",
    number: "01",
    role: "SOCIAL MEDIA TEAM HEAD",
    organization: "Digitopedia",
    period: "December 2024 – Present",
    responsibilities: [
      "Lead content planning and social media activities across Instagram and LinkedIn.",
      "Create reels, carousels, and promotional content to improve engagement.",
      "Grew followers by 40% and achieved 2,000+ post impressions.",
      "Coordinate campaigns and support community-building initiatives.",
    ],
    highlight: "40% FOLLOWER GROWTH",
  },
  {
    id: "exp-02",
    number: "02",
    role: "DIGITAL MARKETING INTERN",
    organization: "AWAKE",
    period: "June 2026 – July 2026",
    responsibilities: [
      "Analysed AWAKE's social media presence and suggested improvements in content consistency and branding.",
      "Conducted competitor analysis to benchmark content strategies and identify best practices.",
      "Reviewed organisational reports.",
      "Researched SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) to recommend a structured content strategy.",
    ],
    highlight: "SEO, AEO & GEO RESEARCH",
  },
  {
    id: "exp-03",
    number: "03",
    role: "SOCIAL MEDIA INTERN",
    organization: "Digitopedia Solutions",
    period: "February 2026 – May 2026",
    responsibilities: [
      "Planned and executed weekly posting schedules of 4–5 posts per week for client accounts.",
      "Conducted competitor analysis across 5+ similar pages to identify growth opportunities.",
      "Supported digital campaigns to improve visibility and audience reach.",
    ],
    highlight: "4–5 POSTS/WEEK CADENCE",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    number: "01",
    title: "CORE SKILLS",
    skills: [
      "Social Media Strategy",
      "Content Planning",
      "Audience Research",
      "Competitor Analysis",
      "SEO (Basic)",
    ],
  },
  {
    number: "02",
    title: "MARKETING & CREATIVE TOOLS",
    skills: [
      "Canva",
      "CapCut",
      "Meta Business Suite",
      "Google Analytics",
      "WordPress",
    ],
  },
  {
    number: "03",
    title: "AI TOOLS",
    skills: [
      "ChatGPT",
      "Notion AI",
      "Claude",
      "NotebookLM",
    ],
  },
  {
    number: "04",
    title: "SOFT SKILLS",
    skills: [
      "Business Communication",
      "Networking",
      "Adaptability",
      "Creativity",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "zomato",
    number: "01",
    title: "Zomato's Digital Presence",
    category: "SOCIAL & WEB ANALYTICS",
    shortDescription: "A web traffic and social media engagement analysis of Zomato.",
    thumbnail: "/projects/zomato-analytics.jpg",
    statusBadge: "PROJECT IN PROGRESS",
    fullCaseStudy: {
      course: "BBD3005 Social & Web Analytics — Individual Project, BBA Digital Marketing, Semester V",
      overview:
        "Zomato competes in a crowded food-tech market where users switch platforms easily. This project looks at which traffic sources bring genuinely engaged visitors and which social content formats earn the most engagement.",
      researchQuestions: [
        "Which traffic sources bring the most visits, and how does bounce rate differ by source?",
        "How engaged are visitors, in terms of session duration and pages per visit?",
        "Which platforms and content formats (reels, images, carousels, text) have the highest engagement rate?",
        "When does Zomato's audience engage the most (day and time)?",
      ],
      dataUsed: [
        "SimilarWeb public estimates for zomato.com (latest 3 months).",
        "Post-level data from Zomato's public Instagram, X, LinkedIn and YouTube accounts (last 90 days).",
        "Google Trends search interest (last 12 months).",
      ],
      methodology: {
        formula: "Engagement Rate = [(Likes + Comments + Shares) ÷ Followers] × 100",
        description: "Data cleaning and pivot analysis performed in Microsoft Excel. Visual interactive dashboards created in Power BI / Looker Studio.",
        toolsList: ["SimilarWeb", "Microsoft Excel", "Power BI / Looker Studio", "Google Trends", "Notion"],
      },
      visualPlaceholders: [
        {
          title: "Traffic Source Split",
          description: "Direct vs Organic Search vs Referral vs Social media traffic distribution breakdown.",
          status: "Chart framework configured · Data pipeline pending final sync",
        },
        {
          title: "Bounce Rate Comparison",
          description: "Comparative bounce rate indexed by acquisition channel.",
          status: "Template ready · Awaiting final validation",
        },
        {
          title: "Search & Visit Trend Line",
          description: "12-month Google Trends search interest correlated with seasonal campaigns.",
          status: "Timeline configured",
        },
        {
          title: "Engagement by Content Format",
          description: "Reels vs Carousels vs Static creatives vs Text posts engagement index.",
          status: "Metric matrices defined",
        },
        {
          title: "Posting-Time Heatmap",
          description: "Day-of-week and hour-of-day audience interaction intensity heatmap.",
          status: "Heatmap layout ready",
        },
        {
          title: "Executive Summary Dashboard",
          description: "Unified Looker Studio / Power BI executive overview dashboard.",
          status: "Dashboard view prepared",
        },
      ],
      limitationOrNote:
        "SimilarWeb figures are third-party estimates, not Zomato's own analytics. Internal proprietary metrics and conversion data are not publicly verified.",
      tools: ["SimilarWeb", "Excel", "Power BI / Looker Studio", "Google Trends", "Notion"],
    },
  },
  {
    id: "ikea",
    number: "02",
    title: "IKEA Nagasandra Warehouse Study",
    category: "WAREHOUSE MANAGEMENT / BUSINESS ANALYSIS",
    shortDescription: "A warehouse management case study of IKEA's Nagasandra store in Bengaluru.",
    thumbnail: "/projects/ikea-warehouse.jpg",
    fullCaseStudy: {
      overview:
        "IKEA Nagasandra opened in June 2022 as IKEA's first store in Karnataka. It covers about 42,000 m², offers around 7,000 products and employed more than 1,000 co-workers at opening (source: Ingka Group, 2022). It combines showroom display, inventory storage, self-service collection and order fulfilment.",
      whatIStudied: [
        "Facility profile and demographic customer flow.",
        "Strategic importance and location accessibility along Tumkur Road corridor.",
        "Direct Nagasandra Metro connectivity vs arterial road access.",
        "Risks of traffic delays for bulky last-mile and regional deliveries.",
        "Core warehouse operations: Receiving, Put-away, Storage, Picking, Packing, and Dispatch.",
        "Equipment infrastructure: High-bay pallet racking, Forklifts, Electric pallet trucks, Handheld barcode scanners.",
        "Operational data analysis and bottleneck identification.",
        "Structured evaluation and operational recommendations.",
      ],
      calculationHighlight: {
        label: "Click & Collect Operational Advantage",
        storeHours: "11 hours/day × 7 days = 77 hours/week",
        clickCollectHours: "13 hours/day × 7 days = 91 hours/week",
        additionalHours: "14 additional hours every week",
        insight:
          "Click & Collect provides 14 additional hours of revenue and fulfilment utility weekly, enabling customer pickups before showroom opening and after floor closing.",
      },
      processFlow: [
        "Receiving",
        "Inspection",
        "Put-away",
        "Storage",
        "Order Processing",
        "Picking",
        "Packing",
        "Final Verification",
        "Collection / Dispatch",
      ],
      recommendations: [
        {
          title: "Recommendation 01: Real-Time Inventory Visibility",
          description:
            "Improve real-time inventory visibility through continuous barcode scanning, cycle counting, and live stock synchronization across ERP systems.",
          metric: "Measurement: Inventory Accuracy Percentage (%)",
        },
        {
          title: "Recommendation 02: Demand-Based Slotting Optimization",
          description:
            "Improve floor space utilization and product picking velocity through velocity-based (ABC classification) item slotting closer to packing lines.",
          metric: "Measurement: Average Picking Time Per Order (Minutes)",
        },
      ],
      honestResearchNote:
        "Exact internal procedures are not publicly verified, so the process flow is a general model and the recommendations are improvement opportunities, not claims about current problems.",
      skillsDemonstrated: ["Supply Chain Research", "Data Interpretation", "Structured Business Reporting", "Process Flow Modeling"],
      tools: ["Operational Research", "Process Flow Architecture", "Ingka Group Case Data", "Excel"],
    },
  },
  {
    id: "linkedin-growth",
    number: "03",
    title: "LinkedIn Growth Project",
    category: "PERSONAL BRANDING / SOCIAL MEDIA GROWTH",
    shortDescription: "Building a personal brand through consistent content and professional networking.",
    thumbnail: "/projects/linkedin-growth.jpg",
    fullCaseStudy: {
      overview:
        "Developing an authentic professional brand on LinkedIn through structured content, industry insights on digital marketing and AI tools, and networking to drive exponential organic audience growth.",
      objective:
        "Develop a professional presence on LinkedIn through consistent content creation, strategic networking and audience engagement.",
      results: [
        "Grew LinkedIn connections from 100+ to 500+ connections organically.",
        "Increased post impressions from approximately 30–40 to 2,000+ per post.",
        "Shared regular insights on digital marketing trends, AI productivity tools, and student career progression.",
        "Analyzed content performance metrics (shares, comments, profile views) to systematically iterate on hooks and formats.",
      ],
      visualPlaceholders: [
        {
          title: "Top-Performing LinkedIn Post Creatives",
          description: "Curated carousel and text breakdowns focusing on AI tools and digital marketing frameworks.",
          status: "Verified high-engagement samples",
        },
        {
          title: "LinkedIn In-App Analytics Dashboard",
          description: "Screenshots capturing the trajectory from 40 views to 2,000+ impressions.",
          status: "Live metrics archived",
        },
        {
          title: "Connection Growth Trajectory",
          description: "Milestone snapshot demonstrating expansion to 500+ relevant industry connections.",
          status: "500+ Connections Badge verified",
        },
        {
          title: "WHAT CONTENT TYPE WORKED BEST",
          description: "Structured comparison of carousel educational posts versus text thought leadership.",
          status: "[To be documented in ongoing case iteration]",
        },
      ],
      tools: ["LinkedIn Creator Analytics", "Canva", "AI Writing & Research Tools", "Content Planner"],
    },
  },
  {
    id: "freelance-smm",
    number: "04",
    title: "Social Media Management (Freelance)",
    category: "SOCIAL MEDIA MANAGEMENT",
    shortDescription: "Managing content and audience engagement to strengthen a business's online presence.",
    thumbnail: "/projects/movers-smm.jpg",
    fullCaseStudy: {
      overview:
        "Managed social media content planning and audience engagement for a business account to establish authority and drive targeted reach.",
      clientReference: {
        companyName: "Movers India Private Limited",
        linkedInUrl: "https://www.linkedin.com/company/movers-india-private-limited/home/?viewAsMember=true",
        notes: "Corporate and client social presence management & brand messaging.",
      },
      results: [
        "Planned and created structured weekly posts to reinforce brand visibility and value propositions.",
        "Achieved 40% follower growth through consistent posting cadence and audience engagement strategies.",
        "Monitored account performance metrics weekly to optimize creative hooks, caption length, and posting hours.",
      ],
      visualPlaceholders: [
        {
          title: "Business Social Creatives",
          description: "Professional promotional graphics and branded announcements.",
          status: "Campaign creatives archived",
        },
        {
          title: "Audience Growth Verification",
          description: "Analytics reports reflecting 40% follower acquisition curve.",
          status: "Performance metrics recorded",
        },
        {
          title: "Content Strategy Calendar",
          description: "Monthly thematic editorial grid balancing corporate milestones with industry insights.",
          status: "Posting calendar architecture",
        },
      ],
      limitationOrNote:
        "Client proprietary revenue and direct conversion figures remain strictly confidential. Public follower metrics and post engagements are referenced with permission.",
      tools: ["Canva", "Meta Business Suite", "LinkedIn Campaign Manager", "Content Scheduler"],
    },
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    number: "01",
    stat: "500+",
    label: "LINKEDIN CONNECTIONS",
    description: "Grew from 100+ through consistent content creation, personal branding, and professional networking.",
    badge: "Personal Brand",
  },
  {
    number: "02",
    stat: "2,000+",
    label: "POST IMPRESSIONS",
    description: "Increased from baseline 30–40 impressions through data-backed content optimization and targeted hashtags.",
    badge: "50x Reach",
  },
  {
    number: "03",
    stat: "40%",
    label: "FOLLOWER GROWTH",
    description: "Achieved on social media handles managed at Digitopedia and freelance corporate projects.",
    badge: "Audience Expansion",
  },
  {
    number: "04",
    stat: "TEAM HEAD",
    label: "SOCIAL MEDIA TEAM HEAD",
    description: "Leading social media and content activities at Digitopedia since December 2024 across Instagram and LinkedIn.",
    badge: "Leadership Role",
  },
  {
    number: "05",
    stat: "3",
    label: "MARKETING ROLES",
    description: "Demonstrated real-world capability as Team Head and through internships across Digitopedia and AWAKE.",
    badge: "Real Experience",
  },
];

export const VERIFIED_HONORS = [
  {
    title: "Best Management Team Award",
    event: "ELATION 2025 — National Level Cultural & Management Fest",
    institution: "Presidency University, Bengaluru",
    image: "/certificates/best_management_team _ELATION_2025_National_level_cultural_fest.jpeg",
  },
  {
    title: "Certificate of Appreciation",
    event: "Academic & Campus Event Leadership / Tutor Workshop",
    institution: "Presidency University",
    image: "/certificates/tutor_workshop.jpeg",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "cert-01",
    title: "Digital Marketing Specialization",
    issuer: "TopperRank",
    year: "2024",
    image: "/certificates/topperrank_internship_completion_certificate.jpeg",
    badge: "Govt of India MCA Verified",
    description:
      "Comprehensive digital marketing practical training covering campaign architecture, search visibility, social algorithms, and conversion tracking.",
  },
  {
    id: "cert-02",
    title: "AI for Business Professionals",
    issuer: "HP LIFE Foundation",
    year: "2024",
    image: "/certificates/WhatsApp Image 2026-11-20 at 12.29.33 PM.jpeg",
    badge: "HP Foundation Certified",
    description:
      "Official certificate of completion for online course on Artificial Intelligence implementation in enterprise business operations and strategic workflows.",
  },
  {
    id: "cert-03",
    title: "Semrush SEO Course with Brian Dean",
    issuer: "Semrush Academy",
    year: "2024",
    image: "/certificates/WhatsApp Image 2026-11-20 at 12.29.33 PM (1).jpeg",
    badge: "Industry Standard",
    description:
      "Advanced organic search optimization, keyword intent modeling, backlink acquisition architecture, and competitive on-page auditing.",
  },
  {
    id: "cert-04",
    title: "Project Management Fundamentals",
    issuer: "Presidency University Training",
    year: "2024",
    image: "/certificates/WhatsApp Image 2026-11-20 at 12.29.32 PM (2).jpeg",
    badge: "Operations & Planning",
    description:
      "Structured project delivery fundamentals, milestone tracking, resource allocation, and team workflow management.",
  },
  {
    id: "cert-05",
    title: "Digital Marketing Internship",
    issuer: "Digitopedia Solutions",
    year: "2024",
    image: "/certificates/WhatsApp Image 2026-11-20 at 12.29.33 PM (2).jpeg",
    badge: "Practical Industry Work",
    description:
      "Verified internship completion certificate executing content schedules (4-5 posts/week), competitor analysis, and multi-channel campaigns.",
  },
  {
    id: "cert-06",
    title: "AWS Cloud Training & Certification",
    issuer: "Amazon Web Services (AWS)",
    year: "2024",
    image: "/certificates/WhatsApp Image 2026-11-20 at 12.29.30 PM (1).jpeg",
    badge: "Cloud Fundamentals",
    description:
      "Cloud concepts, digital infrastructure fundamentals, and data management foundations.",
  },
];
