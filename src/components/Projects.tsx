import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project-')) {
        const projectId = hash.replace('#project-', '');
        const found = PROJECTS.find((p) => p.id === projectId);
        if (found) {
          setSelectedProject(found);
        }
      } else if (!hash.includes('project-') && selectedProject) {
        setSelectedProject(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    window.location.hash = `project-${project.id}`;
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    if (window.location.hash.startsWith('#project-')) {
      history.pushState(null, '', '#projects');
    }
  };

  return (
    <section id="projects" className="relative w-full bg-charcoal py-24 sm:py-32 border-b border-white/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        
        {/* Editorial Section Header with Thin Divider connecting to Right Link */}
        <div className="flex items-center justify-between gap-6 pb-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-crimson-bright"></span>
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-dustyrose font-bold hidden sm:inline">
              05 /
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl tracking-wider text-white uppercase font-black shrink-0">
              SELECTED PROJECTS
            </h2>
          </div>
          
          {/* Thin Horizontal Connecting Line */}
          <div className="hidden sm:block flex-grow h-[1px] bg-white/20"></div>

          <div className="flex items-center gap-2 text-xs sm:text-sm uppercase font-mono tracking-widest text-dustyrose shrink-0 font-bold">
            <Sparkles className="w-4 h-4 text-crimson-bright" />
            <span>4 LIVE CASE STUDIES</span>
          </div>
        </div>

        {/* 4 Projects in a Responsive 2-Column / Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={handleSelectProject}
            />
          ))}
        </div>

        {/* Bottom Context Banner */}
        <div className="p-6 rounded-2xl bg-charcoal/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-mutedgrey">
          <span>Click any card to inspect full methodology, data sources, calculations &amp; strategic findings.</span>
          <span className="text-dustyrose">DEEP LINKING SUPPORTED (#project-id)</span>
        </div>

      </div>

      {/* Dedicated Project Detail Case Study Modal */}
      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};
