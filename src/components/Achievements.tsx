import React from 'react';
import { ACHIEVEMENTS, VERIFIED_HONORS } from '../data/portfolioData';
import { Trophy, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative w-full bg-obsidian py-24 sm:py-32 border-b border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-bright"></span>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-dustyrose font-bold">
                06 / PROVEN TRACK RECORD
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase font-black">
              MILESTONES &amp; ACHIEVEMENTS
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-editorial text-2xl sm:text-3xl text-dustyrose italic max-w-md">
            &ldquo;Measurable growth, real responsibilities, and verified milestones.&rdquo;
          </p>
        </div>

        {/* Striking Statistics-Led Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={item.number}
              className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                idx === 0 || idx === 1
                  ? 'bg-gradient-to-b from-burgundy/60 to-charcoal border-crimson/60 hover:border-dustyrose shadow-glow-burgundy'
                  : 'bg-charcoal/90 border-white/15 hover:border-dustyrose/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/15">
                  <span className="font-mono text-sm sm:text-base text-crimson-bright font-black">
                    MILESTONE {item.number}
                  </span>
                  {item.badge && (
                    <span className="px-3.5 py-1 bg-white/10 rounded-full text-xs uppercase font-mono tracking-wider text-white font-bold border border-white/15">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Oversized Numeral */}
                <div className="py-6">
                  <p className="font-display text-6xl sm:text-7xl text-white tracking-wide group-hover:text-dustyrose transition-colors font-black">
                    {item.stat}
                  </p>
                  <h3 className="text-sm sm:text-base uppercase tracking-[0.2em] font-bold text-dustyrose mt-2">
                    {item.label}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-warmivory font-normal leading-relaxed pt-6 border-t border-white/15">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Verified College & Event Honors Sub-Panel */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-charcoal border border-white/15 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-6 h-6 text-crimson-bright" />
            <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white font-black">
              VERIFIED AWARDS &amp; CAMPUS RECOGNITIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_HONORS.map((honor) => (
              <div
                key={honor.title}
                className="p-6 rounded-2xl bg-obsidian border border-white/15 flex items-start gap-4 shadow-md"
              >
                <div className="p-3.5 bg-burgundy/60 rounded-xl border border-crimson/40 shrink-0">
                  <Award className="w-6 h-6 text-crimson-bright" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                    {honor.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-dustyrose font-medium">
                    {honor.event}
                  </p>
                  <p className="text-xs font-mono text-warmivory/80 pt-1 font-semibold">
                    {honor.institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
