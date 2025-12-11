import { motion } from "motion/react";
import {
  Gamepad2,
  Globe,
  Smartphone,
  Wrench,
  Palette,
  Network,
  Cpu,
  Database,
  ClipboardList,
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Gamepad2,
      title: "Game Development",
      color: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-400/30",
      skills: [
        "Unity3D",
        "C#",
        "Gameplay Programming",
        "Mechanic Design",
        "Optimization",
        "AI Systems",
        "Addressables",
      ],
    },
    {
      icon: ClipboardList,
      title: "Production & Management",
      color: "from-green-500 to-emerald-600",
      borderColor: "border-green-400/30",
      skills: [
        "JIRA & Confluence",
        "Agile/Scrum Leadership",
        "Sprint Planning",
        "Game Design Documents",
        "Team Management",
        "Product Roadmap",
      ],
    },
    {
      icon: Network,
      title: "Multiplayer Systems",
      color: "from-purple-500 to-pink-600",
      borderColor: "border-purple-400/30",
      skills: [
        "Photon Engine",
        "Nakama",
        "Mirror Networking",
        "Real-Time Multiplayer",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile & Web",
      color: "from-blue-500 to-cyan-600",
      borderColor: "border-blue-400/30",
      skills: [
        "Android/iOS Publishing",
        "WebGL",
        "PlayFab",
        "Firebase",
        "ARCore/ARKit",
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "from-pink-500 to-purple-600",
      borderColor: "border-pink-400/30",
      skills: [
        "Unity",
        "Unreal Engine",
        "Visual Studio",
        "Docker",
        "Git",
      ],
    },
    {
      icon: Palette,
      title: "Additional Skills",
      color: "from-cyan-500 to-purple-600",
      borderColor: "border-cyan-400/30",
      skills: [
        "Graphic Design",
        "Photoshop",
        "Illustrator",
        "Web Development",
      ],
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Tech Tree
          </h2>
          <p className="text-xl text-slate-400">Skills & Expertise</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skill Tree Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

              {/* Card */}
              <div
                className={`relative h-full bg-slate-900/80 backdrop-blur-xl border ${category.borderColor} rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:border-opacity-60`}
              >
                {/* Corner Accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 blur-2xl`}
                />

                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${category.color} shadow-lg`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      className="group/skill flex items-center gap-2"
                    >
                      {/* Skill Node */}
                      <div className="flex items-center gap-3 w-full p-3 rounded-lg bg-slate-800/40 border border-slate-700/30 group-hover/skill:border-cyan-400/40 transition-all">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 group-hover/skill:shadow-[0_0_10px_rgba(34,211,238,0.6)] transition-shadow" />
                        <span className="text-sm text-slate-300 group-hover/skill:text-cyan-300 transition-colors">
                          {skill}
                        </span>
                      </div>

                      {/* Connection Line (for visual effect) */}
                      {skillIndex < category.skills.length - 1 && (
                        <div className="absolute left-[30px] w-0.5 h-2 bg-gradient-to-b from-slate-700/50 to-transparent" />
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Level Badge */}
                <div className="mt-6 pt-4 border-t border-slate-700/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">LEVEL</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-8 h-1.5 rounded-full ${
                            i < 4
                              ? `bg-gradient-to-r ${category.color}`
                              : "bg-slate-700/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Connection Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative p-6 rounded-full bg-slate-900 border-2 border-cyan-400/30">
              <Cpu className="w-12 h-12 text-cyan-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
