import React from 'react';
import { Project } from '../types';
import { ArrowRight, BarChart3, Box, TrendingUp, Users } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getBadgeInfo = (id: string) => {
    switch (id) {
      case 'zomato':
        return {
          icon: <BarChart3 className="w-4 h-4 text-crimson-bright" />,
          highlight: 'SimilarWeb + Social Data',
        };
      case 'ikea':
        return {
          icon: <Box className="w-4 h-4 text-amber-400" />,
          highlight: '+14h Click & Collect Gain',
        };
      case 'linkedin-growth':
        return {
          icon: <TrendingUp className="w-4 h-4 text-sky-400" />,
          highlight: '500+ Connections · 50x Reach',
        };
      case 'freelance-smm':
        return {
          icon: <Users className="w-4 h-4 text-emerald-400" />,
          highlight: '40% Follower Growth',
        };
      default:
        return {
          icon: null,
          highlight: 'Verified Study',
        };
    }
  };

  const badgeInfo = getBadgeInfo(project.id);

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative flex flex-col justify-between cursor-pointer space-y-5 rounded-2xl bg-charcoal/70 p-5 sm:p-6 border border-white/15 hover:border-crimson hover:bg-charcoal transition-all duration-500 shadow-xl hover:shadow-glow-burgundy"
    >
      {/* Project Thumbnail with high-definition mockup */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-obsidian border border-white/10 shadow-inner">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-100 group-hover:scale-105 transition-all duration-700"
          loading="lazy"
        />

        {/* Subtle Dark Gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="font-mono text-sm font-black text-white px-3 py-1 rounded bg-black/80 backdrop-blur-md border border-white/20">
            {project.number}
          </span>

          {project.statusBadge ? (
            <span className="bg-amber-500/30 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-amber-300 border border-amber-500/50 font-bold">
              {project.statusBadge}
            </span>
          ) : (
            <span className="bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono uppercase text-dustyrose border border-white/20 font-bold">
              Verified Case Study
            </span>
          )}
        </div>

        {/* Hover Action Overlay Pill */}
        <div className="absolute bottom-3.5 right-3.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-crimson text-white text-xs font-mono uppercase tracking-wider rounded-full shadow-lg font-bold">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Editorial Card Meta */}
      <div className="space-y-3 pt-1">
        
        {/* Metric Highlight Tag */}
        <div className="flex items-center gap-2">
          {badgeInfo.icon}
          <span className="text-xs sm:text-sm font-mono text-dustyrose font-bold tracking-wide">
            {badgeInfo.highlight}
          </span>
        </div>

        {/* Title: Big, Bold, Clean */}
        <h3 className="font-display text-2xl sm:text-3xl tracking-wide text-white uppercase group-hover:text-dustyrose transition-colors leading-tight font-black">
          {project.title}
        </h3>

        {/* Category */}
        <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-warmivory/80 font-bold">
          {project.category}
        </p>

        {/* Description: Legible font size and weight */}
        <p className="text-sm sm:text-base text-warmivory font-normal leading-relaxed">
          {project.shortDescription}
        </p>
      </div>

      {/* Card Footer: Clean Divider and Case Study Trigger */}
      <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs sm:text-sm font-mono uppercase tracking-widest text-warmivory group-hover:text-crimson-bright transition-colors">
        <span className="font-bold text-white group-hover:text-crimson-bright">
          VIEW DETAILED CASE STUDY
        </span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-crimson-bright" />
      </div>
    </div>
  );
};
