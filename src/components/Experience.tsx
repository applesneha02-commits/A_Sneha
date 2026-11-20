import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, TrendingUp } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-charcoal py-24 sm:py-32 border-b border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-bright"></span>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-dustyrose font-bold">
                03 / CAREER PATH
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase font-black">
              EXPERIENCE
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-editorial text-2xl sm:text-3xl text-dustyrose italic max-w-md">
            &ldquo;Learning, creating, experimenting, and growing through real-world marketing experiences.&rdquo;
          </p>
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="hidden lg:block absolute left-[95px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-crimson via-white/20 to-transparent"></div>

          <div className="space-y-12 lg:space-y-16">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                {/* Large Red Numbering & Date (3 cols) */}
                <div className="lg:col-span-3 flex lg:flex-col items-baseline lg:items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-6xl sm:text-7xl text-crimson-bright group-hover:text-dustyrose transition-colors duration-300 leading-none font-black">
                      {exp.number}
                    </span>
                    <div className="hidden lg:block w-4 h-4 rounded-full bg-burgundy border-2 border-crimson -ml-[26px] z-10 shadow-glow-crimson"></div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-dustyrose font-mono font-bold">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-xs sm:text-sm uppercase tracking-widest text-warmivory/80 font-bold block">
                      {exp.organization}
                    </span>
                  </div>
                </div>

                {/* Main Experience Card (9 cols) */}
                <div className="lg:col-span-9 p-8 sm:p-10 rounded-2xl bg-obsidian border border-white/15 group-hover:border-crimson transition-all duration-300 shadow-2xl relative overflow-hidden">
                  
                  {/* Subtle Top-Right Accent */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-burgundy/20 rounded-full blur-2xl pointer-events-none"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide text-white uppercase font-black">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-dustyrose font-semibold">
                        <Briefcase className="w-4 h-4 text-crimson-bright" />
                        <span className="tracking-wider">{exp.organization}</span>
                      </div>
                    </div>

                    {/* Metric Highlight Badge */}
                    {exp.highlight && (
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burgundy border border-crimson/60 text-white text-xs sm:text-sm font-bold tracking-wider self-start sm:self-auto shadow-md">
                        <TrendingUp className="w-4 h-4 text-crimson-bright" />
                        <span>{exp.highlight}</span>
                      </div>
                    )}
                  </div>

                  {/* Responsibilities List */}
                  <div className="pt-6 space-y-4">
                    <p className="text-xs sm:text-sm uppercase tracking-widest text-dustyrose font-mono font-bold">
                      Key Responsibilities &amp; Deliverables:
                    </p>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3.5 text-base sm:text-lg text-warmivory leading-relaxed font-normal">
                          <CheckCircle2 className="w-5 h-5 text-crimson-bright shrink-0 mt-1" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
