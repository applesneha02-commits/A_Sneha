import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const experiences = [
  {
    role: 'Social Media Intern',
    company: 'Digitopedia Solutions',
    period: 'Feb 2026 - Now',
    color: 'blue',
    achievements: [
      'Planned and executed weekly posting schedules (4–5 posts/week)',
      'Conducted competitor analysis across 5+ similar pages',
      'Supported digital campaigns to improve visibility',
    ],
  },
  {
    role: 'Social Media Team Member',
    company: 'Digitopedia',
    period: 'Sep 2025 - Now',
    color: 'mint',
    achievements: [
      'Managed Instagram & LinkedIn presence across 2+ accounts',
      'Increased follower base by 40% through consistent posting',
      'Created engaging reels, carousels, and caption hooks',
      'Achieved 2K+ impressions on posts',
    ],
  },
  {
    role: 'Research & Development Team Member',
    company: 'Digitopedia',
    period: 'Dec 2024 - Sep 2025',
    color: 'blue',
    achievements: [
      'Researched digital marketing trends',
      'Contributed to content strategy planning',
      'Analyzed market opportunities',
    ],
  },
  {
    role: 'Website Growth & Content Strategy',
    company: 'Early Stage Startup',
    period: 'Mar 2026 - Present',
    color: 'mint',
    achievements: [
      'Improved website engagement and user experience',
      'Contributed to landing page messaging',
      'Suggested CTA placement and value proposition improvements',
    ],
  },
];

const colorMap: Record<string, string> = {
  blue: '#2563EB',
  mint: '#10B981',
};

export default function Experience() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(experiences.length).fill(false));
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-exp-card]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-white dark:bg-background transition-colors duration-300">
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            My <span className="gradient-text-blue-mint">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            From hands-on experience to strategic leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue via-mint to-blue hidden md:block" />

          {/* Experience items */}
          <div className="space-y-8 md:pl-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-exp-card
                data-index={index}
                className={`group relative transition-all duration-500 transform ${
                  visibleItems[index]
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute -left-16 top-2 w-6 h-6 rounded-full border-4 border-white dark:border-background hidden md:block"
                  style={{
                    backgroundColor: colorMap[exp.color],
                    boxShadow: `0 0 0 4px ${colorMap[exp.color]}20`,
                  }}
                />

                {/* Card */}
                <div
                  className={`p-6 bg-card border-2 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                    theme === 'dark' 
                      ? 'hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue' 
                      : 'hover:shadow-lg'
                  }`}
                  style={{
                    borderLeftWidth: '6px',
                    borderLeftColor: colorMap[exp.color],
                    borderColor: theme === 'dark' ? '#2E333F' : `${colorMap[exp.color]}20`,
                  }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-charcoal group-hover:text-blue transition-colors duration-200">{exp.role}</h3>
                      <p
                        className="text-sm font-semibold mt-1"
                        style={{ color: colorMap[exp.color] }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <div
                      className="text-sm font-semibold mt-2 md:mt-0 px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
                      style={{ color: colorMap[exp.color] }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: colorMap[exp.color] }}
                        />
                        <span className="text-sm leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
