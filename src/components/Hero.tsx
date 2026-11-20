import React from 'react';
import { Download, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen w-full bg-obsidian flex flex-col justify-between pt-24 sm:pt-28 pb-0 overflow-hidden border-b border-white/10"
    >
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 editorial-grain pointer-events-none opacity-25"></div>

      {/* Top Editorial Bar */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between text-xs sm:text-sm tracking-[0.25em] uppercase font-mono pb-4 border-b border-white/10">
        <div className="space-y-0.5">
          <p className="text-crimson-bright font-bold">SOCIAL MEDIA MARKETER</p>
          <p className="text-warmivory/80 font-medium">DIGITAL CREATOR</p>
        </div>
        <div className="flex items-center gap-2 text-dustyrose">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-crimson"></span>
          </span>
          <span className="font-bold text-white tracking-widest text-xs sm:text-sm">
            AVAILABLE FOR INTERNSHIPS
          </span>
          <span className="text-crimson font-serif text-base">✦</span>
        </div>
      </div>

      {/* =========================================================================
          MASSIVE BACKGROUND TYPOGRAPHY: "PORTFOLIO"
          Bold, condensed, vibrant deep crimson red spanning edge to edge!
          Positioned vertically so the portrait head overlaps T, F, O, L!
         ========================================================================= */}
      <div
        className="absolute top-[16%] sm:top-[17%] lg:top-[16%] inset-x-0 w-full text-center select-none pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[26vw] sm:text-[23vw] lg:text-[22vw] font-black leading-none tracking-tight text-crimson/85 block transform -translate-y-2 sm:-translate-y-4">
          PORTFOLIO
        </span>
      </div>

      {/* Ambient Radial Burgundy Glow directly behind portrait */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-crimson/25 rounded-full blur-[160px] pointer-events-none z-0"></div>

      {/* =========================================================================
          DESKTOP OVERLAPPING PORTRAIT (lg: and above)
          Anchored to bottom-0 so Sneha's head rises directly in front of PORTFOLIO,
          overlapping letters T, F, O, L, and bottom torso rests on baseline!
         ========================================================================= */}
      <div className="hidden lg:flex absolute bottom-0 left-[51%] -translate-x-1/2 z-10 h-[80vh] max-h-[760px] min-h-[520px] w-auto items-end justify-center pointer-events-none select-none">
        <img
          src="/sneha_hero.png"
          alt="A Sneha — Social Media Marketer &amp; Content Strategist"
          className="h-full w-auto max-w-none object-contain object-bottom filter contrast-[1.05] brightness-[1.0] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
          }}
        />
      </div>

      {/* =========================================================================
          MAIN EDITORIAL GRID
          - Desktop: Left 5 cols (bio), Center 4 cols (spacer for portrait), Right 3 cols (stats)
          - Mobile: Name/Title -> Overlapping Portrait -> Bio & Buttons -> 3 Stats
         ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-6 lg:py-8">

        {/* Mobile Header: Script + Name + Role (visible on < lg) */}
        <div className="lg:hidden text-center space-y-2 pb-2">
          <span className="font-editorial italic text-3xl text-crimson-bright font-medium block">
            Hello, I&apos;m
          </span>
          <h1 className="font-display text-7xl sm:text-8xl tracking-tight text-white uppercase font-black leading-none">
            A SNEHA
          </h1>
          <p className="text-xs sm:text-sm font-display tracking-[0.22em] text-crimson-bright uppercase font-bold pt-1">
            SOCIAL MEDIA MARKETER &amp; CONTENT STRATEGIST
          </p>
        </div>

        {/* Mobile Overlapping Portrait (< lg) */}
        <div className="lg:hidden relative w-full flex justify-center -mt-2 mb-6 z-10">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] flex justify-center">
            <img
              src="/sneha_hero.png"
              alt="A Sneha"
              className="w-full h-auto max-h-[440px] object-contain object-bottom filter contrast-[1.05] drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 84%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 84%, transparent 100%)',
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">

          {/* =========================================
              LEFT COLUMN: 5 COLS
              Script, Big Name, Role, Bio, CTAs
             ========================================= */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-6 z-30 pb-4 lg:pb-12">

            {/* Desktop Only: Script Greeting & Big Name */}
            <div className="hidden lg:block space-y-2">
              <span className="font-editorial italic text-3xl xl:text-4xl text-crimson-bright font-normal block">
                Hello, I&apos;m
              </span>
              <h1 className="font-display text-7xl xl:text-9xl tracking-tight text-white uppercase font-black leading-[0.88]">
                A SNEHA
              </h1>
              <div className="pt-2 text-sm xl:text-base font-display tracking-[0.25em] text-crimson-bright uppercase font-bold">
                SOCIAL MEDIA MARKETER &amp; CONTENT STRATEGIST
              </div>
            </div>

            {/* Introduction Paragraph: HIGH CONTRAST & LEGIBLE */}
            <p className="text-base sm:text-lg text-warmivory font-normal leading-relaxed max-w-xl">
              I&apos;m A Sneha, a BBA Digital Marketing student at Presidency University, Bengaluru. I plan content, study competitors and build brands on Instagram and LinkedIn. I grew my own LinkedIn from 100+ to 500+ connections, and I now lead social media at Digitopedia.
            </p>

            {/* Availability Pill Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-charcoal border border-white/20 text-xs sm:text-sm font-mono uppercase tracking-wider text-dustyrose shadow-md">
                <span className="text-crimson font-bold">✦</span>
                <span className="font-semibold text-white">OPEN TO INTERNSHIPS &amp; COLLABORATIONS</span>
              </div>
            </div>

            {/* CTA Buttons: LARGE & TAPPABLE */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-crimson hover:bg-crimson-bright text-white rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold shadow-glow-crimson transition-all duration-300"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="A_Sneha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-charcoal hover:bg-white/10 text-white rounded-full text-xs sm:text-sm uppercase tracking-widest font-bold border border-white/20 hover:border-dustyrose transition-all duration-300 shadow-md"
              >
                <Download className="w-4 h-4 text-dustyrose transition-transform group-hover:-translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </div>

          </div>

          {/* =========================================
              CENTER COLUMN: 4 COLS (Spacer on Desktop)
              Allows the absolute overlapping portrait to show through!
             ========================================= */}
          <div className="hidden lg:block lg:col-span-4 h-32 pointer-events-none"></div>

          {/* =========================================
              RIGHT COLUMN: 3 COLS
              Floating quote + Stacked large red statistics!
             ========================================= */}
          <div className="lg:col-span-3 flex flex-col justify-end space-y-6 z-30 pb-4 lg:pb-12">

            {/* Supporting Quote with ✦ */}
            <div className="p-5 rounded-2xl bg-charcoal/80 border border-white/15 backdrop-blur-sm space-y-2 shadow-lg">
              <div className="flex items-center gap-2 text-crimson">
                <Sparkles className="w-4 h-4 text-crimson" />
                <span className="text-xs font-mono uppercase tracking-widest text-dustyrose font-bold">
                  CREATIVE STRATEGY
                </span>
              </div>
              <p className="text-sm sm:text-base text-white/95 font-editorial italic leading-relaxed">
                &ldquo;{PERSONAL_INFO.supportingSideText}&rdquo;
              </p>
            </div>

            {/* Stack of Metrics (3 columns on mobile, vertical stack on desktop) */}
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 pt-4 border-t border-white/15">

              {/* Metric 1 */}
              <div className="flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-4 p-3 lg:p-0 rounded-xl bg-charcoal/50 lg:bg-transparent border border-white/10 lg:border-none">
                <span className="font-display text-4xl sm:text-5xl xl:text-6xl text-crimson-bright font-black tracking-tight leading-none">
                  500+
                </span>
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm uppercase font-black tracking-wider text-white">
                    LINKEDIN
                  </p>
                  <p className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-warmivory/80 font-medium">
                    CONNECTIONS
                  </p>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-4 p-3 lg:p-0 rounded-xl bg-charcoal/50 lg:bg-transparent border border-white/10 lg:border-none">
                <span className="font-display text-4xl sm:text-5xl xl:text-6xl text-crimson-bright font-black tracking-tight leading-none">
                  2,000+
                </span>
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm uppercase font-black tracking-wider text-white">
                    POST
                  </p>
                  <p className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-warmivory/80 font-medium">
                    IMPRESSIONS
                  </p>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-4 p-3 lg:p-0 rounded-xl bg-charcoal/50 lg:bg-transparent border border-white/10 lg:border-none">
                <span className="font-display text-4xl sm:text-5xl xl:text-6xl text-crimson-bright font-black tracking-tight leading-none">
                  40%
                </span>
                <div className="space-y-0.5">
                  <p className="text-xs sm:text-sm uppercase font-black tracking-wider text-white">
                    FOLLOWER
                  </p>
                  <p className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-warmivory/80 font-medium">
                    GROWTH
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Thin Line & Sub-Bar */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between text-xs sm:text-sm text-warmivory/80 font-mono uppercase py-4 border-t border-white/10">
        <span className="text-crimson-bright font-bold">01 / OVERVIEW</span>
        <div className="flex items-center gap-2 font-medium">
          <span>SCROLL FOR PROJECTS</span>
          <ArrowDown className="w-4 h-4 text-crimson-bright animate-bounce" />
        </div>
      </div>
    </section>
  );
};
