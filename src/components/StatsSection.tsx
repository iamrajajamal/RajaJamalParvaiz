import { motion } from "motion/react";
import { Gamepad2, Trophy, Globe, Users, Rocket, Star } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Gamepad2,
      value: "20+",
      label: "Games Built",
      color: "bg-craft-pink/50 text-[#232321] border-foreground/40",
      barColor: "bg-[#f43f5e]",
    },
    {
      icon: Trophy,
      value: "6+",
      label: "Years Experience",
      color: "bg-[#fef9c3] text-[#5c4613] border-foreground/40",
      barColor: "bg-[#eab308]",
    },
    {
      icon: Globe,
      value: "PC & Web",
      label: "Platforms Supported",
      color: "bg-[#dbeafe] text-[#1e40af] border-foreground/40",
      barColor: "bg-[#3b82f6]",
    },
    {
      icon: Users,
      value: "10+",
      label: "Developers Led",
      color: "bg-[#dcfce7] text-[#166534] border-foreground/40",
      barColor: "bg-[#22c55e]",
    },
    {
      icon: Rocket,
      value: "Store Ready",
      label: "Mobile & Console Builds",
      color: "bg-craft-purple/30 text-foreground border-foreground/40",
      barColor: "bg-[#a855f7]",
    },
    {
      icon: Star,
      value: "Expert",
      label: "Unity & Multiplayer",
      color: "bg-[#faf8f5] text-foreground border-foreground/40",
      barColor: "bg-foreground/50",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f5f2eb] to-[#faf8f5] border-b border-foreground/10 overflow-hidden notebook-grid paper-grain">
      {/* Background craft shapes */}
      <div className="absolute top-1/3 left-[-80px] w-64 h-64 bg-craft-tan rounded-full opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-craft-yellow text-foreground border border-foreground/80 paper-shadow rotate-[1.2deg] font-craft-title text-2xl uppercase tracking-wider">
            Achievements
          </div>
          <p className="text-sm font-craft-sketch text-muted-foreground mt-3">Game Development Statistics & Milestones</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const rotation = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1deg]";
            const tapeColor = index % 4 === 0 ? "tape-coral" : index % 4 === 1 ? "tape-yellow" : index % 4 === 2 ? "tape-blue" : "tape-green";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                style={{ rotate: rotation }}
                className="relative"
              >
                {/* Achievement Cardboard Card */}
                <div className={`craft-panel p-6 flex flex-col justify-between bg-white border border-foreground/60 paper-shadow-lg h-full ${stat.color}`}>
                  
                  {/* Tape Accent */}
                  <div className={`craft-tape w-12 h-3.5 top-[-8px] left-[15px] pointer-events-none ${tapeColor}`} style={{ transform: "rotate(-10deg)" }} />

                  {/* Stamp Seal Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2 py-0.5 border border-foreground/60 text-[8px] font-craft-title uppercase bg-white paper-shadow">
                      COMPLETED
                    </span>
                  </div>

                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-10 h-10 bg-white border border-foreground/60 rounded-none paper-shadow flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-foreground" />
                    </div>

                    {/* Value block */}
                    <div>
                      <div className="text-3xl font-craft-title tracking-tight text-foreground mb-1">
                        <span className="px-1.5 py-0.5 bg-white border border-foreground/40 paper-shadow">
                          {stat.value}
                        </span>
                      </div>
                      <div className="font-craft-body text-sm font-bold text-foreground/80 mt-2">
                        {stat.label}
                      </div>
                    </div>
                  </div>

                  {/* Shaded Progress Bar */}
                  <div className="w-full pt-4 mt-4 border-t border-dashed border-foreground/20">
                    <div className="h-2 bg-white border border-foreground/60 rounded-none overflow-hidden shadow-[inset_1px_1px_3px_rgba(0,0,0,0.06)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + index * 0.05,
                          ease: "easeOut",
                        }}
                        className={`h-full ${stat.barColor}`}
                      />
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-craft-sketch text-[9px] text-muted-foreground uppercase">LEVEL MAX</span>
                      <span className="font-craft-title text-[10px] text-foreground font-bold">100%</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Total XP Cardboard Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block group">
            {/* Highlighter backing */}
            <div className="absolute inset-0 bg-craft-yellow/20 rounded-md blur-md opacity-60" />
            
            <div className="relative bg-white border border-foreground/60 paper-shadow-lg rotate-[-1deg] px-12 py-6 max-w-md mx-auto">
              <div className="craft-tape w-16 h-4 top-[-8px] left-[35%] pointer-events-none tape-yellow" style={{ transform: "rotate(-2deg)" }} />

              <div className="font-craft-sketch text-xs text-muted-foreground mb-1">TOTAL XP ACCUMULATED</div>
              <div className="font-craft-title text-3xl md:text-4xl text-foreground tracking-wide mb-1">
                999,999 XP
              </div>
              <div className="font-craft-sketch text-xs text-foreground font-bold border border-foreground/30 px-2 py-0.5 inline-block bg-white mt-2">
                Master Developer Rank
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
