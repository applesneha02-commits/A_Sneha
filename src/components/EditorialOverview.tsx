import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const EditorialOverview: React.FC = () => {
  const educationItems = [
    {
      degree: "BBA in Digital Marketing",
      institution: "Presidency University, Bengaluru",
      period: "2024 — 2027",
    },
    {
      degree: "Commerce (XII Business Studies)",
      institution: "PM SHRI Kendriya Vidyalaya No.1, Ambala",
      period: "2023 — 2024",
    },
  ];

  const skillTags = [
    "Social Media Strategy",
    "Content Planning",
    "Audience Research",
    "Competitor Analysis",
    "SEO (Basic)",
    "Canva",
    "CapCut",
    "Meta Business Suite",
    "Google Analytics",
    "WordPress",
    "ChatGPT",
    "Notion AI",
    "Claude",
    "NotebookLM",
    "Business Communication",
    "Networking",
    "Creativity",
  ];

  const experienceSteps = [
    {
      number: "01",
      role: "SOCIAL MEDIA TEAM HEAD",
      org: "Digitopedia · Dec 2024 – Present",
      desc: "Grew followers by 40% and generated 2,000+ post impressions across Instagram & LinkedIn.",
    },
    {
      number: "02",
      role: "DIGITAL MARKETING INTERN",
      org: "AWAKE · June 2026 – July 2026",
      desc: "Conducted competitor benchmarking and researched SEO, AEO, and GEO search dynamics.",
    },
    {
      number: "03",
      role: "SOCIAL MEDIA INTERN",
      org: "Digitopedia Solutions · Feb 2026 – May 2026",
      desc: "Executed weekly cadence of 4–5 posts/week and analyzed 5+ competitor accounts.",
    },
  ];

  return (
    <section id="experience" className="relative w-full bg-obsidian py-20 sm:py-28 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* 3-Column Editorial Split matching the reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* =========================================
              COLUMN 1: EDUCATION & SKILLS (4 COLS)
             ========================================= */}
          <div className="lg:col-span-4 p-8 sm:p-9 rounded-2xl bg-charcoal/80 border border-white/15 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="pb-4 border-b border-white/15">
                <h3 className="font-display text-3xl tracking-wide uppercase text-white font-black">
                  EDUCATION &amp; SKILLS
                </h3>
              </div>

              {/* Education List */}
              <div className="space-y-5">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson-bright font-black block">
                  EDUCATION
                </span>
                
                {educationItems.map((edu) => (
                  <div key={edu.degree} className="flex items-start justify-between gap-3 pb-4 border-b border-white/10 last:border-none">
                    <div className="space-y-1">
                      <p className="text-base sm:text-lg font-bold text-white">
                        {edu.degree}
                      </p>
                      <p className="text-xs sm:text-sm text-warmivory/80 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm font-mono text-crimson-bright shrink-0 font-bold">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skills Tags: BOLDER & HIGHER CONTRAST */}
              <div className="space-y-4 pt-2">
                <span className="text-xs font-mono uppercase tracking-widest text-crimson-bright font-black block">
                  CORE SKILLS &amp; TOOLS
                </span>
                
                <div className="flex flex-wrap gap-2">
                  {skillTags.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-lg bg-obsidian border border-white/20 text-xs sm:text-sm font-sans font-semibold text-white hover:border-crimson hover:bg-burgundy/40 transition-colors shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-warmivory/70 font-medium">
              <span>FOUNDATION</span>
              <span className="text-dustyrose font-bold">VERIFIED CURRICULUM</span>
            </div>
          </div>

          {/* =========================================
              COLUMN 2: EXPERIENCE / WORK PROCESS (4 COLS)
              Vertical timeline with circles & connectors
             ========================================= */}
          <div className="lg:col-span-4 p-8 sm:p-9 rounded-2xl bg-charcoal/80 border border-white/15 flex flex-col justify-between space-y-8 shadow-xl">
            <div className="space-y-6">
              
              {/* Header */}
              <div className="pb-4 border-b border-white/15">
                <h3 className="font-display text-3xl tracking-wide uppercase text-white font-black">
                  WORK EXPERIENCE
                </h3>
              </div>

              {/* Vertical Timeline: Readable & Bold */}
              <div className="relative space-y-7 pl-5 border-l-2 border-crimson/40 ml-2">
                {experienceSteps.map((step) => (
                  <div key={step.number} className="relative group">
                    {/* Circle Indicator on vertical line */}
                    <div className="absolute -left-[29px] top-1.5 w-4 h-4 rounded-full bg-obsidian border-2 border-crimson group-hover:bg-crimson transition-colors"></div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black text-crimson-bright">
                          {step.number}
                        </span>
                        <h4 className="font-display text-lg sm:text-xl tracking-wide text-white uppercase group-hover:text-dustyrose transition-colors font-bold">
                          {step.role}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm font-mono text-dustyrose font-bold">
                        {step.org}
                      </p>
                      <p className="text-sm text-warmivory font-normal leading-relaxed pt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-warmivory/70 font-medium">
              <span>TRAJECTORY</span>
              <span className="text-emerald-400 font-bold">DEC 2024 — PRESENT</span>
            </div>
          </div>

          {/* =========================================
              COLUMN 3: CONTRASTING QUOTE PANEL (4 COLS)
              Solid deep burgundy #4B101E background!
             ========================================= */}
          <div className="lg:col-span-4 p-8 sm:p-10 rounded-2xl bg-burgundy border border-crimson/50 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            {/* Ambient Background Spotlight */}
            <div className="absolute -right-8 -top-8 w-56 h-56 bg-crimson/40 rounded-full blur-2xl pointer-events-none"></div>

            <div className="space-y-6 relative z-10">
              
              {/* Big Double Quotes in Red */}
              <div className="font-serif text-7xl text-crimson-bright leading-none select-none">
                &ldquo;&ldquo;
              </div>

              {/* Editorial Quote: Legible, Bold Font */}
              <blockquote className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug italic">
                &ldquo;Good content is not just how it looks, but how it works to build audience connection.&rdquo;
              </blockquote>

              {/* Signature in cursive script */}
              <div className="pt-4 space-y-1">
                <span className="font-editorial italic text-4xl text-softblush block font-medium">
                  {PERSONAL_INFO.brandSignature}
                </span>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-warmivory font-bold block">
                  A Sneha · Content Strategist
                </span>
              </div>

            </div>

            {/* Bottom Callout matching reference */}
            <div className="pt-8 mt-6 border-t border-crimson/40 relative z-10 flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-warmivory">
              <span className="font-bold text-softblush">
                LET&apos;S CREATE SOMETHING GREAT TOGETHER
              </span>
              <span className="text-crimson-bright font-serif text-lg">✦</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
