import { motion } from "motion/react";
import { Award, Code2, Zap, Users } from "lucide-react";

export function AboutSection() {
  const badges = [
    { icon: Code2, label: "Unity Expert", color: "from-cyan-500 to-blue-500" },
    { icon: Zap, label: "Multiplayer Pro", color: "from-purple-500 to-pink-500" },
    { icon: Users, label: "Team Leader", color: "from-blue-500 to-cyan-500" },
    { icon: Award, label: "6+ Years XP", color: "from-pink-500 to-purple-500" },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity" />
          
          {/* Card Content */}
          <div className="relative bg-slate-900/90 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-10 overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-cyan-400/50 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-purple-400/50 rounded-br-2xl" />

            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Lead/Senior Game Developer with{" "}
              <span className="text-cyan-400">6+ years of experience</span>{" "}
              building Mobile, PC, WebGL, Console and AR/VR games. Expert in{" "}
              <span className="text-purple-400">Unity3D</span>, multiplayer
              systems (Photon/Nakama/Mirror), gameplay programming,
              optimization, and team leadership. Passionate about creating
              immersive gaming experiences that push technical boundaries while
              delivering exceptional player engagement.
            </p>

            {/* Achievement Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group/badge"
                >
                  {/* Badge Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} rounded-xl blur opacity-0 group-hover/badge:opacity-50 transition-opacity`} />
                  
                  {/* Badge Content */}
                  <div className="relative flex flex-col items-center gap-3 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 group-hover/badge:border-cyan-400/50 transition-all">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${badge.color}`}>
                      <badge.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-center text-slate-300 group-hover/badge:text-cyan-300 transition-colors">
                      {badge.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
