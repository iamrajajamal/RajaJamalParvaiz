import { useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Crown, Code, Users, Rocket, Star, Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(lineRef.current, {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      role: "Lead Game Developer",
      company: "Eplanet Global",
      period: "2024 – Present",
      icon: Crown,
      color: "bg-[#fef9c3] text-[#5c4613] border-foreground/40",
      ratingColor: "bg-[#eab308]",
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
      color: "bg-craft-pink/50 text-[#232321] border-foreground/40",
      ratingColor: "bg-[#f43f5e]",
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
      color: "bg-[#dbeafe] text-[#1e40af] border-foreground/40",
      ratingColor: "bg-[#3b82f6]",
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
      color: "bg-[#dcfce7] text-[#166534] border-foreground/40",
      ratingColor: "bg-[#22c55e]",
      engineering: [
        "Integrated AR/VR SDKs (Oculus/ARCore)",
        "Real-time multiplayer synchronization",
        "Third-party API integrations",
      ],
      management: ["Mentored junior developers", "Assisted in hiring process"],
      level: "Master",
    },
    {
      role: "Unity Developer",
      company: "Various Studios",
      period: "2019 – 2021",
      icon: Users,
      color: "bg-craft-purple/30 text-foreground border-foreground/40",
      ratingColor: "bg-[#a855f7]",
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
      color: "bg-[#faf8f5] text-foreground border-foreground/40",
      ratingColor: "bg-foreground/50",
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
    <section className="relative py-28 bg-gradient-to-b from-[#faf8f5] to-[#f5f2eb] border-t border-b border-foreground/10 overflow-hidden paper-grain">
      {/* Background craft paper card */}
      <div className="absolute top-10 left-[10%] w-60 h-60 bg-craft-tan rounded-full opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-6 py-2 bg-craft-blue text-white border border-foreground/80 paper-shadow rotate-[-1deg] font-craft-title text-2xl uppercase tracking-wider">
            Quest Progression
          </div>
          <p className="text-sm font-craft-sketch text-muted-foreground mt-3">My Career Journey & Missions</p>
        </motion.div>

        {/* Timeline */}
        <div ref={containerRef} className="relative">
          {/* Hand-drawn center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] hidden md:block">
            {/* Background faint dashed line */}
            <svg className="absolute inset-0 w-full h-full opacity-15" preserveAspectRatio="none" fill="none">
              <line
                x1="2"
                y1="0"
                x2="2"
                y2="100%"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="8 6"
                className="text-foreground"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            {/* Foreground active dashed line */}
            <div 
              ref={lineRef} 
              className="absolute inset-0 w-full overflow-hidden origin-top"
              style={{ height: "0%" }}
            >
              <svg className="w-full h-full" preserveAspectRatio="none" fill="none">
                <line
                  x1="2"
                  y1="0"
                  x2="2"
                  y2="100%"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8 6"
                  className="text-foreground"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const rotation = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1deg]";
              const tapeColor = index % 4 === 0 ? "tape-yellow" : index % 4 === 1 ? "tape-coral" : index % 4 === 2 ? "tape-blue" : "tape-green";
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card wrapper */}
                  <div className="w-full md:w-5/12 group">
                    
                    {/* Index Card Cardboard Container */}
                    <div 
                      style={{ rotate: rotation }}
                      className={`craft-panel relative p-6 bg-white border border-foreground/60 paper-shadow-lg transition-all ${exp.color}`}
                    >
                      {/* Pinned tape accent */}
                      <div className={`craft-tape w-16 h-4 top-[-8px] left-[15px] pointer-events-none ${tapeColor}`} style={{ transform: "rotate(-8deg)" }} />

                      {/* Level Stamp Badge */}
                      <div className="absolute -top-3.5 -right-3.5 rotate-[8deg]">
                        <div className="px-3 py-1 bg-white border border-foreground/60 text-[10px] font-craft-title uppercase tracking-wider paper-shadow">
                          {exp.level}
                        </div>
                      </div>

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-2.5 bg-white border border-foreground/60 rounded-none paper-shadow flex items-center justify-center">
                          <exp.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-craft-title text-lg text-foreground mb-0.5">{exp.role}</h3>
                          <p className="font-craft-body text-sm font-bold text-foreground/80">{exp.company}</p>
                          <p className="font-craft-sketch text-xs text-muted-foreground mt-0.5">
                            {exp.period}
                          </p>
                        </div>
                      </div>

                      {/* Engineering Skills */}
                      {exp.engineering && exp.engineering.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="font-craft-title text-xs uppercase tracking-wider text-foreground/80">
                              🛠️ Engineering Tasks
                            </span>
                          </div>
                          <div className="space-y-1 ml-1">
                            {exp.engineering.map((item, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-[10px] text-foreground mt-1">•</span>
                                <span className="font-craft-body text-xs text-foreground/85">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Management Skills */}
                      {exp.management && exp.management.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="font-craft-title text-xs uppercase tracking-wider text-foreground/80">
                              📋 Management Tasks
                            </span>
                          </div>
                          <div className="space-y-1 ml-1">
                            {exp.management.map((item, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-[10px] text-foreground mt-1">•</span>
                                <span className="font-craft-body text-xs text-foreground/85">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* XP Bar Shading */}
                      <div className="mt-4 pt-3 border-t border-dashed border-foreground/20">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-craft-sketch text-[10px] text-muted-foreground uppercase">
                            XP EARNED
                          </span>
                          <span className="font-craft-title text-xs text-foreground/80 font-bold">
                            {1000 * (experiences.length - index)} XP
                          </span>
                        </div>
                        <div className="h-2.5 bg-white border border-foreground/60 rounded-none overflow-hidden shadow-[inset_1px_1px_3px_rgba(0,0,0,0.06)]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 + index * 0.05 }}
                            className={`h-full ${exp.ratingColor}`}
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Center Node Bullet (Desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 items-center justify-center z-10">
                    <div className="w-6 h-6 bg-white border border-foreground/60 rounded-full flex items-center justify-center paper-shadow">
                      <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Achievement Stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-20"
        >
          <div className="relative group">
            {/* Highlighter shadow */}
            <div className="absolute inset-0 bg-craft-yellow/20 rounded-sm blur-md opacity-60 pointer-events-none" />
            
            <div className="relative bg-white border border-foreground/60 paper-shadow-lg rotate-[1.5deg] px-8 py-4 text-center max-w-lg">
              <div className="craft-tape w-16 h-4 top-[-8px] left-[35%] pointer-events-none tape-coral" style={{ transform: "rotate(-2deg)" }} />
              <p className="font-craft-title text-lg text-foreground uppercase tracking-wide">
                🏆 Quest Complete: 6+ Years of Excellence
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
