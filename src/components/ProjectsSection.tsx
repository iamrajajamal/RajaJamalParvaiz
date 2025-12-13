import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, Play, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import Project Images
import ClownTownImg from "../assets/portfolio/ClownTown/1.png";
import SpadesImg from "../assets/portfolio/SpadesWithFriends/1.png";
import PocketShopImg from "../assets/portfolio/PocketShop/1.png";
import DubbGamesImg from "../assets/portfolio/DubbGames/1.png";
import AliveARImg from "../assets/portfolio/AliveAR/1.png";

interface ProjectsSectionProps {
  onViewCaseStudy?: (project: any) => void;
}

export function ProjectsSection({ onViewCaseStudy }: ProjectsSectionProps) {
  const projects = [
    {
      title: "Clown Town",
      subtitle: "High-Energy Multiplayer Brawler",
      description:
        "Dive into chaotic physics-based combat with fast-paced PvP, custom hit detection, and dynamic matchmaking that keeps every battle thrilling.",
      image: ClownTownImg,
      tags: ["Multiplayer", "Real-Time", "Mobile", "Physics"],
      tech: ["Unity", "C#", "Nakama", "Photon"],
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Spades With Friends",
      subtitle: "Classic Multiplayer Card Game",
      description:
        "Enjoy competitive 2v2 Spades online with friend lobbies, private rooms, multiple rule sets, and real-time chat for seamless social gameplay.",
      image: SpadesImg,
      tags: ["Multiplayer", "Social", "Card Game", "Cross-Platform"],
      tech: ["Unity", "Mirror", "PlayFab", "Firebase"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Pocket Shop",
      subtitle: "Garage & Racing Simulation",
      description:
        "Build, upgrade, and manage your dream garage while racing in drift and drag competitions, with interconnected departments and a story-driven progression system.",
      image: PocketShopImg,
      tags: ["Simulation", "Racing", "3D", "Story-Driven"],
      tech: ["Unity", "C#", "Addressables", "IAP", "Nakama"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "DubbGames",
      subtitle: "Full Web-Based Gaming Platform",
      description:
        "A seamless WebGL platform featuring five casino-style games with multiplayer tables, backend-powered leaderboards, reward systems, and Unity–React integration.",
      image: DubbGamesImg,
      tags: ["WebGL", "Multiplayer", "Platform", "Full-Stack"],
      tech: ["Unity", "React", "Node.js", "WebGL", "Nakama"],
      color: "from-cyan-500 to-purple-500",
    },
    {
      title: "Alive AR",
      subtitle: "5v5 Augmented Reality Shooter",
      description:
        "Step into real-world maps with team-based AR combat, custom loadouts, and competitive multiplayer using ARCore/ARKit and Photon for seamless spatial gameplay.",
      image: AliveARImg,
      tags: ["AR", "Multiplayer", "FPS", "Team Combat"],
      tech: ["Unity", "ARFoundation", "Photon", "PlayFab", "GPS"],
      color: "from-green-500 to-teal-500",
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
          <h2 className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 py-4">
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
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${project.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              />

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
