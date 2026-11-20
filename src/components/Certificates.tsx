import React, { useState } from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import { Certificate } from '../types';
import { CertificateLightbox } from './CertificateLightbox';
import { Award, Eye, Building2 } from 'lucide-react';

export const Certificates: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative w-full bg-charcoal py-24 sm:py-32 border-b border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/15">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-crimson-bright"></span>
              <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-dustyrose font-bold">
                07 / ACCREDITED LEARNING
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase font-black">
              CERTIFICATIONS &amp; LEARNING
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-editorial text-2xl sm:text-3xl text-dustyrose italic max-w-md">
            &ldquo;Continuous professional development across digital marketing, analytics, and AI workflows.&rdquo;
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group rounded-2xl bg-obsidian border border-white/15 hover:border-crimson transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-glow-burgundy"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/11] bg-black overflow-hidden border-b border-white/15">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-burgundy/60 opacity-0 group-hover:opacity-100 backdrop-blur-[2px] transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 bg-black/90 text-white text-xs sm:text-sm uppercase font-mono tracking-widest rounded-full border border-white/30 flex items-center gap-2 font-bold shadow-2xl">
                    <Eye className="w-4 h-4 text-dustyrose" />
                    Inspect Credential
                  </span>
                </div>

                {cert.badge && (
                  <div className="absolute top-3.5 right-3.5 bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono uppercase text-dustyrose border border-white/20 font-bold">
                    {cert.badge}
                  </div>
                )}
              </div>

              {/* Certificate Details */}
              <div className="p-7 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-dustyrose font-bold">
                    <Building2 className="w-4 h-4 text-crimson-bright" />
                    <span className="uppercase tracking-wider">{cert.issuer}</span>
                    {cert.year && (
                      <>
                        <span className="text-white/40">·</span>
                        <span className="font-mono text-white/90">{cert.year}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-dustyrose transition-colors font-bold leading-tight">
                    {cert.title}
                  </h3>
                  
                  <p className="text-sm text-warmivory leading-relaxed font-normal pt-1">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-dustyrose font-bold">
                  <span className="flex items-center gap-2 group-hover:text-white transition-colors">
                    <Award className="w-4 h-4 text-crimson-bright" />
                    View Certificate
                  </span>
                  <span className="text-emerald-400 font-bold">VERIFIED</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <CertificateLightbox certificate={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
};
