import { motion } from "motion/react";
import {
  Gamepad2,
  Users,
  Lightbulb,
  Search,
  Code,
  LayoutDashboard,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Full Cycle Production",
      description:
        "From initial concept to global launch. I manage the entire lifecycle, ensuring vision alignment, timely delivery, and quality assurance.",
      icon: Gamepad2,
      color: "from-cyan-500 to-blue-500",
      skills: ["Roadmap Planning", "Milestone Delivery", "Live Ops"],
    },
    {
      title: "Team Leadership",
      description:
        "Building and managing high-performing teams. I bridge the gap between artists, designers, and developers to foster collaboration.",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      skills: ["Hiring", "Mentorship", "Conflict Resolution"],
    },
    {
      title: "Technical Consultation",
      description:
        "Expert advice on game architecture, engine selection, and scalability. I help prevent technical debt before it starts.",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      skills: ["Architecture", "Optimization", "Code Reviews"],
    },
    {
      title: "Game Design Analysis",
      description:
        "Deconstructing game loops and mechanics to improve player retention and monetization strategies.",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      skills: ["GDD Creation", "Economy Balancing", "UX Review"],
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden" id="services">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Guild Services
          </h2>
          <p className="text-xl text-slate-400">What I Offer</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-cyan-400/50 rounded-2xl p-8 transition-all hover:-translate-y-1">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} shadow-lg shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Skills/Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-slate-800 border border-slate-700 text-slate-300 group-hover:border-cyan-400/30 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
