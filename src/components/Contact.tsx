import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Linkedin, MapPin, Send, CheckCircle2, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    setStatus('submitting');
    try {
      await fetch('https://formspree.io/f/xvgqkjjn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Message from ${formData.name}`,
        }),
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });
    } catch {
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-obsidian py-20 sm:py-28 overflow-hidden border-b border-white/10 scroll-mt-24">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-burgundy/25 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        
        {/* Main 3-Part Grid matching the reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* =========================================
              PART 1: HEADING & INTRO (4 COLS)
             ========================================= */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.9] font-black">
                LET&apos;S WORK
                <br />
                <span className="text-crimson-bright">TOGETHER</span>
                <span className="text-crimson ml-2 font-serif text-3xl">✦</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-warmivory font-normal leading-relaxed">
              I&apos;m currently open for new projects, digital marketing internships, and brand collaborations. Let&apos;s create meaningful digital growth that drives real engagement.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowForm(!showForm)}
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-crimson hover:bg-crimson-bright text-white text-xs sm:text-sm font-mono uppercase tracking-widest font-bold transition-all shadow-glow-crimson"
              >
                <span>{showForm ? 'CLOSE FORM' : 'SEND A DIRECT NOTE'}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* =========================================
              PART 2: CONTACT DETAILS WITH CIRCULAR ICONS (4 COLS)
             ========================================= */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Email */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group p-4 rounded-xl bg-charcoal/90 border border-white/15 hover:border-crimson transition-all flex items-center gap-4 shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-obsidian border-2 border-crimson/60 text-crimson-bright flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs font-mono uppercase text-dustyrose font-bold block">EMAIL</span>
                <span className="text-sm sm:text-base font-semibold text-white truncate block group-hover:text-dustyrose transition-colors">
                  {PERSONAL_INFO.email}
                </span>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-charcoal/90 border border-white/15 hover:border-crimson transition-all flex items-center gap-4 shadow-md"
            >
              <div className="w-10 h-10 rounded-full bg-obsidian border-2 border-crimson/60 text-crimson-bright flex items-center justify-center shrink-0 group-hover:bg-crimson group-hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5 overflow-hidden">
                <span className="text-xs font-mono uppercase text-dustyrose font-bold block">LINKEDIN</span>
                <span className="text-sm sm:text-base font-semibold text-white truncate block group-hover:text-dustyrose transition-colors">
                  linkedin.com/in/a--sneha
                </span>
              </div>
            </a>

            {/* Location */}
            <div className="p-4 rounded-xl bg-charcoal/90 border border-white/15 flex items-center gap-4 shadow-md">
              <div className="w-10 h-10 rounded-full bg-obsidian border-2 border-crimson/60 text-crimson-bright flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase text-dustyrose font-bold block">LOCATION</span>
                <span className="text-sm sm:text-base font-semibold text-white block">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

          </div>

          {/* =========================================
              PART 3: WORKSPACE & SCREENSHOT SHOWCASE (4 COLS)
             ========================================= */}
          <div className="lg:col-span-4 relative">
            <div className="relative rounded-2xl overflow-hidden bg-charcoal border border-white/15 shadow-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="text-xs font-mono uppercase text-dustyrose font-bold">DIGITAL WORKBENCH</span>
              </div>

              {/* Graphic Mockup Area */}
              <div className="aspect-[16/10] bg-obsidian rounded-xl border border-white/10 p-5 flex flex-col justify-between relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-36 h-36 bg-crimson/25 rounded-full blur-2xl pointer-events-none"></div>

                <div className="space-y-2 relative z-10">
                  <span className="text-xs font-mono uppercase text-crimson-bright tracking-widest font-bold block">
                    CONTENT STRATEGY &amp; ANALYTICS
                  </span>
                  <h4 className="font-display text-2xl uppercase tracking-wide text-white font-black">
                    DIGITOPEDIA &amp; FREELANCE
                  </h4>
                  <p className="text-xs sm:text-sm text-warmivory leading-relaxed font-normal">
                    40% follower growth · 2,000+ post reach · Competitor intelligence
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-dustyrose font-bold relative z-10">
                  <span className="text-emerald-400">STATUS: OPEN FOR HIRES</span>
                  <span>BENGALURU, IN</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-warmivory/80 pt-1 font-semibold">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-crimson-bright" />
                  <span>Strategy &amp; Analytics</span>
                </div>
                <span className="text-dustyrose font-bold">2024 — 2027</span>
              </div>
            </div>
          </div>

        </div>

        {/* Expandable Functional Message Form */}
        {showForm && (
          <div className="p-8 sm:p-10 rounded-2xl bg-charcoal border-2 border-crimson/50 animate-fadeIn space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/15">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-crimson-bright" />
                <h3 className="font-display text-3xl uppercase tracking-wide text-white font-black">
                  DIRECT MESSAGE
                </h3>
              </div>
              <span className="text-xs sm:text-sm font-mono text-dustyrose font-bold">RESPONSE TIME: &lt; 24H</span>
            </div>

            {status === 'success' ? (
              <div className="p-8 rounded-xl bg-burgundy/50 border border-crimson text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-dustyrose mx-auto" />
                <h4 className="font-display text-2xl uppercase text-white font-bold">Message Transmitted</h4>
                <p className="text-sm text-warmivory font-normal">Thank you! A Sneha will respond to your email promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className="w-full px-5 py-3.5 bg-obsidian border border-white/20 rounded-xl text-sm text-white placeholder:text-warmivory/40 focus:border-crimson focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email Address *"
                    className="w-full px-5 py-3.5 bg-obsidian border border-white/20 rounded-xl text-sm text-white placeholder:text-warmivory/40 focus:border-crimson focus:outline-none"
                  />
                </div>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message or collaboration inquiry *"
                  className="w-full px-5 py-3.5 bg-obsidian border border-white/20 rounded-xl text-sm text-white placeholder:text-warmivory/40 focus:border-crimson focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-4 bg-crimson hover:bg-crimson-bright text-white rounded-full text-xs sm:text-sm font-mono uppercase tracking-widest font-bold flex items-center gap-2 shadow-glow-crimson"
                >
                  <span>{status === 'submitting' ? 'SENDING...' : 'TRANSMIT MESSAGE'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
