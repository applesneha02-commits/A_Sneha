import { ChevronDown, Download, Linkedin, BarChart3, Smartphone, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Dynamic Animated Gradient Background Orbs */}
      <div className="absolute inset-0 z-0 bg-white dark:bg-background overflow-hidden transition-colors duration-300">
        {/* Blue Orb */}
        <div 
          className="absolute w-[350px] h-[350px] rounded-full bg-blue/15 dark:bg-blue/10 blur-[80px] -top-20 -left-20 animate-float"
          style={{ 
            animationDuration: '8s', 
            transform: `translateY(${scrollY * 0.2}px)` 
          }}
        />
        {/* Mint Orb */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full bg-mint/15 dark:bg-mint/10 blur-[100px] top-[20%] -right-40 animate-float"
          style={{ 
            animationDuration: '12s', 
            animationDelay: '-3s', 
            transform: `translateY(${scrollY * 0.15}px)` 
          }}
        />
        {/* Dark Blue Orb */}
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-blue/10 dark:bg-blue/5 blur-[90px] bottom-10 left-[15%] animate-float"
          style={{ 
            animationDuration: '10s', 
            animationDelay: '-6s', 
            transform: `translateY(${scrollY * 0.1}px)` 
          }}
        />
        {/* Light Mint Orb */}
        <div 
          className="absolute w-[250px] h-[250px] rounded-full bg-mint/10 dark:bg-mint/5 blur-[80px] bottom-40 right-[25%] animate-float"
          style={{ 
            animationDuration: '15s', 
            animationDelay: '-1s', 
            transform: `translateY(${scrollY * 0.05}px)` 
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text */}
          <div className="animate-slideInLeft order-last lg:order-first">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-card/85 backdrop-blur rounded-full border border-blue/20">
              <div className="w-2 h-2 rounded-full bg-blue animate-pulse-glow" />
              <span className="text-sm font-semibold text-blue dark:text-blue-300">Available for Opportunities</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
              Hey, I'm <span className="gradient-text-blue-mint">Sneha</span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-2 font-medium">
              Social Media Marketer & Content Strategy Expert
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
              I scale brands through data-driven content strategy, authentic engagement, and growth hacking. From 100 to 500+ connections, from 40 to 2K+ impressions—let's build something that converts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="px-6 py-3.5 bg-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue/30 hover:bg-blue/95 transition-all duration-200 transform hover:scale-105 text-center cursor-pointer text-sm"
              >
                See My Work
              </a>
              <a
                href="/cv.pdf"
                download="A_Sneha_CV.pdf"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-mint text-mint hover:text-white font-semibold rounded-lg hover:bg-mint transition-all duration-200 text-center cursor-pointer text-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/a-sneha-71a314320/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-blue text-blue dark:text-blue-300 hover:text-white font-semibold rounded-lg hover:bg-blue transition-all duration-200 text-center cursor-pointer text-sm"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-blue dark:text-blue-400">500+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn Connections</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-mint">2K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Post Impressions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-dark dark:text-blue-300">40%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Follower Growth</p>
              </div>
            </div>
          </div>

          {/* Right side - Visual (Profile Headshot) */}
          <div className="flex justify-center order-first lg:order-last animate-slideInRight">
            <div className="relative">
              {/* Outer soft glowing background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue/20 to-mint/20 rounded-[2.5rem] blur-2xl transform rotate-6 scale-105" />
              
              {/* Profile Image Frame with Mint/Blue Glow */}
              <div 
                className={`relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[2.5rem] p-1 bg-gradient-to-tr from-blue via-white dark:via-charcoal to-mint shadow-xl hover:scale-[1.02] transition-all duration-300 ${
                  theme === 'dark' ? 'shadow-[0_0_35px_rgba(59,130,246,0.35)]' : 'shadow-mint/20'
                }`}
              >
                <img
                  src="/sneha.jpeg"
                  alt="A Sneha Headshot"
                  className="w-full h-full object-cover rounded-[2.3rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-blue" />
      </div>
    </section>
  );
}
