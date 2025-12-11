import { motion } from "motion/react";
import { Brain, Calendar, Code, Bug, Rocket, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      title: "Concept & GDD",
      description:
        "Evaluating ideas, creating design documents, and defining core loops.",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Planning",
      description:
        "Roadmaps, task estimation, team assignment, and architecture design.",
      icon: Calendar,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Development",
      description:
        "Agile sprints, daily standups, code reviews, and rapid iteration.",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "QA & Polish",
      description:
        "Bug tracking, widespread testing, optimization, and game feel tuning.",
      icon: Bug,
      color: "from-purple-500 to-violet-500",
    },
    {
      title: "Live Ops",
      description:
        "Deployment, analytics monitoring, user feedback loops, and updates.",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      className="relative py-24 bg-slate-900 overflow-hidden"
      id="process"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Production Pipeline
          </h2>
          <p className="text-xl text-slate-400">My Workflow</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Horizontal Timeline */}
        <div className="relative mt-20">
          {/* ENERGY TRACK */}
          <div className="absolute top-20 left-0 right-0 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0ff2,transparent,#0ff2)] bg-[length:200%_100%] animate-[lineFlow_3s_linear_infinite]" />
          </div>

          {/* HORIZONTAL SCROLLER */}
          <div className="flex gap-20 overflow-x-auto pb-10 snap-x no-scrollbar md:justify-between">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex flex-col items-center min-w-[200px] snap-center"
              >
                {/* CONNECTING LINE BETWEEN NODES */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-10 left-[120px] w-[140px] h-[2px] bg-cyan-500/20 md:block hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse opacity-60" />
                  </div>
                )}

                {/* NODE WRAPPER */}
                <div className="relative mb-6 group">
                  {/* Pulsing Glow */}
                  <div className="absolute -inset-4 rounded-full opacity-40 blur-xl bg-cyan-400/20 group-hover:opacity-70 transition-all animate-[pulseGlow_2s_infinite]" />

                  {/* HEXAGON */}
                  <div
                    className="relative w-24 h-24 bg-slate-900 border border-slate-700 group-hover:border-cyan-400 z-10 flex items-center justify-center transition-colors duration-300 shadow-2xl"
                    style={{
                      clipPath:
                        "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                    }}
                  >
                    <step.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* LEVEL BADGE */}
                  <div className="absolute -top-4 -right-4">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${step.color} blur-sm opacity-50`}
                      />
                      <div className="relative bg-slate-950 border border-slate-600 px-2 py-1">
                        <span className="text-[10px] font-bold text-white uppercase">
                          Lvl {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -bottom-14 -translate-x-1/2 bg-slate-800 border border-cyan-400/40 text-slate-200 text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none whitespace-nowrap"></div>
                </div>

                {/* TEXT */}
                <div className="text-center max-w-[180px] px-2">
                  <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
  <section className="py-24 bg-slate-950 border-t border-slate-800">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold mb-6">
        What Happens After My Workflow?
      </h2>

      <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-16">
        Once the core production pipeline is complete, I shift into a
        high-precision polish phase — optimizing performance, refining UX,
        enhancing interaction, and preparing for global release. Every detail
        matters, and this stage transforms a working build into a professional,
        publish-ready product.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl hover:border-cyan-400 transition">
          <h3 className="text-xl text-white font-bold mb-4">
            ✨ Final QA & Polishing
          </h3>
          <p className="text-slate-400 text-sm">
            Bug fixing, refinements, UX tweaks, animation smoothing, shader
            adjustments.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl hover:border-purple-400 transition">
          <h3 className="text-xl text-white font-bold mb-4">
            🚀 Performance Optimization
          </h3>
          <p className="text-slate-400 text-sm">
            GPU/CPU efficiency, batching, memory optimization, mobile tuning.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl hover:border-pink-400 transition">
          <h3 className="text-xl text-white font-bold mb-4">
            📦 Release & Deployment
          </h3>
          <p className="text-slate-400 text-sm">
            Build pipeline setup, CI/CD, Play Store / App Store publishing,
            patch workflow.
          </p>
        </div>
      </div>
    </div>
  </section>;
}
