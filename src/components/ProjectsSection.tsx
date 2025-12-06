import { motion } from "motion/react";
import { ExternalLink, Users, Smartphone, Globe, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProjectsSectionProps {
  onViewCaseStudy: (project: any) => void;
}

export function ProjectsSection({ onViewCaseStudy }: ProjectsSectionProps) {
  const projects = [
    {
      title: "Clown Town",
      subtitle: "Multiplayer Brawler Game",
      description:
        "High-energy multiplayer brawler with real-time PvP combat, custom physics, and dynamic matchmaking systems.",
      image: "https://images.unsplash.com/photo-1559571239-79ad463fde14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdWx0aXBsYXllciUyMGdhbWUlMjBiYXR0bGV8ZW58MXx8fHwxNzY0NzcyOTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Multiplayer", "Real-time", "Mobile"],
      tech: ["Unity", "C#", "Nakama", "Photon"],
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Spades With Friends",
      subtitle: "Multiplayer Card Game",
      description:
        "Classic spades card game with online multiplayer, friend systems, tournaments, and real-time voice chat.",
      image: "https://images.unsplash.com/photo-1605420801008-456056f2c700?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkJTIwZ2FtZSUyMHBva2VyfGVufDF8fHx8MTc2NDY5MDQzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Multiplayer", "Social", "Cross-platform"],
      tech: ["Unity", "Mirror", "PlayFab", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Pocket Shop",
      subtitle: "Garage + Racing Simulation",
      description:
        "Build and customize your dream garage, race cars, and manage a automotive business empire.",
      image: "https://images.unsplash.com/photo-1757513915189-3268463ae2be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBnYXJhZ2UlMjBjYXJzfGVufDF8fHx8MTc2NDc3Mjk5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Simulation", "Mobile", "3D"],
      tech: ["Unity", "C#", "Addressables", "IAP"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "DubbGames",
      subtitle: "Full Web Gaming Platform",
      description:
        "Complete WebGL gaming platform with user accounts, leaderboards, achievements, and social features.",
      image: "https://images.unsplash.com/photo-1549455532-62f7ab74d527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZ2FtaW5nfGVufDF8fHx8MTc2NDc3Mjk5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["WebGL", "Platform", "Full-Stack"],
      tech: ["Unity", "WebGL", "React", "Node.js"],
      color: "from-cyan-500 to-purple-500",
    },
    {
      title: "Alive AR",
      subtitle: "5v5 Multiplayer AR Shooter",
      description:
        "Innovative AR FPS with real-world mapping, team-based combat, and location-based multiplayer.",
      image: "https://images.unsplash.com/photo-1545579833-02a4c62797f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ3NjMzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["AR", "Multiplayer", "FPS"],
      tech: ["Unity", "ARFoundation", "Photon", "GPS"],
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Space Hole",
      subtitle: "Arcade Game",
      description:
        "Fast-paced arcade game with physics-based gameplay, procedural levels, and addictive mechanics.",
      image: "https://images.unsplash.com/photo-1500185497267-d635f9c5e90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMGdhbGF4eSUyMHN0YXJzfGVufDF8fHx8MTc2NDc0NDMyMnww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Arcade", "Mobile", "Casual"],
      tech: ["Unity", "C#", "Physics", "Procedural"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
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
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400">Game Library</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

              {/* Card */}
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-cyan-400/50 group-hover:transform group-hover:scale-[1.02]">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                  
                  {/* Hover Play Button */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="p-4 rounded-full bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/50">
                      <Eye className="w-8 h-8 text-cyan-400" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cyan-400">{project.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-700/30">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => onViewCaseStudy(project)}
                    className="w-full bg-slate-800/50 hover:bg-cyan-500/20 border border-slate-700/50 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all"
                    variant="outline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
