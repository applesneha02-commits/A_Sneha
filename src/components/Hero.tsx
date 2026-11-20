import React from 'react';
import { Download, Sparkles, ArrowRight, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen w-full bg-obsidian flex flex-col justify-between pt-24 sm:pt-28 pb-0 overflow-hidden border-b border-white/10"
    >
      {/* Background Subtle Grain */}
      <div className="absolute inset-0 editorial-grain pointer-events-none opacity-25"></div>

      {/* Top Editorial Bar: Flies down on start */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="relative z-30 max-w-[1440px] mx-auto px-5 sm:px-8 xl:px-12 w-full flex items-center justify-between text-[10px] sm:text-xs tracking-wider sm:tracking-[0.25em] uppercase font-mono pb-3 sm:pb-4 border-b border-white/10"
      >
        <div className="space-y-0.5">
          <p className="text-crimson-bright font-bold">SOCIAL MEDIA MARKETER</p>
          <p className="text-warmivory/80 font-medium">DIGITAL CREATOR</p>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-dustyrose">
          <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-crimson"></span>
          </span>
          <span className="font-bold text-white tracking-wider sm:tracking-widest text-[10px] sm:text-xs">
            AVAILABLE FOR INTERNSHIPS
          </span>
          <span className="text-crimson font-serif text-sm sm:text-base">✦</span>
        </div>
      </motion.div>

      {/* =========================================================================
          DESKTOP BACKGROUND TYPOGRAPHY: "PORTFOLIO" (lg: only)
          Flies and zooms into view smoothly from the background!
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.15, ease: smoothEase }}
        className="hidden lg:block absolute top-[16%] inset-x-0 w-full text-center select-none pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-display text-[22vw] font-black leading-none tracking-tight text-crimson/85 block transform -translate-y-4">
          PORTFOLIO
        </span>
      </motion.div>

      {/* Ambient Radial Burgundy Glow directly behind portrait (Desktop) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-crimson/25 rounded-full blur-[160px] pointer-events-none z-0"
      ></motion.div>

      {/* =========================================================================
          DESKTOP OVERLAPPING PORTRAIT (lg: and above)
          Anchored to bottom-0, perfectly centered and scaled so she never collides
          with left bio or right metrics!
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 160, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.25, ease: smoothEase }}
        className="hidden lg:flex absolute bottom-0 left-[49%] -translate-x-1/2 z-10 h-[72vh] max-h-[640px] min-h-[460px] w-auto items-end justify-center pointer-events-none select-none"
      >
        <img
          src="/sneha_hero.png"
          alt="A Sneha — Social Media Marketer &amp; Content Strategist"
          className="h-full w-auto max-w-none object-contain object-bottom filter contrast-[1.05] brightness-[1.0] drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
          style={{
            maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* =========================================================================
          MAIN EDITORIAL WRAPPER
         ========================================================================= */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-5 sm:px-8 xl:px-12 w-full my-auto py-4 lg:py-6">

        {/* =========================================================================
            MOBILE LAYOUT (< lg)
            Clean, spacious, editorial luxury with synchronized fly-up entrance!
           ========================================================================= */}
        <div className="lg:hidden flex flex-col items-center w-full space-y-5 pt-2 pb-6">
          
          {/* 1. Mobile Header: Script + Name + Role (Flies up) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
            className="text-center space-y-1.5 px-4 z-20"
          >
            <span className="font-editorial italic text-2xl sm:text-3xl text-crimson-bright font-normal block">
              Hello, I&apos;m
            </span>
            <h1 className="font-display text-6xl sm:text-7xl tracking-tight text-white uppercase font-black leading-none">
              A SNEHA
            </h1>
            <p className="text-xs sm:text-sm font-display tracking-[0.2em] text-dustyrose uppercase font-bold pt-0.5">
              SOCIAL MEDIA MARKETER &amp; CONTENT STRATEGIST
            </p>
          </motion.div>

          {/* 2. Mobile Visual Centerpiece Stage:
                 Sneha's Cutout Portrait overlapping the Massive Crimson PORTFOLIO typography! */}
          <div className="relative w-full h-[360px] sm:h-[420px] flex items-end justify-center overflow-hidden my-1">
            
            {/* Ambient Burgundy Glow directly behind portrait */}
            <div className="absolute inset-0 bg-radial from-crimson/35 via-burgundy/20 to-transparent blur-3xl pointer-events-none z-0"></div>

            {/* Background "PORTFOLIO" Typography centered behind Sneha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 35 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.25, ease: smoothEase }}
              className="absolute top-8 sm:top-10 inset-x-0 w-full text-center select-none pointer-events-none z-0"
              aria-hidden="true"
            >
              <span className="font-display text-[27vw] sm:text-[23vw] font-black leading-none tracking-tight text-crimson/80 block">
                PORTFOLIO
              </span>
            </motion.div>

            {/* Overlapping Portrait: Head overlaps T, F, O, L cleanly! (Flies up) */}
            <motion.img
              initial={{ opacity: 0, y: 120, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.35, ease: smoothEase }}
              src="/sneha_hero.png"
              alt="A Sneha"
              className="relative z-10 h-full w-auto max-w-none object-contain object-bottom filter contrast-[1.05] drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 82%, transparent 100%)',
              }}
            />
          </div>

          {/* 3. Bio & Availability Pill (Flies up) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: smoothEase }}
            className="w-full max-w-lg px-2 sm:px-6 space-y-4 text-center z-20"
          >
            <p className="text-sm sm:text-base text-warmivory font-normal leading-relaxed">
              I&apos;m A Sneha, a BBA Digital Marketing student at Presidency University, Bengaluru. I plan content, study competitors and build brands on Instagram and LinkedIn. I grew my own LinkedIn from 100+ to 500+ connections, and I now lead social media at Digitopedia.
            </p>

            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal border border-white/20 text-xs font-mono uppercase tracking-wider text-dustyrose shadow-md">
                <span className="text-crimson font-bold">✦</span>
                <span className="font-semibold text-white">OPEN TO INTERNSHIPS</span>
              </div>
            </div>

            {/* 4. CTA Buttons: Large, Tappable, Responsive (Flies up) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: smoothEase }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-crimson hover:bg-crimson-bright text-white rounded-full text-xs uppercase tracking-widest font-bold shadow-glow-crimson transition-all"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="A_Sneha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-charcoal hover:bg-white/10 text-white rounded-full text-xs uppercase tracking-widest font-bold border border-white/20 hover:border-dustyrose transition-all shadow-md"
              >
                <Download className="w-4 h-4 text-dustyrose" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

            {/* 5. Supporting Quote Card (Flies up) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: smoothEase }}
              className="p-4 rounded-xl bg-charcoal/80 border border-white/15 backdrop-blur-sm text-center shadow-md mt-4"
            >
              <p className="text-xs sm:text-sm text-white/95 font-editorial italic leading-relaxed">
                &ldquo;{PERSONAL_INFO.supportingSideText}&rdquo;
              </p>
            </motion.div>

            {/* 6. Compact 3-Column Key Metrics (Flies up) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: smoothEase }}
              className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-white/15"
            >
              <div className="p-2.5 sm:p-3 rounded-xl bg-charcoal/60 border border-white/10 text-center">
                <span className="font-display text-2xl sm:text-3xl text-crimson-bright font-black block leading-none">
                  500+
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-warmivory/80 block mt-1">
                  LINKEDIN
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-charcoal/60 border border-white/10 text-center">
                <span className="font-display text-2xl sm:text-3xl text-crimson-bright font-black block leading-none">
                  2,000+
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-warmivory/80 block mt-1">
                  IMPRESSIONS
                </span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-charcoal/60 border border-white/10 text-center">
                <span className="font-display text-2xl sm:text-3xl text-crimson-bright font-black block leading-none">
                  40%
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-warmivory/80 block mt-1">
                  GROWTH
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* =========================================================================
            DESKTOP MAIN EDITORIAL ROW (lg: and above)
            - Far left and far right anchoring so center portrait has total breathing room!
            - Zero collision with Sneha's face, neck, shoulder, or body!
           ========================================================================= */}
        <div className="hidden lg:flex items-end justify-between w-full">

          {/* =========================================
              LEFT COLUMN: Docked to far left
              Script, Big Name, Role, Bio, CTAs
             ========================================= */}
          <div className="w-full max-w-[420px] xl:max-w-[460px] flex flex-col justify-end space-y-5 z-30 pb-4 lg:pb-10">

            {/* Desktop Only: Script Greeting & Big Name (Flies up) */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.35, ease: smoothEase }}
              className="space-y-1.5"
            >
              <span className="font-editorial italic text-3xl xl:text-4xl text-crimson-bright font-normal block">
                Hello, I&apos;m
              </span>
              <h1 className="font-display text-6xl xl:text-8xl tracking-tight text-white uppercase font-black leading-[0.9]">
                A SNEHA
              </h1>
              <div className="pt-1.5 text-xs xl:text-sm font-display tracking-[0.22em] text-crimson-bright uppercase font-bold">
                SOCIAL MEDIA MARKETER &amp; CONTENT STRATEGIST
              </div>
            </motion.div>

            {/* Introduction Paragraph: HIGH CONTRAST & LEGIBLE (Flies up) */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: smoothEase }}
              className="text-sm xl:text-base text-warmivory font-normal leading-relaxed max-w-md"
            >
              I&apos;m A Sneha, a BBA Digital Marketing student at Presidency University, Bengaluru. I plan content, study competitors and build brands on Instagram and LinkedIn. I grew my own LinkedIn from 100+ to 500+ connections, and I now lead social media at Digitopedia.
            </motion.p>

            {/* Availability Pill Badge (Flies up) */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.65, ease: smoothEase }}
              className="pt-1"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal border border-white/20 text-xs font-mono uppercase tracking-wider text-dustyrose shadow-md">
                <span className="text-crimson font-bold">✦</span>
                <span className="font-semibold text-white">OPEN TO INTERNSHIPS</span>
              </div>
            </motion.div>

            {/* CTA Buttons: LARGE & TAPPABLE (Flies up) */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.75, ease: smoothEase }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-crimson hover:bg-crimson-bright text-white rounded-full text-xs uppercase tracking-widest font-bold shadow-glow-crimson transition-all duration-300"
              >
                <span>VIEW MY PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="A_Sneha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-charcoal hover:bg-white/10 text-white rounded-full text-xs uppercase tracking-widest font-bold border border-white/20 hover:border-dustyrose transition-all duration-300 shadow-md"
              >
                <Download className="w-4 h-4 text-dustyrose transition-transform group-hover:-translate-y-0.5" />
                <span>DOWNLOAD RESUME</span>
              </a>
            </motion.div>

          </div>

          {/* =========================================
              RIGHT COLUMN: Docked to far right
              Clean strategy quote + Compact stacked metrics!
              Zero collision with Sneha's face or body!
             ========================================= */}
          <div className="w-full max-w-[240px] xl:max-w-[280px] flex flex-col justify-end space-y-6 z-30 pb-4 lg:pb-10">

            {/* Supporting Quote with ✦ (Clean text, no opaque box covering Sneha!) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 15 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.0, delay: 0.55, ease: smoothEase }}
              className="space-y-1.5"
            >
              <div className="flex items-center gap-1.5 text-dustyrose">
                <Sparkles className="w-3.5 h-3.5 text-crimson-bright" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-dustyrose font-bold">
                  CREATIVE STRATEGY
                </span>
              </div>
              <p className="text-xs xl:text-sm text-warmivory/90 font-editorial italic leading-relaxed">
                &ldquo;{PERSONAL_INFO.supportingSideText}&rdquo;
              </p>
            </motion.div>

            {/* Stack of Metrics (Staggered fly up on start, cleanly aligned to right) */}
            <div className="space-y-4 pt-4 border-t border-white/15">

              {/* Metric 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75, ease: smoothEase }}
                className="flex items-baseline gap-3"
              >
                <span className="font-display text-4xl xl:text-5xl text-crimson-bright font-black tracking-tight leading-none">
                  500+
                </span>
                <div className="space-y-0.5">
                  <p className="text-xs uppercase font-black tracking-wider text-white">
                    LINKEDIN
                  </p>
                  <p className="text-[10px] xl:text-[11px] uppercase font-mono tracking-wider text-warmivory/80 font-medium">
                    CONNECTIONS
                  </p>
                </div>
              </motion.div>

              {/* Metric 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9, ease: smoothEase }}
                className="flex items-baseline gap-3"
              >
                <span className="font-display text-4xl xl:text-5xl text-crimson-bright font-black tracking-tight leading-none">
                  2,000+
                </span>
                <div className="space-y-0.5">
                  <p className="text-xs uppercase font-black tracking-wider text-white">
                    POST
                  </p>
                  <p className="text-[10px] xl:text-[11px] uppercase font-mono tracking-wider text-warmivory/80 font-medium">
                    IMPRESSIONS
                  </p>
                </div>
              </motion.div>

              {/* Metric 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.05, ease: smoothEase }}
                className="flex items-baseline gap-3"
              >
                <span className="font-display text-4xl xl:text-5xl text-crimson-bright font-black tracking-tight leading-none">
                  40%
                </span>
                <div className="space-y-0.5">
                  <p className="text-xs uppercase font-black tracking-wider text-white">
                    FOLLOWER
                  </p>
                  <p className="text-[10px] xl:text-[11px] uppercase font-mono tracking-wider text-warmivory/80 font-medium">
                    GROWTH
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>

      {/* Bottom Thin Line & Sub-Bar (Flies up last) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.15, ease: smoothEase }}
        className="relative z-30 max-w-[1440px] mx-auto px-6 sm:px-8 xl:px-12 w-full flex items-center justify-between text-xs sm:text-sm text-warmivory/80 font-mono uppercase py-4 border-t border-white/10"
      >
        <span className="text-crimson-bright font-bold">01 / OVERVIEW</span>
        <div className="flex items-center gap-2 font-medium">
          <span>SCROLL FOR PROJECTS</span>
          <ArrowDown className="w-4 h-4 text-crimson-bright animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
