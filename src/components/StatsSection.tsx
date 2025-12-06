import { motion } from "motion/react";
import { Gamepad2, Trophy, Globe, Users, Rocket, Star } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      icon: Gamepad2,
      value: "20+",
      label: "Games Built",
      color: "from-cyan-500 to-blue-600",
      glow: "shadow-cyan-500/50",
    },
    {
      icon: Trophy,
      value: "6+",
      label: "Years Experience",
      color: "from-yellow-500 to-orange-600",
      glow: "shadow-yellow-500/50",
    },
    {
      icon: Globe,
      value: "Mobile, PC & Web",
      label: "Platforms",
      color: "from-purple-500 to-pink-600",
      glow: "shadow-purple-500/50",
    },
    {
      icon: Users,
      value: "Team",
      label: "Led & Managed",
      color: "from-green-500 to-teal-600",
      glow: "shadow-green-500/50",
    },
    {
      icon: Rocket,
      value: "Published",
      label: "Play Store & App Store",
      color: "from-blue-500 to-cyan-600",
      glow: "shadow-blue-500/50",
    },
    {
      icon: Star,
      value: "Expert",
      label: "Unity & Multiplayer",
      color: "from-pink-500 to-purple-600",
      glow: "shadow-pink-500/50",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Achievements
          </h2>
          <p className="text-xl text-slate-400">Stats & Milestones</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="relative group"
            >
              {/* Achievement Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />

              {/* Achievement Card */}
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all duration-300">
                {/* Corner Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl`} />
                <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${stat.color} opacity-10 blur-2xl`} />

                {/* Content */}
                <div className="relative p-8 flex flex-col items-center text-center space-y-4">
                  {/* Icon Badge */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg ${stat.glow} shadow-2xl`} />
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-r ${stat.color} shadow-2xl`}>
                      <stat.icon className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>

                  {/* Value Counter */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg text-slate-300">
                      {stat.label}
                    </div>
                  </motion.div>

                  {/* XP Bar */}
                  <div className="w-full pt-4">
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r ${stat.color} shadow-lg`}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-slate-500">LEVEL MAX</span>
                      <span className="text-xs text-cyan-400">100%</span>
                    </div>
                  </div>

                  {/* Achievement Unlocked Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="absolute top-4 right-4"
                  >
                    <div className="px-3 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/50 backdrop-blur-sm">
                      <span className="text-xs text-yellow-400">UNLOCKED</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total XP Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
            <div className="relative bg-slate-900 border-2 border-cyan-400 rounded-2xl px-12 py-6">
              <div className="text-sm text-slate-400 mb-2">TOTAL XP EARNED</div>
              <div className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                999,999 XP
              </div>
              <div className="text-sm text-slate-500 mt-2">Master Developer Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
