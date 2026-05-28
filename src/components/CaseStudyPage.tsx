import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Play,
  Image as ImageIcon,
  Target,
  Zap,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { OptimizedImage } from "./OptimizedImage";
import { Navigation } from "./Navigation";
import { getCaseStudyData } from "../data/caseStudies";
import { useState } from "react";

interface CaseStudyPageProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    avifImage?: string;
    placeholder?: string;
    tags: string[];
    tech: string[];
    color: string;
  };
  onBack: () => void;
}

export function CaseStudyPage({ project, onBack }: CaseStudyPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Get extended case study data
  const caseStudyData = getCaseStudyData(project);

  return (
    <>
      <Navigation onNavigate={onBack} showSections={true} />
      <div className="min-h-screen bg-[#faf8f5] bg-gradient-to-b from-[#faf8f5] to-[#f5f2eb] text-foreground font-craft-body selection:bg-craft-yellow/40 paper-grain">

        {/* Main folder dossier layout */}
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 relative z-10">
        
        {/* Back Button Folder Tab */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            onClick={onBack}
            className="bg-white hover:bg-white/80 text-foreground border border-foreground/60 paper-shadow rounded-none py-2 px-5 text-sm font-craft-title uppercase tracking-wider flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dossier Grid
          </Button>
        </motion.div>

        {/* Dossier Header - Main Cover Folder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-white border border-foreground/60 paper-shadow-lg p-8 md:p-12 mb-12 overflow-hidden rotate-[0.5deg]"
        >
          {/* Decorative tapes */}
          <div className="craft-tape w-16 h-4 top-[-8px] left-[40px] pointer-events-none tape-coral" style={{ transform: "rotate(-5deg)" }} />
          <div className="craft-tape w-16 h-4 top-[-8px] right-[40px] pointer-events-none tape-yellow" style={{ transform: "rotate(3deg)" }} />

          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            {/* Dossier info */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs border border-foreground/50 font-craft-title uppercase bg-white paper-shadow text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-craft-title uppercase tracking-tight text-foreground">
                {project.title}
              </h1>
              
              <p className="text-xl md:text-2xl font-craft-sketch text-muted-foreground leading-relaxed">
                {project.subtitle}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-dashed border-foreground/20">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 bg-white border border-foreground/55 font-craft-body text-xs text-foreground/80 font-bold paper-shadow"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Dossier Pinned Cover Art */}
            <div className="md:col-span-5 relative">
              <div className="relative rotate-[2deg] aspect-video border border-foreground/60 paper-shadow bg-[#faf8f5] overflow-hidden">
                {/* Tape on image */}
                <div className="craft-tape w-16 h-4 top-[-8px] left-1/2 -translate-x-1/2 tape-blue pointer-events-none z-10" />
                
                <OptimizedImage
                  src={project.image}
                  avifSrc={project.avifImage}
                  placeholder={project.placeholder}
                  alt={project.title}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-craft-tan/10 mix-blend-color-burn pointer-events-none" />
              </div>
            </div>

          </div>
        </motion.div>

        {/* Project Info Specs Bar */}
        <section className="relative bg-white border border-foreground/60 paper-shadow-lg py-6 px-8 mb-12 rotate-[-0.5deg]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Role", value: caseStudyData.role },
              { label: "Duration", value: caseStudyData.duration },
              { label: "Team Size", value: caseStudyData.team },
              { label: "Platform", value: caseStudyData.platform },
            ].map((item, i) => (
              <div key={i} className="space-y-1">
                <div className="font-craft-sketch text-[10px] text-muted-foreground uppercase">{item.label}</div>
                <div className="font-craft-title text-base text-foreground uppercase tracking-tight">{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Overview Ruled Notebook Sheet */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-white border border-foreground/60 paper-shadow-lg p-8 md:p-12 mb-12 notebook-ruled overflow-hidden"
        >
          {/* Tape details */}
          <div className="craft-tape w-20 h-5 top-[-10px] left-[35px] pointer-events-none tape-green" style={{ transform: "rotate(-3deg)" }} />
          <div className="craft-tape w-20 h-5 top-[-10px] right-[35px] pointer-events-none tape-yellow" style={{ transform: "rotate(4deg)" }} />
          <div className="absolute left-[38px] top-0 bottom-0 w-[1px] bg-red-400 opacity-40 pointer-events-none" />

          <div className="pl-10 md:pl-14 relative z-10 space-y-6">
            <h2 className="font-craft-title text-2xl text-foreground uppercase tracking-tight">
              Project Overview
            </h2>
            <p className="text-lg md:text-xl md:leading-[2.2rem] text-foreground/95">
              {caseStudyData.overview}
            </p>
          </div>
        </motion.section>

        {/* Key Features */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-1 bg-craft-yellow text-foreground border border-foreground/80 paper-shadow rotate-[-1deg] font-craft-title text-lg uppercase tracking-wider">
              Key Features
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.features.map((feature, index) => {
              const rot = index % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  style={{ rotate: rot }}
                  className="craft-panel p-6 bg-white border border-foreground/60 paper-shadow-lg flex flex-col justify-between"
                >
                  <div className="craft-tape w-12 h-3.5 top-[-8px] left-[15px] pointer-events-none tape-coral" style={{ transform: "rotate(-8deg)" }} />
                  
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div className="p-2 bg-white border border-foreground/50 rounded-none paper-shadow flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="font-craft-title text-lg text-foreground uppercase tracking-tight">{feature.title}</h3>
                    </div>
                    <p className="font-craft-body text-sm text-foreground/80 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Polaroid Gallery Section */}
        <section className="mb-12">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-1 bg-craft-blue text-white border border-foreground/80 paper-shadow rotate-[1deg] font-craft-title text-lg uppercase tracking-wider">
              Gallery
            </div>
            <p className="text-xs font-craft-sketch text-muted-foreground mt-3">Click on snapshots to zoom in</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudyData.gallery.map((item, index) => {
              const rot = (index % 3 === 0 ? "rotate-[-3deg]" : index % 3 === 1 ? "rotate-[2deg]" : "rotate-[-1deg]");
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, rotate: "0deg" }}
                  style={{ rotate: rot }}
                  className="relative p-4 bg-white border border-foreground/60 paper-shadow-lg cursor-pointer group"
                  onClick={() =>
                    item.type === "image" && setSelectedImage(item.url)
                  }
                >
                  {/* Polaroid tape label */}
                  <div className="craft-tape w-16 h-4 top-[-8px] left-1/2 -translate-x-1/2 tape-blue pointer-events-none z-10" />

                  {/* Photo area */}
                  <div className="aspect-video relative bg-slate-100 border border-foreground/30 shadow-inner overflow-hidden mb-3">
                    {item.type === "image" ? (
                      <>
                        <OptimizedImage
                          src={item.url}
                          avifSrc={item.avifUrl}
                          placeholder={item.placeholder}
                          alt={item.caption}
                          className="w-full h-full"
                        />
                        <div className="absolute inset-0 bg-craft-tan/10 mix-blend-color-burn pointer-events-none" />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-foreground/5">
                        <Play className="w-12 h-12 text-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Polaroid text margin */}
                  <div className="text-center pt-1 pb-2">
                    <p className="font-craft-sketch text-xs text-foreground uppercase font-bold tracking-tight">{item.caption}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Media Disclaimer sheet */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto rotate-[-0.5deg]"
          >
            <div className="relative bg-white border border-foreground/55 paper-shadow-lg px-6 py-5">
              <div className="craft-tape w-16 h-3.5 top-[-8px] left-1/2 -translate-x-1/2 tape-green pointer-events-none" />
              
              <div className="font-craft-body text-xs text-foreground/80 leading-relaxed mt-2">
                <span className="flex items-center gap-1.5 mb-1.5">
                  <ImageIcon className="w-4 h-4 text-foreground shrink-0" />
                  <strong className="font-craft-title text-xs uppercase tracking-wider">Disclaimer Note</strong>
                </span>
                All showcased projects belong to{" "}
                <a
                  href="https://trangotech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold"
                >
                  TrangoTech
                </a>{" "}
                and associated partners. I contributed to them as part of the development team,
                working as a <strong>Game Developer</strong> and, on select
                projects, taking on <strong>Lead</strong> and{" "}
                <strong>Producer</strong> responsibilities — overseeing
                workflows, collaborating with teams, and supporting production quality.
              </div>
            </div>
          </motion.div>
        </section>

        {/* Challenges & Solutions Sticky Notes */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-1 bg-craft-red text-white border border-foreground/80 paper-shadow rotate-[-1.5deg] font-craft-title text-lg uppercase tracking-wider">
              Challenges & Solutions
            </div>
          </div>

          <div className="space-y-8">
            {caseStudyData.challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                {/* Challenge Note (Pink/Red Note) */}
                <div className="relative p-6 bg-[#fee2e2]/30 border border-[#fca5a5] paper-shadow rotate-[-1deg]">
                  <div className="craft-tape w-12 h-3.5 top-[-8px] left-8 tape-coral pointer-events-none" style={{ transform: "rotate(-12deg)" }} />
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-craft-red shrink-0" />
                    <h3 className="font-craft-title text-sm uppercase text-craft-red tracking-wider">MISSION OBSTACLE</h3>
                  </div>
                  <p className="font-craft-body text-sm text-foreground/85 leading-relaxed">{item.challenge}</p>
                </div>

                {/* Solution Note (Yellow Note) */}
                <div className="relative p-6 bg-[#fef9c3]/30 border border-[#fde047] paper-shadow rotate-[1deg]">
                  <div className="craft-tape w-12 h-3.5 top-[-8px] right-8 tape-yellow pointer-events-none" style={{ transform: "rotate(5deg)" }} />
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-foreground shrink-0" />
                    <h3 className="font-craft-title text-sm uppercase text-foreground tracking-wider">RESOLUTION METHOD</h3>
                  </div>
                  <p className="font-craft-body text-sm text-foreground/85 leading-relaxed">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results & Impact Cardboard Tags */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <div className="inline-block px-5 py-1 bg-craft-yellow text-foreground border border-foreground/80 paper-shadow rotate-[1.5deg] font-craft-title text-lg uppercase tracking-wider">
              Results & Impact
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {caseStudyData.results.map((result, index) => {
              const rot = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[2deg]";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{ rotate: rot }}
                  className="craft-panel p-6 bg-white border border-foreground/60 paper-shadow-lg text-center flex flex-col justify-between"
                >
                  <div className="font-craft-title text-2xl text-foreground mb-2">
                    {result.metric}
                  </div>
                  <div className="font-craft-sketch text-xs text-muted-foreground">{result.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Producer KPIs */}
          {caseStudyData.producerMetrics && (
            <div className="mt-16">
              <div className="text-center mb-10">
                <div className="inline-block px-5 py-1 bg-craft-blue text-white border border-foreground/80 paper-shadow rotate-[-1deg] font-craft-title text-lg uppercase tracking-wider">
                  Production KPIs
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {caseStudyData.producerMetrics.map((metric, index) => {
                  const rot = index % 2 === 0 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]";
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      style={{ rotate: rot }}
                      className="craft-panel p-6 bg-white border border-foreground/60 paper-shadow-lg text-center flex flex-col justify-between"
                    >
                      <div className="font-craft-title text-2xl text-foreground mb-2">
                        {metric.metric}
                      </div>
                      <div className="font-craft-sketch text-[10px] text-muted-foreground uppercase">{metric.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        {/* Back Button dossier tab at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Button
            onClick={onBack}
            className="bg-white hover:bg-white/80 text-foreground border border-foreground/60 paper-shadow rounded-none py-3 px-8 text-sm font-craft-title uppercase tracking-wider flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Main Board
          </Button>
        </motion.div>

      </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-white border border-foreground/60 text-foreground paper-shadow z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage}
                alt="Dossier Screenshot View"
                className="max-w-full max-h-full object-contain border border-foreground/60 bg-white shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
