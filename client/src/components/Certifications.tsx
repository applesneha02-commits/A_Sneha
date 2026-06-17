import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Award, X, FileText, Search, Mail, Share2, BarChart3, Magnet, BookOpen, ExternalLink, Calendar, ShieldCheck, Download } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  pdfLink?: string;
  description: string;
  color: string;
  iconName: string;
  skills: string[];
}

const certifications: Certification[] = [
  {
    title: 'Project Management Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Dec 2025',
    image: '/1776674732385.jpg',
    description: 'Covers agile methodologies, scoping, project lifecycle planning, scheduling, and risk management.',
    color: 'blue',
    iconName: 'book-open',
    skills: ['Agile Methodology', 'Project Management', 'Scope Planning', 'Risk Mitigation'],
  },
  {
    title: 'Digital Marketing Certification',
    issuer: 'AWS',
    date: 'Sep 2025',
    image: '/1757298934219.jpg',
    description: 'Focuses on cloud-enabled marketing architectures, data analytics, and customer acquisition channels.',
    color: 'mint',
    iconName: 'bar-chart',
    skills: ['Cloud Marketing', 'Analytics Platforms', 'Conversion Tracking', 'Data Integration'],
  },
  {
    title: 'Generative AI Mastermind',
    issuer: 'Outskill',
    date: 'Nov 2025',
    image: '/1761140982154.jpg',
    description: 'Advanced application of large language models, prompt engineering, and automated content workflows.',
    color: 'blue',
    iconName: 'share-2',
    skills: ['Generative AI', 'Prompt Engineering', 'Workflow Automation', 'Content Generation'],
  },
  {
    title: 'Freedom with AI Masterclass',
    issuer: 'Freedom with AI',
    date: 'Feb 2026',
    image: '/1772461345676.jpg',
    description: 'Leveraging automation and AI tools for content creation, productivity amplification, and organic growth.',
    color: 'mint',
    iconName: 'magnet',
    skills: ['AI Content Strategies', 'Productivity Enhancement', 'Growth Hacking'],
  },
  {
    title: 'Digital Marketing Course',
    issuer: 'TopperRank',
    date: 'Aug 2025',
    image: '/1757298934489.jpg',
    description: 'Detailed training in search engine optimization, pay-per-click ads, and social media marketing frameworks.',
    color: 'blue',
    iconName: 'file-text',
    skills: ['SEO & SEM', 'PPC Advertising', 'Social Media Ads', 'Competitor Analysis'],
  },
  {
    title: 'Digital Marketing Internship',
    issuer: 'TopperRank',
    date: 'Aug 2025',
    credentialId: 'TRINTC2569764',
    image: '/1757298934743.jpg',
    description: 'Hands-on internship focused on running real-world client social campaigns and tracking metrics.',
    color: 'mint',
    iconName: 'share-2',
    skills: ['Campaign Execution', 'Social Engagement', 'Client Strategy', 'Marketing Auditing'],
  },
  {
    title: 'National-Level Student Conference Paper',
    issuer: 'Presidency School of Commerce',
    date: 'Apr 2026',
    image: '/1777916846923.jpg',
    description: 'Presented research paper: "Women-Led Startups in India: Challenges, Opportunities and the Future of Inclusive Entrepreneurship".',
    color: 'blue',
    iconName: 'book-open',
    skills: ['Academic Research', 'Market Analysis', 'Presentation Skills', 'Inclusive Growth'],
  },
  {
    title: 'Crafting Your Digital Brand Workshop',
    issuer: 'Presidency University',
    date: 'Jun 2025',
    image: '/__Name__ Cerificate.png',
    pdfLink: '/__Name__ Cerificate.pdf',
    description: 'Intensive workshop centered on personal brand creation, LinkedIn optimization, and professional networking.',
    color: 'mint',
    iconName: 'share-2',
    skills: ['Personal Branding', 'LinkedIn Growth', 'Networking Strategy', 'Brand Audit'],
  },
  {
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    date: 'May 2026',
    credentialId: '461276399',
    image: '/Screenshot_20260504_093207_Chrome.jpg',
    description: 'Accredited validation covering display advertising, mobile marketing, organic search, and analytics.',
    color: 'blue',
    iconName: 'bar-chart',
    skills: ['Search Engine Optimization', 'Web Analytics', 'Display Advertising', 'Social Ads'],
  }
];

const colorMap: Record<string, string> = {
  blue: '#2563EB',
  mint: '#10B981',
};

