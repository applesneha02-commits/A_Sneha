import React from 'react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { Compass, PenTool, Cpu, Users } from 'lucide-react';

export const Skills: React.FC = () => {
  const groupIcons = [
    <Compass className="w-5 h-5 text-crimson-bright" key="core" />,
    <PenTool className="w-5 h-5 text-crimson-bright" key="tools" />,
    <Cpu className="w-5 h-5 text-crimson-bright" key="ai" />,
    <Users className="w-5 h-5 text-crimson-bright" key="soft" />,
  ];

  return (
    <section id="skills" className="relative w-full bg-obsidian py-24 sm:py-32 border-b border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-bright"></span>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-dustyrose font-bold">
                04 / CAPABILITIES &amp; TOOLKIT
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase font-black">
              MY SKILLS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-editorial text-2xl sm:text-3xl text-dustyrose italic max-w-md">
            &ldquo;I combine creative content with research and analytics, so every post has a reason behind it.&rdquo;
          </p>
        </div>

        {/* Four Visually Distinct Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.title}
              className="p-8 rounded-2xl bg-charcoal border border-white/15 hover:border-crimson transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-glow-burgundy"
            >
              <div>
                {/* Group Top Meta */}
                <div className="flex items-center justify-between pb-5 border-b border-white/15 mb-6">
                  <div className="flex items-center gap-2.5">
                    {groupIcons[idx % groupIcons.length]}
                    <span className="font-mono text-xs sm:text-sm text-crimson-bright font-black">
                      GROUP {group.number}
                    </span>
                  </div>
                  <span className="text-xs tracking-widest uppercase text-warmivory/70 font-mono font-bold">
                    Verified
                  </span>
                </div>

                {/* Group Title */}
                <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-white uppercase mb-6 group-hover:text-dustyrose transition-colors font-bold">
                  {group.title}
                </h3>

                {/* Minimal Outlined Skill Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-lg text-xs sm:text-sm font-sans font-semibold tracking-wide text-white bg-obsidian border border-white/20 hover:border-crimson hover:bg-burgundy/40 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-dustyrose font-mono font-semibold">
                  Applied in live campaigns &amp; coursework
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
