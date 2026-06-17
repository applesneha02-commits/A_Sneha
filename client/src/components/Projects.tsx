import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { TrendingUp, Smartphone, Rocket, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'LinkedIn Growth Project',
    subtitle: 'Personal Branding',
    color: 'blue',
    icon: 'trending-up',
    metrics: ['100 → 500+ connections', '30-40 → 2,000+ impressions', 'Consistent engagement'],
    description: 'Scaled personal LinkedIn presence through strategic content and authentic engagement',
  },
  {
    title: 'Social Media Management',
    subtitle: 'Freelance Project',
    color: 'mint',
    icon: 'smartphone',
    metrics: ['40% follower growth', '2+ accounts managed', 'Multi-platform strategy'],
    description: 'Managed business accounts and improved online presence through consistent posting',
  },
  {
    title: 'Website Growth & Strategy',
    subtitle: 'Early Stage Startup',
    color: 'blue',
    icon: 'rocket',
    metrics: ['Landing page optimization', 'CTA placement improvements', 'User flow design'],
    description: 'Collaborated on website engagement and user experience improvements',
  },
  {
    title: 'Content Strategy Planning',
    subtitle: 'Digital Marketing',
    color: 'mint',
    icon: 'sparkles',
    metrics: ['Trend research', 'Competitor analysis', 'Content calendar creation'],
    description: 'Developed data-driven content strategies for brand visibility and reach',
  },
];

const colorMap: Record<string, string> = {
  blue: '#2563EB',
  mint: '#10B981',
};

const renderIcon = (name: string, color: string) => {
  const props = { className: "w-10 h-10", style: { color } };
  switch (name) {
    case 'trending-up': return <TrendingUp {...props} />;
    case 'smartphone': return <Smartphone {...props} />;
    case 'rocket': return <Rocket {...props} />;
    case 'sparkles': return <Sparkles {...props} />;
    default: return null;
  }
};

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>(Array(projects.length).fill(false));
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleProjects((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-project-card]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background via-cream to-background transition-colors duration-300">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Featured <span className="gradient-text-blue-mint">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real results from real projects—growth, strategy, and execution
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-project-card
              data-index={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                visibleProjects[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${
                theme === 'dark'
                  ? 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:border-blue'
                  : 'hover:shadow-xl'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Subtle background color tint */}
              <div
                className="absolute inset-0 transition-opacity duration-300 animate-delay-0"
                style={{ backgroundColor: colorMap[project.color], opacity: theme === 'dark' ? 0.01 : 0.03 }}
              />

              {/* Content Card */}
              <div className="relative p-8 bg-card border-2 rounded-2xl h-full flex flex-col transition-all duration-300"
                style={{
                  borderColor: theme === 'dark' ? '#2E333F' : `${colorMap[project.color]}20`,
                }}>
                
                {/* Icon and title */}
                <div className="mb-6">
                  <div className="mb-4 transition-transform group-hover:scale-110 duration-300 inline-block">
                    {renderIcon(project.icon, colorMap[project.color])}
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-1 group-hover:text-blue transition-colors duration-200">{project.title}</h3>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: colorMap[project.color] }}
                  >
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow leading-relaxed">{project.description}</p>

                {/* Metrics */}
                <div className="space-y-2 pt-6 border-t"
                  style={{
                    borderColor: theme === 'dark' ? '#2E333F' : `${colorMap[project.color]}20`,
                  }}>
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colorMap[project.color] }}
                      />
                      {metric}
                    </div>
                  ))}
                </div>

                {/* Soft glow circle in the corner */}
                <div
                  className="absolute -bottom-1 -right-1 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300"
                  style={{ backgroundColor: colorMap[project.color] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
