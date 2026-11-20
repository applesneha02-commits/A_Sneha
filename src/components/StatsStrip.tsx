import React from 'react';
import { STATISTICS_STRIP } from '../data/portfolioData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative w-full bg-charcoal border-b border-borderline py-10 lg:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-borderline">
          {STATISTICS_STRIP.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col justify-between pt-4 sm:pt-0 ${
                idx > 0 ? 'lg:pl-8' : ''
              }`}
            >
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-dustyrose tracking-widest block uppercase">
                  METRIC 0{idx + 1}
                </span>
                <p className="font-display text-3xl sm:text-4xl xl:text-5xl tracking-wide text-warmivory">
                  {stat.number}
                </p>
              </div>
              <div className="mt-3 space-y-1">
                <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-dustyrose">
                  {stat.label}
                </h4>
                <p className="text-[11px] text-mutedgrey font-sans leading-tight">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
