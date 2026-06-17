import { Linkedin, Mail, Phone, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] dark:bg-[#0B0C0E] text-white py-12 transition-colors duration-300">
      <div className="container max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue to-mint rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="gradient-text-blue-mint font-bold text-xl">A Sneha</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Social Media Marketer & Content Strategy Expert. Scaling brands through data-driven growth and authentic engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#skills" className="hover:text-mint transition-colors cursor-pointer">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-mint transition-colors cursor-pointer">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-mint transition-colors cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-mint transition-colors cursor-pointer">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-mint transition-colors cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Get in Touch</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <a
                href="mailto:snehaa9577@gmail.com"
                className="flex items-center gap-2 hover:text-mint transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                snehaa9577@gmail.com
              </a>
              <a
                href="tel:+918861160702"
                className="flex items-center gap-2 hover:text-mint transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                +91 8861160702
              </a>
              <a
                href="https://www.linkedin.com/in/a-sneha-71a314320/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-mint transition-colors cursor-pointer"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 dark:border-slate-900 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <p>© {currentYear} A Sneha. All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center justify-center gap-1">
              Crafted with <Heart className="w-4 h-4 text-mint fill-mint inline-block" /> for growth and impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
