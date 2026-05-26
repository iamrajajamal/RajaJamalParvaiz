import { motion } from "motion/react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Import Project Images
import ClownTownImg from "../assets/Portfolio-Compressed/ClownTown/Clown Town.webp";
import SpadesImg from "../assets/Portfolio-Compressed/SpadesWithFriends/Splash Screen.webp";
import PocketShopImg from "../assets/Portfolio-Compressed/PocketShop/Splash.webp";
import DubbGamesImg from "../assets/Portfolio-Compressed/DubbGame/Home.webp";
import AliveARImg from "../assets/Portfolio-Compressed/AliveAR/1.webp";
import DalcalImg from "../assets/Portfolio-Compressed/Dalcal/Splash.webp";
import NineNoDrawImg from "../assets/Portfolio-Compressed/NineNoDraw/Splash Screen.webp";

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
      color: "bg-craft-pink/50 text-[#232321] border-foreground/40",
    },
    {
      title: "Spades With Friends",
      subtitle: "Classic Multiplayer Card Game",
      description:
        "Enjoy competitive 2v2 Spades online with friend lobbies, private rooms, multiple rule sets, and real-time chat for seamless social gameplay.",
      image: SpadesImg,
      tags: ["Multiplayer", "Social", "Card Game", "Cross-Platform"],
      tech: ["Unity", "Mirror", "PlayFab", "Firebase"],
      color: "bg-[#dbeafe] text-[#1e40af] border-foreground/40",
    },
    {
      title: "Pocket Shop",
      subtitle: "Garage & Racing Simulation",
      description:
        "Build, upgrade, and manage your dream garage while racing in drift and drag competitions, with interconnected departments and a story-driven progression system.",
      image: PocketShopImg,
      tags: ["Simulation", "Racing", "3D", "Story-Driven"],
      tech: ["Unity", "C#", "Addressables", "IAP", "Nakama"],
      color: "bg-[#fef9c3] text-[#5c4613] border-foreground/40",
    },
    {
      title: "DubbGames",
      subtitle: "Full Web-Based Gaming Platform",
      description:
        "A seamless WebGL platform featuring five casino-style games with multiplayer tables, backend-powered leaderboards, reward systems, and Unity–React integration.",
      image: DubbGamesImg,
      tags: ["WebGL", "Multiplayer", "Platform", "Full-Stack"],
      tech: ["Unity", "React", "Node.js", "WebGL", "Nakama"],
      color: "bg-[#dcfce7] text-[#166534] border-foreground/40",
    },
    {
      title: "Alive AR",
      subtitle: "5v5 Augmented Reality Shooter",
      description:
        "Step into real-world maps with team-based AR combat, custom loadouts, and competitive multiplayer using ARCore/ARKit and Photon for seamless spatial gameplay.",
      image: AliveARImg,
      tags: ["AR", "Multiplayer", "FPS", "Team Combat"],
      tech: ["Unity", "ARFoundation", "Photon", "PlayFab", "GPS"],
      color: "bg-[#e0f2fe] text-[#0369a1] border-foreground/40",
    },
    {
      title: "Dalcal",
      subtitle: "Competitive Word Puzzle Game",
      description:
        "Form words in 3, 4, or 5-letter modes and challenge friends in real-time multiplayer matches with dynamic difficulty scaling.",
      image: DalcalImg,
      tags: ["Mobile", "Puzzle", "Multiplayer", "Social"],
      tech: ["Unity", "Nakama", "C#", "Socket.IO"],
      color: "bg-[#fffbeb] text-[#b45309] border-foreground/40",
    },
    {
      title: "Nine No Draw",
      subtitle: "Multiplayer Domino Tactics",
      description:
        "Play classic Dominoes in 1v1, 1v1v1, or 2v2 modes online, or enjoy local Pass & Play with friends. Strategic placement meets social fun.",
      image: NineNoDrawImg,
      tags: ["Mobile", "Board Game", "Multiplayer", "Dominoes"],
      tech: ["Unity", "Nakama", "Addressables", "Zenject"],
      color: "bg-craft-purple/30 text-foreground border-foreground/40",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f5f2eb] to-[#faf8f5] border-t border-b border-foreground/10 overflow-hidden paper-grain" id="projects">
      {/* Background craft decorations */}
      <div className="absolute top-[-50px] left-[15%] w-80 h-80 bg-craft-tan rounded-full opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-craft-blue text-white border border-foreground/80 paper-shadow rotate-[-1deg] font-craft-title text-2xl uppercase tracking-wider">
            Featured Projects
          </div>
          <p className="text-sm font-craft-sketch text-muted-foreground mt-3">My Game Library & Case Studies</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const rotation = index % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1deg]";
            const tapeColor = index % 4 === 0 ? "tape-coral" : index % 4 === 1 ? "tape-yellow" : index % 4 === 2 ? "tape-blue" : index % 4 === 3 ? "tape-green" : "tape-coral";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, rotate: "0deg" }}
                className={`relative ${rotation}`}
              >
                {/* Scrapbook Paper Card */}
                <div className={`craft-panel h-full p-5 bg-white border border-foreground/60 paper-shadow-lg flex flex-col justify-between ${project.color}`}>
                  
                  {/* Tape top anchor */}
                  <div className={`craft-tape w-16 h-4 top-[-8px] left-[15px] rotate-[-12deg] pointer-events-none ${tapeColor}`} />

                  <div>
                    {/* Game Cover Art Image Container */}
                    <div className="relative aspect-video border border-foreground/40 bg-white overflow-hidden rounded-[2px] shadow-[1px_1px_3px_rgba(0,0,0,0.06)] mb-4 group/img">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                      />
                      {/* Paper filter color overlay */}
                      <div className="absolute inset-0 bg-craft-tan/10 mix-blend-color-burn pointer-events-none" />

                      {/* Hover eye icon */}
                      <div className="absolute inset-0 flex items-center justify-center bg-background/30 opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <div className="p-3 bg-white border border-foreground/80 paper-shadow">
                          <Eye className="w-6 h-6 text-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="mb-3">
                      <h3 className="font-craft-title text-xl text-foreground mb-0.5 uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <p className="font-craft-sketch text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="font-craft-body text-xs text-foreground/80 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 border border-foreground/20 font-craft-body text-[10px] font-bold bg-white text-foreground rounded-sm shadow-[1px_1px_2px_rgba(0,0,0,0.04)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-3 mb-4 border-t border-dashed border-foreground/20">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="font-craft-sketch text-[10px] text-muted-foreground"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      onClick={() => onViewCaseStudy?.(project)}
                      className="w-full bg-white hover:bg-neutral-50 text-foreground border border-foreground/80 paper-shadow active:translate-y-0.5 active:shadow-[1px_1px_1px_rgba(0,0,0,0.1)] rounded-sm py-4 text-xs font-craft-title uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Case Study
                    </Button>
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
