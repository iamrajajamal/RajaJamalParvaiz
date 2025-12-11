import { motion } from "motion/react";
import { Crown, Code, Users, Rocket, Star, Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      role: "Lead Game Developer",
      company: "Eplanet Global",
      period: "2024 – Present",
      icon: Crown,
      color: "from-yellow-500 to-orange-500",
      engineering: [
        "Architected scalable multiplayer systems",
        "Optimized core gameplay loops in C#",
        "Implemented advanced AI behaviors",
      ],
      management: [
        "Led a team of 10+ developers & artists",
        "Managed sprint planning & JIRA backlogs",
        "Conducted code reviews & technical mentorship",
      ],
      level: "Epic",
    },
    {
      role: "Lead Game Developer",
      company: "Renderz",
      period: "2022 – 2024",
      icon: Star,
      color: "from-purple-500 to-pink-500",
      engineering: [
        "Developed 5+ Unity mobile titles",
        "WebGL performance optimization",
        "Custom shader development",
      ],
      management: [
        "Coordinated with QA & Design teams",
        "Defined technical roadmap & milestones",
        "Client communication & requirement analysis",
      ],
      level: "Legendary",
    },
    {
      role: "Unity WebGL Consultant",
      company: "The Talent Games",
      period: "2023 – Present",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
      engineering: [
        "WebGL build size reduction by 40%",
        "Cross-platform input systems",
        "Memory management optimization",
      ],
      management: [
        "Technical consultation for stakeholders",
        "Documentation of best practices",
      ],
      level: "Expert",
    },
    {
      role: "Senior Game Developer",
      company: "Techstirr",
      period: "2021 – 2022",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      engineering: [
        "Integrated AR/VR SDKs (Oculus/ARCore)",
        "Real-time multiplayer synchronization",
        "Third-party API integrations",
      ],
      management: [
        "Mentored junior developers",
        "Assisted in hiring process",
      ],
      level: "Master",
    },
    {
      role: "Unity Developer",
      company: "Various Studios",
      period: "2019 – 2021",
      icon: Users,
      color: "from-pink-500 to-purple-500",
      engineering: [
        "Gameplay mechanic implementation",
        "UI/UX programming",
        "Bug fixing & polishing",
      ],
      management: [],
      level: "Advanced",
    },
    {
      role: "Game Developer",
      company: "Early Career",
      period: "2018 – 2019",
      icon: Briefcase,
      color: "from-slate-500 to-slate-600",
      engineering: [
        "Unity fundamentals & C# scripting",
        "Prototyping game ideas",
        "Asset integration",
      ],
      management: [],
      level: "Beginner",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
      {/* Background Grid */}
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
            Quest Progression
          </h2>
          <p className="text-xl text-slate-400">Career Journey</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-slate-700 hidden md:block" />

          {/* Experience Nodes */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div className="w-full md:w-5/12 group">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`} />

                  {/* Card Content */}
                  <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-cyan-400/50 rounded-2xl p-6 transition-all">
                    {/* Level Badge */}
                    <div className="absolute -top-3 -right-3">
                      <div className={`px-4 py-1 rounded-full bg-gradient-to-r ${exp.color} text-xs text-white shadow-lg`}>
                        {exp.level}
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-cyan-400">{exp.company}</p>
                        <p className="text-sm text-slate-500 mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    {/* Engineering Skills */}
                    {exp.engineering && exp.engineering.length > 0 && (
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="w-4 h-4 text-cyan-400" />
                          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Engineering</span>
                        </div>
                        <div className="space-y-1 ml-2">
                          {exp.engineering.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-cyan-400" />
                              <span className="text-sm text-slate-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Management Skills */}
                    {exp.management && exp.management.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-purple-400" />
                          <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Management</span>
                        </div>
                        <div className="space-y-1 ml-2">
                          {exp.management.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1 h-1 rounded-full bg-purple-400" />
                              <span className="text-sm text-slate-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* XP Bar */}
                    <div className="mt-4 pt-4 border-t border-slate-700/30">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-slate-500">XP EARNED</span>
                        <span className="text-xs text-cyan-400">
                          {1000 * (experiences.length - index)} XP
                        </span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-full bg-gradient-to-r ${exp.color}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Node (Desktop only) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                  <div className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full blur opacity-50`} />
                  <div className="relative w-12 h-12 bg-slate-900 border-4 border-cyan-400 rounded-full flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color}`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Achievement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
            <div className="relative bg-slate-900 border-2 border-cyan-400 rounded-2xl px-8 py-4">
              <p className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Achievement Unlocked: 6+ Years of Excellence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
