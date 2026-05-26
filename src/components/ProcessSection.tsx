import { motion } from "motion/react";
import { Brain, Calendar, Code, Bug, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      title: "Concept & GDD",
      description:
        "Evaluating ideas, creating design documents, and defining core loops.",
      icon: Brain,
      color: "bg-craft-pink/50 text-[#232321] border-foreground/40",
      tagBg: "bg-craft-red text-white",
    },
    {
      title: "Planning",
      description:
        "Roadmaps, task estimation, team assignment, and architecture design.",
      icon: Calendar,
      color: "bg-[#fef9c3] text-[#5c4613] border-foreground/40",
      tagBg: "bg-craft-yellow text-foreground",
    },
    {
      title: "Development",
      description:
        "Agile sprints, daily standups, code reviews, and rapid iteration.",
      icon: Code,
      color: "bg-[#dbeafe] text-[#1e40af] border-foreground/40",
      tagBg: "bg-craft-blue text-white",
    },
    {
      title: "QA & Polish",
      description:
        "Bug tracking, widespread testing, optimization, and game feel tuning.",
      icon: Bug,
      color: "bg-[#dcfce7] text-[#166534] border-foreground/40",
      tagBg: "bg-craft-green text-white",
    },
    {
      title: "Live Ops",
      description:
        "Deployment, analytics monitoring, user feedback loops, and updates.",
      icon: Rocket,
      color: "bg-craft-purple/30 text-foreground border-foreground/40",
      tagBg: "bg-[#8b5cf6] text-white",
    },
  ];

  return (
    <>
      <section
        className="relative py-28 bg-gradient-to-b from-[#faf8f5] to-[#f5f2eb] border-b border-foreground/10 overflow-hidden paper-grain"
        id="process"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <div className="inline-block px-6 py-2 bg-craft-red text-white border border-foreground/80 paper-shadow rotate-[1deg] font-craft-title text-2xl uppercase tracking-wider">
              Production Pipeline
            </div>
            <p className="text-sm font-craft-sketch text-muted-foreground mt-3">My Workflow</p>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="relative mt-12 md:mt-24">
            {/* Desktop timeline line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 border-t-2 border-dashed border-foreground/20 z-0" />

            {/* Mobile timeline line */}
            <div className="md:hidden absolute top-0 bottom-10 left-12 w-0.5 border-l-2 border-dashed border-foreground/20 z-0" />

            {/* Steps Container */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-start justify-between relative z-10">
              {steps.map((step, index) => {
                const rotation = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]";
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex flex-col md:items-center items-start md:text-center w-full md:max-w-[200px]"
                  >
                    {/* Level Tag (Sticker Style) */}
                    <div className="md:absolute md:top-[-45px] mb-3 md:mb-0">
                      <span className={`px-2 py-0.5 border border-foreground/60 shadow-[1px_1px_2px_rgba(0,0,0,0.06)] text-[9px] font-craft-title uppercase font-bold tracking-tight rounded-sm ${step.tagBg}`}>
                        STAGE 0{index + 1}
                      </span>
                    </div>

                    {/* Round Badge Node */}
                    <div className="relative mb-5 flex items-center justify-center bg-white border border-foreground/60 rounded-full w-20 h-20 paper-shadow group hover:scale-105 transition-transform duration-300">
                      {/* Pins on the nodes */}
                      <div className="absolute top-0 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-foreground/50 shadow-[1px_1px_2px_rgba(0,0,0,0.15)]" />
                      <step.icon className="w-8 h-8 text-foreground" />
                    </div>

                    {/* Text Container (Index Card Style) */}
                    <div
                      style={{ rotate: rotation }}
                      className={`craft-panel p-4 w-full bg-white border border-foreground/60 paper-shadow-lg ${step.color}`}
                    >
                      <h3 className="font-craft-title text-base text-foreground mb-1 uppercase tracking-tight">
                        {step.title}
                      </h3>
                      <p className="font-craft-body text-xs text-foreground/80 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Post-Workflow Phase */}
      <section className="py-28 bg-gradient-to-b from-[#f5f2eb] to-[#faf8f5] border-b border-foreground/10 overflow-hidden paper-grain">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-5 py-1.5 bg-craft-yellow text-foreground border border-foreground/80 paper-shadow rotate-[-1deg] font-craft-title text-xl uppercase tracking-wider mb-6">
            Post-Workflow Checklist
          </div>

          <p className="font-craft-body text-lg text-foreground/80 max-w-3xl mx-auto mb-16 leading-relaxed">
            Once the core production pipeline is complete, I shift into a
            high-precision polish phase — optimizing performance, refining UX,
            enhancing interaction, and preparing for global release. Every
            detail matters, and this stage transforms a working build into a
            professional, publish-ready product.
          </p>

          {/* Sticky Notes Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Note 1 - QA */}
            <motion.div
              initial={{ opacity: 0, rotate: -2, y: 15 }}
              whileInView={{ opacity: 1, rotate: -1.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative p-8 bg-[#fef9c3]/60 border border-foreground/60 paper-shadow-lg flex flex-col justify-between items-center text-center text-[#5c4613] h-64"
            >
              <div className="craft-tape w-12 h-4 top-[-8px] left-[35%] pointer-events-none tape-yellow" style={{ transform: "rotate(-2deg)" }} />
              <div className="mt-4">
                <h3 className="font-craft-title text-lg mb-3">
                  ✨ QA & Polish
                </h3>
                <p className="font-craft-body text-sm text-[#5c4613]/90 leading-relaxed">
                  Bug fixing, refinements, UX tweaks, animation smoothing, and shader adjustments.
                </p>
              </div>
              <span className="font-craft-sketch text-[10px] text-[#5c4613]/70 mt-4">VERIFYING STABILITY</span>
            </motion.div>

            {/* Note 2 - Optimization */}
            <motion.div
              initial={{ opacity: 0, rotate: 1.5, y: 15 }}
              whileInView={{ opacity: 1, rotate: 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative p-8 bg-craft-pink/50 border border-foreground/60 paper-shadow-lg flex flex-col justify-between items-center text-center text-[#232321] h-64"
            >
              <div className="craft-tape w-12 h-4 top-[-8px] left-[35%] pointer-events-none tape-coral" style={{ transform: "rotate(3deg)" }} />
              <div className="mt-4">
                <h3 className="font-craft-title text-lg text-craft-red mb-3">
                  🚀 Performance
                </h3>
                <p className="font-craft-body text-sm text-[#232321]/90 leading-relaxed">
                  GPU/CPU efficiency, draw call batching, memory profiling, and mobile scaling.
                </p>
              </div>
              <span className="font-craft-sketch text-[10px] text-craft-red/80 mt-4">PROFILING MEMORY</span>
            </motion.div>

            {/* Note 3 - Release */}
            <motion.div
              initial={{ opacity: 0, rotate: -1.5, y: 15 }}
              whileInView={{ opacity: 1, rotate: -1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              className="relative p-8 bg-[#dbeafe] border border-foreground/60 paper-shadow-lg flex flex-col justify-between items-center text-center text-[#1e40af] h-64"
            >
              <div className="craft-tape w-12 h-4 top-[-8px] left-[35%] pointer-events-none tape-blue" style={{ transform: "rotate(-1deg)" }} />
              <div className="mt-4">
                <h3 className="font-craft-title text-lg text-[#1e40af] mb-3">
                  📦 Deployment
                </h3>
                <p className="font-craft-body text-sm text-[#1e40af]/90 leading-relaxed">
                  Build automation setup, Google Play / Apple App Store submissions, and live patching.
                </p>
              </div>
              <span className="font-craft-sketch text-[10px] text-[#1e40af]/80 mt-4">LAUNCHING GLOBALLY</span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
