import React from 'react';
import { ABOUT_CONTENT, PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, MapPin, GraduationCap, Target, Wrench } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative w-full bg-obsidian py-24 sm:py-32 border-b border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-bright"></span>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-dustyrose font-bold">
                02 / PHILOSOPHY &amp; PROFILE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase font-black">
              {ABOUT_CONTENT.heading}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-editorial text-2xl sm:text-3xl text-dustyrose italic max-w-md">
            &ldquo;{ABOUT_CONTENT.supportingHeading}&rdquo;
          </p>
        </div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Photograph Composition (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              {/* Background ambient red glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-burgundy to-crimson/40 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Main Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-charcoal aspect-[4/5] shadow-2xl">
                <img
                  src={PERSONAL_INFO.portraitPath}
                  alt="A Sneha"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-crimson-bright" />
                  <span className="text-xs uppercase font-mono tracking-widest font-bold text-white">
                    Digital Marketer &amp; Strategist
                  </span>
                </div>

                {/* Bottom Card Caption */}
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-xl bg-charcoal/95 backdrop-blur-md border border-white/15 shadow-lg">
                  <p className="font-display text-2xl tracking-wider text-white uppercase font-black">
                    A SNEHA
                  </p>
                  <p className="text-xs sm:text-sm text-dustyrose font-sans font-semibold mt-0.5">
                    Presidency University, Bengaluru · 2024–2027
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Quote */}
            <div className="p-6 rounded-2xl border border-white/15 bg-charcoal/70 shadow-md">
              <p className="font-editorial text-lg sm:text-xl italic text-white leading-relaxed">
                &ldquo;Content without data is guesswork. Data without creativity is invisible.&rdquo;
              </p>
              <span className="text-xs uppercase tracking-widest text-dustyrose font-mono font-bold mt-2 block">
                — Strategic Core Mindset
              </span>
            </div>
          </div>

          {/* Right Column: 4 Biography Paragraphs & Quick Facts (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* 4 Paragraphs */}
            <div className="space-y-6">
              {ABOUT_CONTENT.paragraphs.map((p, idx) => (
                <div key={p.title} className="space-y-2 pb-6 border-b border-white/15 last:border-none">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-crimson-bright font-black">0{idx + 1}</span>
                    <h3 className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-dustyrose">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-base sm:text-lg text-warmivory font-normal leading-relaxed">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Facts Section */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-crimson-bright"></span>
                <h4 className="text-xs sm:text-sm uppercase tracking-widest text-white font-mono font-bold">
                  QUICK FACTS &amp; CAPABILITIES
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Education */}
                <div className="p-5 rounded-xl border border-white/15 bg-charcoal/80 hover:border-crimson transition-colors shadow-md">
                  <div className="flex items-center gap-2 text-dustyrose mb-2 font-bold">
                    <GraduationCap className="w-5 h-5 text-crimson-bright" />
                    <span className="text-xs font-mono uppercase tracking-wider">EDUCATION</span>
                  </div>
                  <p className="text-base font-bold text-white">BBA Digital Marketing</p>
                  <p className="text-xs sm:text-sm text-warmivory/80 font-medium">2024–2027</p>
                  <p className="text-xs sm:text-sm text-dustyrose font-semibold mt-1">Presidency University, Bengaluru</p>
                </div>

                {/* Location */}
                <div className="p-5 rounded-xl border border-white/15 bg-charcoal/80 hover:border-crimson transition-colors shadow-md">
                  <div className="flex items-center gap-2 text-dustyrose mb-2 font-bold">
                    <MapPin className="w-5 h-5 text-crimson-bright" />
                    <span className="text-xs font-mono uppercase tracking-wider">LOCATION</span>
                  </div>
                  <p className="text-base font-bold text-white">Bengaluru, India</p>
                  <p className="text-xs sm:text-sm text-warmivory/80 font-medium">Tech &amp; Marketing Hub</p>
                  <p className="text-xs sm:text-sm text-dustyrose font-semibold mt-1">Open to Internships &amp; Hybrid Roles</p>
                </div>

                {/* Focus */}
                <div className="p-5 rounded-xl border border-white/15 bg-charcoal/80 hover:border-crimson transition-colors shadow-md">
                  <div className="flex items-center gap-2 text-dustyrose mb-2 font-bold">
                    <Target className="w-5 h-5 text-crimson-bright" />
                    <span className="text-xs font-mono uppercase tracking-wider">CORE FOCUS</span>
                  </div>
                  <p className="text-base font-bold text-white">Social Media Strategy</p>
                  <p className="text-xs sm:text-sm text-warmivory/80 font-medium">Content Planning &amp; Cadence</p>
                  <p className="text-xs sm:text-sm text-dustyrose font-semibold mt-1">Audience Research &amp; Growth</p>
                </div>

                {/* Tools */}
                <div className="p-5 rounded-xl border border-white/15 bg-charcoal/80 hover:border-crimson transition-colors shadow-md">
                  <div className="flex items-center gap-2 text-dustyrose mb-2 font-bold">
                    <Wrench className="w-5 h-5 text-crimson-bright" />
                    <span className="text-xs font-mono uppercase tracking-wider">TOOLS &amp; PLATFORMS</span>
                  </div>
                  <p className="text-base font-bold text-white">Canva · CapCut · Meta Suite</p>
                  <p className="text-xs sm:text-sm text-warmivory/80 font-medium">Google Analytics · WordPress</p>
                  <p className="text-xs sm:text-sm text-dustyrose font-semibold mt-1">ChatGPT · Notion AI · Claude</p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
