import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-md py-4 border-b border-borderline shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Typographic Logo */}
        <a
          href="#home"
          className="group flex flex-col tracking-wider focus:outline-none"
        >
          <span className="font-display text-2xl sm:text-3xl tracking-widest text-warmivory group-hover:text-dustyrose transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="text-[9px] tracking-[0.25em] text-mutedgrey -mt-1 font-sans uppercase">
            Portfolio
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 border border-borderline/60 rounded-full px-5 py-1.5 bg-charcoal/60 backdrop-blur-md">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`relative px-3 py-1.5 text-xs uppercase tracking-widest transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-warmivory font-semibold bg-burgundy/60 shadow-sm'
                    : 'text-mutedgrey hover:text-warmivory hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold text-warmivory bg-burgundy hover:bg-crimson border border-crimson/30 hover:border-crimson rounded-full transition-all duration-300 shadow-glow-burgundy"
          >
            <span>LET'S CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="text-[10px] uppercase tracking-widest px-3 py-1.5 bg-burgundy text-warmivory rounded-full font-semibold border border-crimson/40"
          >
            Connect
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-warmivory hover:text-dustyrose focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-obsidian/98 backdrop-blur-2xl border-b border-white/20 py-6 px-8 shadow-2xl transition-all z-50">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-base uppercase tracking-widest text-white hover:text-dustyrose py-2.5 border-b border-white/10 flex items-center justify-between font-bold"
              >
                <span>{item.label}</span>
                <span className="text-crimson-bright text-base font-bold">→</span>
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-4 text-xs tracking-widest uppercase font-bold text-white bg-crimson hover:bg-crimson-bright rounded-full shadow-glow-crimson"
              >
                <span>LET&apos;S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
