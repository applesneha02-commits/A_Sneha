import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles } from 'lucide-react';

export const QuotePanel: React.FC = () => {
  return (
    <section className="relative w-full bg-burgundy py-24 sm:py-32 overflow-hidden border-y border-crimson/30">
      
      {/* Background Decorative Large Quotation Mark */}
      <div
        className="absolute -top-12 left-10 text-[20rem] font-serif text-white/[0.04] select-none pointer-events-none leading-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Ambient Radial Spotlight */}
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy-dark via-transparent to-burgundy-dark opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-crimson/25 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-8">
        
        {/* Top Accent Icon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 border border-white/10 text-dustyrose text-xs uppercase tracking-widest font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>BRAND STATEMENT & MANIFESTO</span>
        </div>

        {/* Big Editorial Quote Statement */}
        <blockquote className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-warmivory font-normal leading-tight tracking-tight italic">
          &ldquo;{PERSONAL_INFO.brandQuote}&rdquo;
        </blockquote>

        {/* Signature & Subtitle */}
        <div className="pt-4 flex flex-col items-center justify-center space-y-2">
          <div className="h-[1px] w-16 bg-dustyrose/60 mb-2"></div>
          <span className="font-editorial italic text-3xl text-softblush">
            {PERSONAL_INFO.brandSignature}
          </span>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-dustyrose font-medium">
            {PERSONAL_INFO.brandQuoteSub}
          </p>
        </div>

      </div>
    </section>
  );
};
