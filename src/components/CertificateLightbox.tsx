import React, { useEffect } from 'react';
import { Certificate } from '../types';
import { X, ExternalLink, ShieldCheck, Calendar, Building2 } from 'lucide-react';

interface CertificateLightboxProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateLightbox: React.FC<CertificateLightboxProps> = ({ certificate, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certificate) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-xl animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-4xl bg-charcoal border border-borderline rounded-3xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-obsidian border-b border-borderline">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-dustyrose">
              AUTHENTIC CREDENTIAL VERIFICATION
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-burgundy text-warmivory transition-colors border border-white/10"
            aria-label="Close certificate"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image View */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col lg:flex-row gap-8 items-center justify-center bg-obsidian/60">
          
          {/* Certificate Image with Zoom on hover */}
          <div className="w-full lg:w-3/5 rounded-xl overflow-hidden border border-borderline shadow-2xl bg-black">
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-auto object-contain max-h-[60vh] mx-auto"
            />
          </div>

          {/* Certificate Info Details */}
          <div className="w-full lg:w-2/5 space-y-5">
            <div>
              {certificate.badge && (
                <span className="px-3 py-1 bg-burgundy/60 border border-crimson/40 rounded-full text-[10px] font-mono uppercase text-dustyrose">
                  {certificate.badge}
                </span>
              )}
              <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-wide text-warmivory mt-3">
                {certificate.title}
              </h3>
            </div>

            <div className="space-y-2.5 text-xs text-warmivory/80">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-dustyrose shrink-0" />
                <span className="text-mutedgrey">Issuer:</span>
                <span className="font-semibold text-warmivory">{certificate.issuer}</span>
              </div>
              {certificate.year && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-dustyrose shrink-0" />
                  <span className="text-mutedgrey">Year:</span>
                  <span className="font-mono text-warmivory">{certificate.year}</span>
                </div>
              )}
            </div>

            <p className="text-xs text-warmivory/70 leading-relaxed font-light pt-2 border-t border-borderline">
              {certificate.description}
            </p>

            <div className="pt-4 flex flex-col gap-2">
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-burgundy hover:bg-crimson text-warmivory rounded-full text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                <span>OPEN FULL RESOLUTION</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-mutedgrey hover:text-warmivory text-xs uppercase tracking-widest transition-colors"
              >
                BACK TO LIST
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
