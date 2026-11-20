import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-obsidian border-t border-borderline py-12 text-warmivory">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-borderline/60">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-1">
            <span className="font-display text-2xl tracking-widest text-warmivory uppercase">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-mutedgrey font-sans">
              © 2026 A Sneha · All Rights Reserved
            </p>
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest font-mono text-mutedgrey">
            <a href="#home" className="hover:text-warmivory transition-colors">
              HOME
            </a>
            <span>·</span>
            <a href="#about" className="hover:text-warmivory transition-colors">
              ABOUT
            </a>
            <span>·</span>
            <a href="#projects" className="hover:text-warmivory transition-colors">
              PROJECTS
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-warmivory transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Right: Social Icons & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-charcoal hover:bg-burgundy text-warmivory transition-colors border border-borderline"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-charcoal hover:bg-burgundy text-warmivory transition-colors border border-borderline"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-charcoal hover:bg-burgundy text-warmivory transition-colors border border-borderline group"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Closing Statement */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-mutedgrey font-sans gap-2">
          <p className="font-editorial italic text-dustyrose">
            &ldquo;Made with creativity and intention.&rdquo;
          </p>
          <p className="text-[11px] font-mono">
            Bengaluru, Karnataka · BBA Digital Marketing
          </p>
        </div>

      </div>
    </footer>
  );
};
