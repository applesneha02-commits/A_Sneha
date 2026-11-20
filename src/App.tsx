import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certificates } from './components/Certificates';
import { QuotePanel } from './components/QuotePanel';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Exact order matching the Navigation Bar
    const sections = [
      'home',
      'about',
      'experience',
      'skills',
      'projects',
      'achievements',
      'certificates',
      'contact',
    ];

    const handleScroll = () => {
      // If at top of page, always set home
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Check from bottom to top to find the current active section
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-warmivory font-sans selection:bg-crimson selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Flow: Exactly following the Navigation Bar Order */}
      <main>
        {/* 1. Home (Hero with Overlapping Cutout Portrait) */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Experience */}
        <Experience />

        {/* 4. Skills */}
        <Skills />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Achievements */}
        <Achievements />

        {/* 7. Certificates */}
        <Certificates />

        {/* Brand Statement Quote Panel */}
        <QuotePanel />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