const colorBgMap: Record<string, string> = {
  blue: 'rgba(37, 99, 235, 0.08)',
  mint: 'rgba(16, 185, 129, 0.08)',
};

const renderIcon = (name: string, style: React.CSSProperties) => {
  const props = { className: "w-6 h-6", style };
  switch (name) {
    case 'bar-chart': return <BarChart3 {...props} />;
    case 'file-text': return <FileText {...props} />;
    case 'share-2': return <Share2 {...props} />;
    case 'search': return <Search {...props} />;
    case 'magnet': return <Magnet {...props} />;
    case 'mail': return <Mail {...props} />;
    default: return <BookOpen {...props} />;
  }
};

export default function Certifications() {
  const [visibleCerts, setVisibleCerts] = useState<boolean[]>(Array(certifications.length).fill(false));
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleCerts((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-cert-card]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-background transition-colors duration-300">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-6 h-6 text-blue" />
            <span className="text-sm font-semibold text-blue uppercase tracking-wider">Credentials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Certifications & <span className="gradient-text-blue-mint">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Verified industry credentials and academic accomplishments in digital marketing, analytics, and AI.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-cert-card
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl bg-card p-6 border-2 transition-all duration-500 transform cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                visibleCerts[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${
                theme === 'dark' 
                  ? 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:border-blue' 
                  : 'hover:shadow-xl'
              }`}
              style={{
                borderColor: theme === 'dark' ? '#2E333F' : `${colorMap[cert.color]}20`,
                transitionDelay: `${index * 100}ms`,
              }}
              onClick={() => setSelectedCert(index)}
            >
              {/* Dynamic squircle icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: colorBgMap[cert.color] }}
                  >
                    {renderIcon(cert.iconName, { color: colorMap[cert.color] })}
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider"
                    style={{ backgroundColor: colorMap[cert.color] }}
                  >
                    {cert.issuer}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-charcoal mb-2 leading-snug group-hover:text-blue transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-sm text-gray-500">
                <span className="flex items-center gap-1 font-medium dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {cert.date}
                </span>
                <span className="font-semibold text-xs text-blue flex items-center gap-1 group-hover:text-mint group-hover:underline">
                  View certificate →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="p-8 bg-gradient-to-r from-blue/5 to-mint/5 rounded-2xl border border-blue/10">
          <p className="text-center text-gray-700 dark:text-gray-300">
            <span className="font-bold text-charcoal">Continuous Learner:</span> Actively pursuing professional development in digital marketing, content strategy, AI automation, and social media growth. Currently pursuing BBA in Digital Marketing at Presidency University, Bengaluru.
          </p>
        </div>
      </div>

      {/* Modal for full certificate view */}
      {selectedCert !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#000000]/70 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeInUp"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl p-6 border-2 flex flex-col md:flex-row gap-6 border-t-8"
            style={{ 
              borderTopColor: colorMap[certifications[selectedCert].color],
              borderColor: theme === 'dark' ? '#2E333F' : 'transparent'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer z-10"
            >
              <X className="w-5 h-5 text-charcoal" />
            </button>

            {/* Left side: Certificate Image */}
            <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 p-2 min-h-[200px] md:max-w-[50%]">
              <img
                src={certifications[selectedCert].image}
                alt={certifications[selectedCert].title}
                className="w-full h-auto max-h-[350px] object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right side: Credential details */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1 block">
                  {certifications[selectedCert].issuer} Verified
                </span>
                
                <h3 className="text-xl font-bold text-charcoal mb-3 leading-tight">
                  {certifications[selectedCert].title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {certifications[selectedCert].description}
                </p>

                {certifications[selectedCert].credentialId && (
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-600 dark:text-gray-300 bg-slate-50 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-100 dark:border-slate-700 w-fit">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>ID: <strong className="text-charcoal">{certifications[selectedCert].credentialId}</strong></span>
                  </div>
                )}

                <div className="mb-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {certifications[selectedCert].skills.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-0.5 bg-slate-50 dark:bg-slate-800 text-gray-755 dark:text-gray-300 text-xs font-medium rounded border border-slate-100 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                {certifications[selectedCert].pdfLink && (
                  <a
                    href={certifications[selectedCert].pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 border border-blue text-blue dark:text-blue-300 dark:border-blue-400 dark:hover:bg-blue/10 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF Certificate
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-full py-2.5 bg-[#0F172A] dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 font-semibold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Close Previews
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
