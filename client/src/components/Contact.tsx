import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export default function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-cream dark:from-background dark:to-background transition-colors duration-300">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Let's Build <span className="gradient-text-blue-mint">Something Great</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to scale your brand or collaborate on a project? Let's connect.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:snehaa9577@gmail.com"
            className={`group p-8 bg-card border-2 rounded-2xl transition-all duration-300 text-center cursor-pointer ${
              theme === 'dark' 
                ? 'border-[#2E333F] hover:border-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                : 'border-blue/20 hover:border-blue hover:shadow-lg hover:shadow-blue/20'
            }`}
          >
            <div className="text-4xl mb-4 flex justify-center">
              <Mail className="w-10 h-10 text-blue" />
            </div>
            <h3 className="font-bold text-charcoal mb-2">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue transition-colors">
              snehaa9577@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+918861160702"
            className={`group p-8 bg-card border-2 rounded-2xl transition-all duration-300 text-center cursor-pointer ${
              theme === 'dark' 
                ? 'border-[#2E333F] hover:border-mint hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]' 
                : 'border-mint/20 hover:border-mint hover:shadow-lg hover:shadow-mint/20'
            }`}
          >
            <div className="text-4xl mb-4 flex justify-center">
              <Phone className="w-10 h-10 text-mint" />
            </div>
            <h3 className="font-bold text-charcoal mb-2">Phone</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-mint transition-colors">
              +91 8861160702
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/a-sneha-71a314320/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-8 bg-card border-2 rounded-2xl transition-all duration-300 text-center cursor-pointer ${
              theme === 'dark' 
                ? 'border-[#2E333F] hover:border-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]' 
                : 'border-blue/20 hover:border-blue hover:shadow-lg hover:shadow-blue/20'
            }`}
          >
            <div className="text-4xl mb-4 flex justify-center">
              <Linkedin className="w-10 h-10 text-blue" />
            </div>
            <h3 className="font-bold text-charcoal mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-blue transition-colors flex items-center justify-center gap-1">
              Connect with me
              <ExternalLink className="w-3 h-3" />
            </p>
          </a>
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue to-mint rounded-2xl p-12 text-white text-center shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you need a social media strategist, content creator, or growth hacker, let's work together to scale your brand.
          </p>
          <a
            href="mailto:snehaa9577@gmail.com"
            className="inline-block px-10 py-4 bg-white text-blue dark:text-blue-900 font-bold rounded-lg hover:shadow-lg hover:shadow-white/30 transition-all duration-200 transform hover:scale-105 cursor-pointer text-sm"
          >
            Start a Conversation
          </a>
        </div>

        {/* Education */}
        <div className="mt-16 p-8 bg-card border-2 border-mint/20 dark:border-[#2E333F] rounded-2xl text-center hover:border-mint transition-all duration-300">
          <p className="text-sm font-semibold text-mint mb-2">EDUCATION</p>
          <h3 className="text-2xl font-bold text-charcoal mb-2">Presidency University, Bengaluru</h3>
          <p className="text-gray-600 dark:text-gray-300">BBA in Digital Marketing (2024-2027)</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            Focused on digital marketing, content strategy, and social media management
          </p>
        </div>
      </div>
    </section>
  );
}
