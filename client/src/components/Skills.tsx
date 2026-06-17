import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Smartphone, Sparkles, BarChart3, Palette } from 'lucide-react';

const skillCategories = [
  {
    title: 'Social Media Strategy',
    color: 'blue',
    icon: 'smartphone',
    skills: ['LinkedIn Growth', 'Content Planning', 'Audience Research', 'Engagement Tactics', 'Community Management'],
  },
  {
    title: 'Content Creation',
    color: 'mint',
    icon: 'sparkles',
    skills: ['Copywriting', 'Reels & Videos', 'Carousel Posts', 'Caption Hooks', 'Visual Design'],
  },
  {
    title: 'Analytics & Tools',
    color: 'blue',
    icon: 'bar-chart',
    skills: ['Google Analytics', 'Meta Business Suite', 'Competitor Analysis', 'Performance Tracking', 'SEO Basics'],
  },
  {
    title: 'Creative Tools',
    color: 'mint',
    icon: 'palette',
    skills: ['Canva', 'CapCut', 'WordPress', 'Notion AI', 'ChatGPT'],
  },
];

const colorMap: Record<string, string> = {
  blue: '#2563EB',
  mint: '#10B981',
};

const colorBgMap: Record<string, string> = {
  blue: 'rgba(37, 99, 235, 0.08)',
  mint: 'rgba(16, 185, 129, 0.08)',
};

const renderIcon = (name: string, color: string) => {
  const props = { className: "w-6 h-6", style: { color } };
  switch (name) {
    case 'smartphone': return <Smartphone {...props} />;
    case 'sparkles': return <Sparkles {...props} />;
    case 'bar-chart': return <BarChart3 {...props} />;
    case 'palette': return <Palette {...props} />;
    default: return null;
  }
};

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(Array(skillCategories.length).fill(false));
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleCards((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-skill-card]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background via-cream to-background transition-colors duration-300">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            What I <span className="gradient-text-blue-mint">Bring to the Table</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A blend of strategic thinking, creative execution, and data-driven optimization
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-skill-card
              data-index={index}
              className={`group relative p-6 bg-card rounded-2xl border-2 transition-all duration-500 transform hover:-translate-y-1 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              } ${
                theme === 'dark' 
                  ? 'hover:shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:border-blue' 
                  : 'hover:shadow-lg'
              }`}
              style={{
                borderColor: theme === 'dark' ? '#2E333F' : `${colorMap[category.color]}20`,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl"
                style={{ backgroundColor: colorMap[category.color] }}
              />

              {/* Icon container */}
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300"
                style={{ backgroundColor: colorBgMap[category.color] }}
              >
                {renderIcon(category.icon, colorMap[category.color])}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-charcoal mb-4">{category.title}</h3>

              {/* Skills list */}
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 group-hover:text-charcoal transition-colors">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: colorMap[category.color] }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Hover background effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                style={{ backgroundColor: colorMap[category.color] }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
