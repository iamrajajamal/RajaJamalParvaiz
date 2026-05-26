import { motion } from "motion/react";
import {
  Gamepad2,
  Users,
  Lightbulb,
  Code,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Full Cycle Production",
      description:
        "From initial concept to global launch. I manage the entire lifecycle, ensuring vision alignment, timely delivery, and quality assurance.",
      icon: Gamepad2,
      color: "bg-[#dbeafe] text-[#1e40af] border-foreground/40",
      skills: ["Roadmap Planning", "Milestone Delivery", "Live Ops"],
    },
    {
      title: "Team Leadership",
      description:
        "Building and managing high-performing teams. I bridge the gap between artists, designers, and developers to foster collaboration.",
      icon: Users,
      color: "bg-[#dcfce7] text-[#166534] border-foreground/40",
      skills: ["Hiring", "Mentorship", "Conflict Resolution"],
    },
    {
      title: "Technical Consultation",
      description:
        "Expert advice on game architecture, engine selection, and scalability. I help prevent technical debt before it starts.",
      icon: Code,
      color: "bg-craft-pink/50 text-[#232321] border-foreground/40",
      skills: ["Architecture", "Optimization", "Code Reviews"],
    },
    {
      title: "Game Design Analysis",
      description:
        "Deconstructing game loops and mechanics to improve player retention and monetization strategies.",
      icon: Lightbulb,
      color: "bg-[#fef9c3] text-[#5c4613] border-foreground/40",
      skills: ["GDD Creation", "Economy Balancing", "UX Review"],
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#faf8f5] to-[#f5f2eb] border-t border-b border-foreground/10 overflow-hidden paper-grain" id="services">
      {/* Background craft shapes */}
      <div className="absolute bottom-[-100px] left-[5%] w-72 h-72 bg-craft-tan rounded-full opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-craft-blue text-white border border-foreground/80 paper-shadow rotate-[-1deg] font-craft-title text-2xl uppercase tracking-wider">
            Guild Services
          </div>
          <p className="text-sm font-craft-sketch text-muted-foreground mt-3">Professional Offerings</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const rot = index % 2 === 0 ? "rotate-[-1.2deg]" : "rotate-[1.2deg]";
            const tapeColor = index % 4 === 0 ? "tape-blue" : index % 4 === 1 ? "tape-green" : index % 4 === 2 ? "tape-coral" : "tape-yellow";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.02, rotate: "0deg" }}
                className={`relative ${rot}`}
              >
                {/* Index Card Design */}
                <div className={`craft-panel h-full p-8 flex flex-col justify-between border border-foreground/60 paper-shadow-lg ${service.color}`}>
                  {/* Decorative tape at the top center */}
                  <div className={`craft-tape w-12 h-4 top-[-8px] left-[45%] pointer-events-none ${tapeColor}`} style={{ transform: "rotate(-2deg)" }} />

                  <div>
                    <div className="flex items-start gap-5 mb-5">
                      {/* Icon container */}
                      <div className="p-3 bg-white border border-foreground/65 paper-shadow rounded-none shrink-0 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-foreground" />
                      </div>

                      {/* Header */}
                      <div>
                        <h3 className="font-craft-title text-xl text-foreground mb-1">
                          {service.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-foreground/20" />
                      </div>
                    </div>

                    <p className="font-craft-body text-base text-foreground/80 leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Skills/Tags as tiny ripped papers */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-dashed border-foreground/20">
                    {service.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 font-craft-body text-xs font-bold bg-white border border-foreground/35 shadow-[1px_1px_2px_rgba(0,0,0,0.05)] text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
