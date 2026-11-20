export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  thumbnail: string;
  statusBadge?: string;
  fullCaseStudy: {
    overview?: string;
    course?: string;
    objective?: string;
    researchQuestions?: string[];
    dataUsed?: string[];
    methodology?: {
      formula?: string;
      description?: string;
      toolsList?: string[];
    };
    calculationHighlight?: {
      label: string;
      storeHours: string;
      clickCollectHours: string;
      additionalHours: string;
      insight: string;
    };
    processFlow?: string[];
    whatIStudied?: string[];
    recommendations?: Array<{
      title: string;
      description: string;
      metric: string;
    }>;
    results?: string[];
    visualPlaceholders?: Array<{
      title: string;
      description: string;
      status: string;
    }>;
    limitationOrNote?: string;
    honestResearchNote?: string;
    skillsDemonstrated?: string[];
    tools: string[];
    clientReference?: {
      companyName: string;
      linkedInUrl: string;
      notes: string;
    };
  };
}

export interface ExperienceItem {
  id: string;
  number: string;
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
  highlight?: string;
}

export interface SkillGroup {
  number: string;
  title: string;
  skills: string[];
}

export interface Achievement {
  number: string;
  stat: string;
  label: string;
  description: string;
  badge?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  image: string;
  badge?: string;
  credentialId?: string;
  verificationUrl?: string;
  description: string;
}
