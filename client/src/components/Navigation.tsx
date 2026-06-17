import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-colors duration-300">
      <div className="container max-w-6xl flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-xl gradient-text-blue-mint"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue to-mint rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span>Sneha</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-600 dark:text-gray-300 font-medium hover:text-mint transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Buttons Group */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-charcoal hover:bg-muted rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-mint" />
            ) : (
              <Moon className="w-5 h-5 text-blue" />
            )}
          </button>

          {/* CTA Let's Talk Button */}
          <a
            href="#contact"
            className="hidden md:inline-block px-6 py-2 bg-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue/30 transition-all duration-200 transform hover:scale-105 cursor-pointer text-sm"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburguer Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-charcoal hover:bg-muted rounded-lg transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border transition-colors duration-300">
          <div className="container max-w-6xl py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 font-medium hover:text-mint transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all text-center text-sm"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
