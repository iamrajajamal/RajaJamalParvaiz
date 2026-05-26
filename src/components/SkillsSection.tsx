import { motion } from "motion/react";
import {
  Gamepad2,
  Smartphone,
  Wrench,
  Palette,
  Network,
  ClipboardList,
  CheckSquare,
  Cpu
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      icon: Gamepad2,
      title: "Game Development",
      color: "bg-craft-pink/60 text-[#232321] border-foreground/50",
      ratingColor: "bg-craft-red",
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
      color: "bg-[#fef9c3] text-[#5c4613] border-foreground/50",
      ratingColor: "bg-craft-yellow",
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
      color: "bg-[#dbeafe] text-[#1e40af] border-foreground/50",
      ratingColor: "bg-craft-blue",
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
      color: "bg-[#dcfce7] text-[#166534] border-foreground/50",
      ratingColor: "bg-craft-green",
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
      title: "Tools & DevOps",
      color: "bg-craft-purple/40 text-foreground border-foreground/50",
      ratingColor: "bg-[#8b5cf6]",
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
      color: "bg-[#fae8ff] text-[#6b21a8] border-foreground/50",
      ratingColor: "bg-[#d946ef]",
      skills: [
        "Graphic Design",
        "Photoshop",
        "Illustrator",
        "Web Development",
      ],
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#faf8f5] to-[#f5f2eb] border-b border-foreground/10 overflow-hidden paper-grain">
      {/* Background paper decoration */}
      <div className="absolute top-1/4 right-[-100px] w-80 h-80 bg-craft-tan rounded-full opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-craft-yellow text-foreground border border-foreground/80 paper-shadow rotate-[1.5deg] font-craft-title text-2xl uppercase tracking-wider">
            Tech Tree
          </div>
          <p className="text-sm font-craft-sketch text-muted-foreground mt-3">Skills & Expertise Inventory</p>
        </motion.div>

        {/* Skill Tree Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const rotation = (categoryIndex % 2 === 0 ? "-1deg" : "1.5deg");
            const tapeColor = categoryIndex % 4 === 0 ? "tape-coral" : categoryIndex % 4 === 1 ? "tape-yellow" : categoryIndex % 4 === 2 ? "tape-blue" : "tape-green";
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                style={{ rotate: rotation }}
                className="relative"
              >
                {/* Main Card */}
                <div
                  className={`craft-panel h-full p-6 flex flex-col justify-between ${category.color}`}
                >
                  {/* Tape Accent */}
                  <div className={`craft-tape w-16 h-4 top-[-8px] left-[20px] rotate-[-12deg] pointer-events-none ${tapeColor}`} />

                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="p-2.5 bg-white border border-foreground/75 paper-shadow rounded-none flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="font-craft-title text-lg text-foreground tracking-tight">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List as handwritten checkmarks */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: skillIndex * 0.04,
                          }}
                          className="flex items-center gap-2"
                        >
                          <div className="flex items-center gap-2.5 w-full p-2 bg-white/60 border border-foreground/40 rounded-sm paper-shadow">
                            <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                            <span className="font-craft-body text-sm text-foreground/80 font-medium">
                              {skill}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Level Badge styled as star boxes */}
                  <div className="mt-6 pt-4 border-t border-dashed border-foreground/20">
                    <div className="flex items-center justify-between">
                      <span className="font-craft-sketch text-[10px] text-muted-foreground uppercase">Proficiency</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-6 h-3 border border-foreground/40 rounded-[1px] shadow-[1px_1px_2px_rgba(0,0,0,0.06)] ${
                              i < 4
                                ? category.ratingColor
                                : "bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Connection Sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <div className="relative group">
            {/* Highlighter loop */}
            <div className="absolute inset-0 bg-craft-yellow/20 rounded-full blur-md opacity-70" />
            
            <div className="relative p-5 bg-white border border-foreground/65 paper-shadow-lg rotate-[-4deg] flex items-center justify-center max-w-[150px] mx-auto text-center">
              {/* Staple on centerpiece */}
              <div className="craft-staple top-[-3px] left-1/2 -translate-x-1/2" />
              <div>
                <Cpu className="w-8 h-8 text-primary mx-auto mb-1" />
                <span className="font-craft-sketch text-[10px] text-foreground font-bold">SYSTEMS INTEGRATION</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
