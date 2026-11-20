import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowRight, ExternalLink, AlertCircle, CheckCircle, BarChart3, Layers, Compass, Clock, Award } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { fullCaseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl my-auto bg-charcoal border border-borderline rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 sm:px-10 py-5 bg-obsidian/95 border-b border-borderline sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-crimson px-2.5 py-1 bg-burgundy/40 rounded border border-crimson/30">
              PROJECT {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest text-dustyrose font-medium">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-burgundy text-warmivory transition-colors border border-white/10"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-12">
          
          {/* Title & Status Banner */}
          <div className="space-y-4">
            {project.statusBadge && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs font-mono font-semibold">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{project.statusBadge}</span>
              </div>
            )}
            
            <h1 className="font-display text-4xl sm:text-6xl tracking-wide text-warmivory uppercase">
              {project.title}
            </h1>

            {fullCaseStudy.course && (
              <p className="font-mono text-xs text-dustyrose tracking-wider uppercase">
                {fullCaseStudy.course}
              </p>
            )}

            <p className="text-base sm:text-lg text-warmivory/90 font-editorial italic max-w-3xl leading-relaxed">
              &ldquo;{project.shortDescription}&rdquo;
            </p>
          </div>

          {/* High-Resolution Case Study Visual Preview Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-obsidian shadow-2xl aspect-[16/9] max-h-[420px] group">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-warmivory/90">
              <span className="px-3 py-1 rounded-full bg-obsidian/90 backdrop-blur-md border border-white/10 text-dustyrose">
                HIGH-RESOLUTION CASE STUDY MOCKUP
              </span>
              <a
                href={project.thumbnail}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1 rounded-full bg-burgundy hover:bg-crimson text-white transition-colors border border-crimson/30 inline-flex items-center gap-1.5"
              >
                <span>EXPAND GRAPHIC</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Section: Overview */}
          <div className="p-7 sm:p-9 rounded-2xl bg-obsidian border border-white/15 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-crimson-bright" />
              <h2 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-white">
                PROJECT OVERVIEW
              </h2>
            </div>
            <p className="text-base sm:text-lg text-warmivory leading-relaxed font-normal">
              {fullCaseStudy.overview}
            </p>

            {fullCaseStudy.objective && (
              <div className="pt-3 border-t border-white/10">
                <p className="text-xs sm:text-sm font-mono uppercase tracking-wider text-dustyrose font-bold mb-1">
                  Primary Objective:
                </p>
                <p className="text-sm sm:text-base text-warmivory leading-relaxed font-normal">
                  {fullCaseStudy.objective}
                </p>
              </div>
            )}
          </div>

          {/* Client Reference (if available, e.g. Freelance / Movers India) */}
          {fullCaseStudy.clientReference && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-burgundy/40 to-charcoal border border-crimson/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-dustyrose">
                  CLIENT & BRAND VERIFICATION
                </span>
                <span className="text-xs text-emerald-400 font-mono">Active Collaboration</span>
              </div>
              <h3 className="text-xl font-display uppercase text-warmivory">
                {fullCaseStudy.clientReference.companyName}
              </h3>
              <p className="text-xs text-warmivory/70 leading-relaxed">
                {fullCaseStudy.clientReference.notes}
              </p>
              <div className="pt-2">
                <a
                  href={fullCaseStudy.clientReference.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono text-dustyrose hover:text-warmivory transition-colors underline"
                >
                  <span>View Company LinkedIn Page</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          {/* Research Questions (if present, e.g., Zomato) */}
          {fullCaseStudy.researchQuestions && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-crimson-bright" />
                <h2 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-white">
                  RESEARCH QUESTIONS INVESTIGATED
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fullCaseStudy.researchQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-obsidian border border-white/15 flex items-start gap-3 shadow-md"
                  >
                    <span className="font-mono text-sm text-crimson-bright font-black shrink-0">
                      Q0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-warmivory leading-relaxed font-normal">
                      {q}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Data Used & Methodology (if present, e.g., Zomato) */}
          {fullCaseStudy.dataUsed && fullCaseStudy.methodology && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data Used */}
              <div className="p-6 sm:p-7 rounded-2xl bg-obsidian border border-white/15 space-y-4 shadow-md">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-dustyrose">
                  DATA USED &amp; SOURCES
                </h3>
                <ul className="space-y-3">
                  {fullCaseStudy.dataUsed.map((data, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-warmivory leading-relaxed font-normal">
                      <span className="w-2 h-2 rounded-full bg-crimson-bright mt-1.5 shrink-0"></span>
                      <span>{data}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Methodology */}
              <div className="p-6 sm:p-7 rounded-2xl bg-obsidian border border-white/15 space-y-4 shadow-md">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] font-bold text-dustyrose">
                  METHODOLOGY &amp; FORMULA
                </h3>
                {fullCaseStudy.methodology.formula && (
                  <div className="p-4 bg-burgundy/50 rounded-xl border border-crimson/50 font-mono text-xs sm:text-sm text-white font-bold text-center">
                    {fullCaseStudy.methodology.formula}
                  </div>
                )}
                <p className="text-sm text-warmivory leading-relaxed font-normal">
                  {fullCaseStudy.methodology.description}
                </p>
              </div>
            </div>
          )}

          {/* What I Studied (IKEA) */}
          {fullCaseStudy.whatIStudied && (
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-warmivory">
                KEY AREAS OF INVESTIGATION
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {fullCaseStudy.whatIStudied.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-obsidian border border-borderline text-xs text-warmivory/80 leading-relaxed font-light"
                  >
                    <span className="text-[10px] font-mono text-dustyrose block mb-1">
                      AREA 0{idx + 1}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Calculation Highlight (IKEA Click & Collect) */}
          {fullCaseStudy.calculationHighlight && (
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-charcoal via-burgundy/30 to-obsidian border border-crimson/40 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-dustyrose" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-warmivory">
                  {fullCaseStudy.calculationHighlight.label}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-obsidian/70 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-mutedgrey block">
                    Store Floor Hours
                  </span>
                  <p className="text-sm font-bold text-warmivory mt-1">
                    {fullCaseStudy.calculationHighlight.storeHours}
                  </p>
                </div>
                <div className="p-4 bg-obsidian/70 rounded-xl border border-white/5">
                  <span className="text-[10px] uppercase font-mono text-mutedgrey block">
                    Click & Collect Hours
                  </span>
                  <p className="text-sm font-bold text-warmivory mt-1">
                    {fullCaseStudy.calculationHighlight.clickCollectHours}
                  </p>
                </div>
                <div className="p-4 bg-burgundy/60 rounded-xl border border-crimson/50">
                  <span className="text-[10px] uppercase font-mono text-dustyrose block">
                    Operational Utility Gain
                  </span>
                  <p className="text-sm font-bold text-warmivory mt-1">
                    {fullCaseStudy.calculationHighlight.additionalHours}
                  </p>
                </div>
              </div>
              <p className="text-xs text-warmivory/80 italic font-editorial text-center pt-1">
                &ldquo;{fullCaseStudy.calculationHighlight.insight}&rdquo;
              </p>
            </div>
          )}

          {/* Process Flow Visualisation (IKEA) */}
          {fullCaseStudy.processFlow && (
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-warmivory">
                PROCESS FLOW ARCHITECTURE
              </h2>
              <div className="p-6 rounded-2xl bg-obsidian border border-borderline overflow-x-auto">
                <div className="flex items-center justify-between min-w-[700px] gap-2">
                  {fullCaseStudy.processFlow.map((step, idx, arr) => (
                    <React.Fragment key={step}>
                      <div className="flex flex-col items-center text-center px-2 py-3 bg-charcoal rounded-lg border border-white/5 w-28 shrink-0">
                        <span className="font-mono text-[9px] text-crimson font-bold">
                          0{idx + 1}
                        </span>
                        <span className="text-[11px] font-medium text-warmivory mt-1 leading-tight">
                          {step}
                        </span>
                      </div>
                      {idx < arr.length - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-dustyrose shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Recommendations (IKEA) */}
          {fullCaseStudy.recommendations && (
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold text-warmivory">
                STRATEGIC RECOMMENDATIONS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fullCaseStudy.recommendations.map((rec) => (
                  <div
                    key={rec.title}
                    className="p-6 rounded-2xl bg-obsidian border border-borderline space-y-3"
                  >
                    <h3 className="text-sm font-bold text-dustyrose uppercase tracking-wide">
                      {rec.title}
                    </h3>
                    <p className="text-xs text-warmivory/80 leading-relaxed font-light">
                      {rec.description}
                    </p>
                    <div className="p-2.5 rounded bg-charcoal border border-white/5 font-mono text-[11px] text-warmivory/90">
                      {rec.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results (LinkedIn & Freelance) */}
          {fullCaseStudy.results && (
            <div className="p-6 sm:p-8 rounded-2xl bg-obsidian border border-borderline space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-dustyrose" />
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-warmivory">
                  MEASURABLE OUTCOMES & GROWTH
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {fullCaseStudy.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-warmivory/90 p-3 bg-charcoal rounded-lg border border-white/5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Visualisations / Creative Placeholders (Zomato / LinkedIn / Freelance) */}
          {fullCaseStudy.visualPlaceholders && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-dustyrose" />
                  <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-warmivory">
                    ANALYTICAL DASHBOARDS & CONTENT ASSETS
                  </h3>
                </div>
                <span className="text-[10px] font-mono uppercase text-mutedgrey">Verified Frameworks</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {fullCaseStudy.visualPlaceholders.map((slot) => (
                  <div
                    key={slot.title}
                    className="p-5 rounded-xl bg-obsidian border border-dashed border-borderline/80 space-y-2 hover:border-dustyrose/50 transition-colors"
                  >
                    <span className="text-[9px] font-mono uppercase tracking-widest text-dustyrose block">
                      VISUAL ASSET
                    </span>
                    <h4 className="text-xs font-bold text-warmivory uppercase tracking-wide">
                      {slot.title}
                    </h4>
                    <p className="text-[11px] text-mutedgrey leading-relaxed font-light">
                      {slot.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block text-[10px] font-mono text-warmivory/60 px-2 py-0.5 rounded bg-charcoal border border-white/5">
                        {slot.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pending Key Findings & Recommendations for Zomato (Strict Content Accuracy) */}
          {project.id === 'zomato' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-obsidian border border-borderline space-y-2">
                <span className="text-[10px] font-mono text-mutedgrey uppercase tracking-widest">
                  FINDINGS STATUS
                </span>
                <h4 className="text-xs font-bold text-dustyrose uppercase">KEY FINDINGS</h4>
                <p className="text-xs text-mutedgrey font-mono">[TO BE ADDED AFTER ANALYSIS]</p>
                <p className="text-[11px] text-mutedgrey leading-relaxed">
                  Data aggregation currently underway across post-level engagement and SimilarWeb traffic metrics.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-obsidian border border-borderline space-y-2">
                <span className="text-[10px] font-mono text-mutedgrey uppercase tracking-widest">
                  SYNTHESIS STATUS
                </span>
                <h4 className="text-xs font-bold text-dustyrose uppercase">RECOMMENDATIONS</h4>
                <p className="text-xs text-mutedgrey font-mono">[TO BE ADDED AFTER ANALYSIS]</p>
                <p className="text-[11px] text-mutedgrey leading-relaxed">
                  Strategic growth recommendations will be documented upon final statistical validation.
                </p>
              </div>
            </div>
          )}

          {/* Honest Limitations & Research Notes */}
          {(fullCaseStudy.limitationOrNote || fullCaseStudy.honestResearchNote) && (
            <div className="p-5 rounded-xl bg-charcoal/80 border border-borderline/80 space-y-2">
              <div className="flex items-center gap-2 text-dustyrose">
                <AlertCircle className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-mono tracking-widest font-semibold">
                  RESEARCH METHODOLOGY & ETHICAL NOTE
                </span>
              </div>
              <p className="text-xs text-warmivory/70 leading-relaxed font-light">
                {fullCaseStudy.limitationOrNote || fullCaseStudy.honestResearchNote}
              </p>
            </div>
          )}

          {/* Tools & Tech Stack */}
          <div className="pt-4 border-t border-borderline flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-mono text-mutedgrey">TOOLS USED:</span>
              <div className="flex flex-wrap gap-2">
                {fullCaseStudy.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-obsidian rounded-md text-xs font-mono text-warmivory/90 border border-white/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-burgundy hover:bg-crimson text-warmivory text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
