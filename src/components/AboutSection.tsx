import { motion } from "motion/react";
import { Award, Code2, Zap, Users } from "lucide-react";

export function AboutSection() {
  const badges = [
    { icon: Code2, label: "Unity Expert", color: "bg-craft-blue/10 text-craft-blue border-craft-blue/30" },
    { icon: Zap, label: "Multiplayer Pro", color: "bg-craft-yellow/10 text-[#5c4613] border-craft-yellow/40" },
    { icon: Users, label: "Team Leader", color: "bg-craft-green/10 text-craft-green border-craft-green/30" },
    { icon: Award, label: "6+ Years XP", color: "bg-craft-red/10 text-craft-red border-craft-red/30" },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f5f2eb] to-[#faf8f5] border-t border-b border-foreground/10 overflow-hidden paper-grain">
      {/* Background craft paper decoration */}
      <div className="absolute top-[-50px] right-[50px] w-64 h-64 bg-craft-tan rounded-full opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-craft-blue text-white border border-foreground/80 paper-shadow rotate-[-1deg] font-craft-title text-2xl uppercase tracking-wider">
            About Me
          </div>
        </motion.div>

        {/* Notebook ruled sheet pinned to card desk */}
        <motion.div
          initial={{ opacity: 0, rotate: 1, y: 30 }}
          whileInView={{ opacity: 1, rotate: -0.5, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-white border border-foreground/80 paper-shadow-lg rounded-sm p-8 md:p-12 overflow-hidden notebook-ruled"
        >
          {/* Staple details at the top */}
          <div className="craft-staple top-2 left-10 rotate-[2deg]" />
          <div className="craft-staple top-2 right-12 rotate-[-5deg]" />

          {/* Notebook red margin line */}
          <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-red-400 opacity-40" />

          {/* Bio text */}
          <div className="pl-6 md:pl-10 relative z-10 text-[#232321] font-craft-body text-lg md:text-xl md:leading-[2.2rem] space-y-6">
            <p>
              Lead/Senior Game Developer with{" "}
              <span className="px-1.5 py-0.5 bg-craft-yellow/20 font-bold rounded-sm border border-craft-yellow/30">
                6+ years of experience
              </span>{" "}
              building Mobile, PC, WebGL, Console and AR/VR games. Expert in{" "}
              <span className="px-1.5 py-0.5 bg-craft-red/10 text-craft-red font-bold rounded-sm border border-craft-red/20">
                Unity3D
              </span>
              , multiplayer systems (Photon/Nakama/Mirror), gameplay programming,
              optimization, and team leadership.
            </p>
            <p>
              Passionate about creating immersive gaming experiences that push technical boundaries while
              delivering exceptional player engagement. Combining robust engineering practices with product management expertise to deliver projects on time.
            </p>
          </div>

          {/* Achievement Badges in collage style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 pl-6 md:pl-10 relative z-10">
            {badges.map((badge, index) => {
              const rotationDegs = index % 2 === 0 ? "-3deg" : "3deg";
              const tapeColor = index % 4 === 0 ? "tape-blue" : index % 4 === 1 ? "tape-yellow" : index % 4 === 2 ? "tape-green" : "tape-coral";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: "0deg", y: -4 }}
                  style={{ rotate: rotationDegs }}
                  className={`craft-panel p-4 flex flex-col items-center gap-3 bg-white border border-foreground/70 paper-shadow transition-all ${badge.color}`}
                >
                  {/* Decorative tape on badge */}
                  <div className={`craft-tape w-12 h-4 top-[-10px] left-[30%] pointer-events-none ${tapeColor}`} style={{ transform: "rotate(-10deg)" }} />
                  
                  <div className="p-3 bg-[#faf9f6] border border-foreground/50 rounded-none flex items-center justify-center">
                    <badge.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <span className="font-craft-title text-xs md:text-sm text-center text-foreground uppercase tracking-tight">
                    {badge.label}
                  </span>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
