import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Play, 
  ExternalLink, 
  Gamepad2, 
  Cpu, 
  Network, 
  Layers, 
  Target, 
  Sparkles, 
  MessageSquare, 
  Smartphone, 
  Database,
  Search,
  Zap,
  Info
} from "lucide-react";
import { Button } from "./ui/button";

// Procedural tape peeling/tearing sound using Web Audio API
export const playTapeTearSound = () => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;

  try {
    const ctx = new AudioContext();
    const duration = 0.35; // 350ms zip tear sound
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const t = i / ctx.sampleRate;
      const noise = Math.random() * 2 - 1;
      // High-frequency friction pulses
      const friction = Math.sin(t * 120) * Math.sin(t * 800) > 0.3 ? 1.0 : 0.05;
      const crackle = Math.random() > 0.94 ? (Math.random() * 2 - 1) * 0.85 : 0;
      
      // Fade out envelope
      const env = Math.pow(1 - t / duration, 1.4) * (0.85 + 0.15 * Math.sin(t * 60));
      
      data[i] = (noise * 0.14 * friction + crackle * 0.22) * env;
    }

    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(3400, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(1400, ctx.currentTime + duration);
    filter.Q.value = 2.2;

    const highpass = ctx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 750;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.07, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration - 0.02);

    noiseNode.connect(highpass);
    highpass.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseNode.start();
  } catch (err) {
    // Ignore audio block issues
  }
};

// Procedural paper crinkle/pop sound when opening box/clicking hotspots
export const playCrinkleSound = () => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;

  try {
    const ctx = new AudioContext();
    const duration = 0.12; 
    const bufferSize = ctx.sampleRate * duration;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      const noise = Math.random() * 2 - 1;
      const crackle = Math.random() > 0.97 ? (Math.random() * 2 - 1) * 0.7 : 0;
      data[i] = noise * 0.1 + crackle;
    }

    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.value = 2400;

    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.03, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration - 0.01);

    noiseNode.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseNode.start();
  } catch (err) {
    // Ignore
  }
};

interface Hotspot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  z: number; // transform translateZ depth
  title: string;
  description: string;
  icon: any;
}

interface ProjectDioramaModalProps {
  project: any;
  isOpen: boolean;
  onClose: () => void;
  onViewCaseStudy: () => void;
}

export function ProjectDioramaModal({ project, isOpen, onClose, onViewCaseStudy }: ProjectDioramaModalProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Define diorama blueprints/hotspots based on the current project title
  const getProjectHotspots = (title: string): Hotspot[] => {
    switch (title) {
      case "Clown Town":
        return [
          {
            id: "mirror-net",
            x: 20,
            y: 40,
            z: 35,
            title: "Authoritative Mirror Networking",
            description: "Synchronized physics movement with lag compensation and server validation to ensure competitive fairness.",
            icon: Network
          },
          {
            id: "nakama-match",
            x: 75,
            y: 25,
            z: 50,
            title: "Nakama Lobby & Matchmaking",
            description: "Custom matchmaking matchmaking logic paired with secure session tickets and persistent leaderboards.",
            icon: Target
          },
          {
            id: "brawl-phys",
            x: 50,
            y: 65,
            z: 75,
            title: "Deterministic Physics Engine",
            description: "Custom collision boxes and forces governing asymmetrical combat logic between clowns.",
            icon: Gamepad2
          }
        ];
      case "Spades With Friends":
        return [
          {
            id: "spades-cards",
            x: 50,
            y: 70,
            z: 80,
            title: "Fanned Player Deck",
            description: "Hand-held deck state tracked securely with client-side renderers, communicating player bids directly to server.",
            icon: Layers
          },
          {
            id: "mirror-turn",
            x: 30,
            y: 35,
            z: 40,
            title: "Turn State Machine",
            description: "Authoritative turn validation preventing cheat actions and ensuring timing consistency for bids.",
            icon: Cpu
          },
          {
            id: "spades-chat",
            x: 80,
            y: 45,
            z: 55,
            title: "Lobby Chat Hub",
            description: "Real-time communication, emoji responses, and match notifications integrated with Mirror servers.",
            icon: MessageSquare
          }
        ];
      case "Pocket Shop":
        return [
          {
            id: "drift-phys",
            x: 35,
            y: 72,
            z: 75,
            title: "Drift Physics System",
            description: "Responsive drifting formulas modeling tire friction, speed ratios, and sliding force curves for authentic mobile racing.",
            icon: Gamepad2
          },
          {
            id: "auction-sync",
            x: 72,
            y: 35,
            z: 45,
            title: "Real-Time Auctions",
            description: "Live bidding lobby using Nakama sockets to manage timers and prevent race-condition purchase requests.",
            icon: Database
          },
          {
            id: "garage-deps",
            x: 18,
            y: 30,
            z: 30,
            title: "Garage Upgrades Matrix",
            description: "ScriptableObject-linked modules mapping fuel, tire racks, and body kit values directly to in-game statistics.",
            icon: Cpu
          }
        ];
      case "DubbGames":
        return [
          {
            id: "react-bridge",
            x: 50,
            y: 25,
            z: 35,
            title: "React-Unity WebGL Bridge",
            description: "Low-latency JSON messaging channel between the React frontend page and the WebGL Unity canvas.",
            icon: Network
          },
          {
            id: "slot-math",
            x: 25,
            y: 60,
            z: 60,
            title: "Authoritative RNG Engine",
            description: "Server-side slot reel results utilizing secure seed generation for verifiably fair reward payout grids.",
            icon: Cpu
          },
          {
            id: "multi-tables",
            x: 75,
            y: 65,
            z: 70,
            title: "Baccarat & Blackjack Tables",
            description: "4-player real-time syncing rooms managed via Nakama to distribute turn actions and table card states.",
            icon: Layers
          }
        ];
      case "Alive AR":
        return [
          {
            id: "ar-anchors",
            x: 50,
            y: 40,
            z: 40,
            title: "AR World Mapping & Anchors",
            description: "Point-cloud alignment maps utilizing ARCore and ARKit to establish a shared multiplayer coordinate system.",
            icon: Target
          },
          {
            id: "ar-gun",
            x: 25,
            y: 70,
            z: 80,
            title: "Raycast Shooting & Recoil",
            description: "Real-time laser sight trajectories projected into physical world colliders with instant hit detection feedback.",
            icon: Gamepad2
          },
          {
            id: "playfab-auth",
            x: 80,
            y: 30,
            z: 30,
            title: "PlayFab Progression Hub",
            description: "Saves player weapons, stats, unlocked items, and dynamic GPS-based session details.",
            icon: Database
          }
        ];
      case "Dalcal":
        return [
          {
            id: "word-validator",
            x: 50,
            y: 65,
            z: 70,
            title: "Fast Dictionary Validator",
            description: "Trie-based search algorithm matching player submissions instantly against a comprehensive local dictionary.",
            icon: Cpu
          },
          {
            id: "diff-balancer",
            x: 25,
            y: 35,
            z: 45,
            title: "Adaptive Game Director",
            description: "Monitors winning streaks and time-to-solve rates to scale board sizes and challenge patterns on the fly.",
            icon: Target
          },
          {
            id: "dalcal-net",
            x: 78,
            y: 38,
            z: 35,
            title: "Friend Lobby & Invites",
            description: "Real-time matchmaking tickets allowing quick user invites and live scorecard tracking.",
            icon: Network
          }
        ];
      case "Nine No Draw":
        return [
          {
            id: "domino-board",
            x: 50,
            y: 50,
            z: 60,
            title: "Double-End Board Validator",
            description: "Maintains a structured list of open endpoints, validating domino placements for value match correctness.",
            icon: Layers
          },
          {
            id: "domino-shuffle",
            x: 22,
            y: 30,
            z: 40,
            title: "Authoritative Tiling Deck",
            description: "Secure server-side card shuffling ensuring zero client manipulation and accurate hand distribution.",
            icon: Cpu
          },
          {
            id: "pass-play",
            x: 75,
            y: 72,
            z: 75,
            title: "Local Pass & Play",
            description: "Decoupled state management system supporting hot-seat mobile gaming when network connectivity is absent.",
            icon: Smartphone
          }
        ];
      default:
        return [];
    }
  };

  const hotspots = getProjectHotspots(project?.title || "");

  // Mouse tilt logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateX = -((mouseY - rect.height / 2) / rect.height) * 22; // max tilt 22 deg
    const rotateY = ((mouseX - rect.width / 2) / rect.width) * 22;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleClose = () => {
    playTapeTearSound();
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 350);
  };

  const handleHotspotClick = (h: Hotspot) => {
    playCrinkleSound();
    setActiveHotspot(h);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      playCrinkleSound();
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
          className="relative w-full max-w-4xl bg-craft-tan p-1.5 border-2 border-foreground/90 paper-shadow-2xl flex flex-col md:flex-row overflow-hidden select-none paper-grain"
        >
          {/* Staple details around the borders to look like a physical package */}
          <div className="craft-staple top-2 left-6 rotate-[-4deg]" />
          <div className="craft-staple top-2 right-12 rotate-[3deg]" />
          <div className="craft-staple bottom-2 left-16 rotate-[2deg]" />

          {/* Peeling Tape close button on top right */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-40 group flex flex-col items-center"
            aria-label="Close"
          >
            <div className="relative font-craft-sketch text-[10px] text-foreground bg-craft-yellow border border-foreground/60 px-4 py-1.5 rotate-[-5deg] paper-shadow group-hover:rotate-[-8deg] group-hover:scale-105 active:translate-y-0.5 transition-all">
              {/* Torn end design of tape */}
              <div className="absolute top-0 bottom-0 left-[-4px] w-2 bg-craft-yellow border-l border-foreground/60 flex flex-col justify-around overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-black/15 rotate-45 transform -translate-x-1" />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <X className="w-3 h-3 stroke-[2.5]" />
                <span className="font-bold uppercase tracking-wider">CLOSE [ESC]</span>
              </div>
              {/* Peeling tape visual effect */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </button>

          {/* LEFT: Diorama 3D Space */}
          <div className="w-full md:w-3/5 p-6 flex flex-col justify-between items-center relative border-b md:border-b-0 md:border-r border-dashed border-foreground/20 min-h-[420px] md:min-h-[500px]">
            {/* Instruction sketch */}
            <div className="absolute top-4 left-6 pointer-events-none">
              <span className="font-craft-sketch text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                <Search className="w-3 h-3" /> Hover to rotate diorama • Click pins to inspect
              </span>
            </div>

            {/* 3D Diorama Stage Container */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="w-full flex-1 flex items-center justify-center cursor-crosshair perspective-[1000px] mt-8"
            >
              <div
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformStyle: "preserve-3d",
                  transition: tilt.x === 0 && tilt.y === 0 ? "transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)" : "none",
                }}
                className="relative w-full aspect-video max-w-[420px] bg-[#dfd7bf] border-2 border-foreground/80 paper-shadow-lg overflow-hidden flex items-center justify-center preserve-3d"
              >
                {/* 1. Backdrop layer: Grid paper grid, sketch stars/clouds */}
                <div 
                  style={{ transform: "translateZ(-40px) scale(1.15)" }} 
                  className="absolute inset-0 bg-craft-tan border border-foreground/10 flex flex-col justify-between p-4 pointer-events-none"
                >
                  <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
                  {/* Decorative sketch lines */}
                  <div className="absolute top-4 left-10 w-8 h-8 rounded-full border border-dashed border-foreground/25" />
                  <div className="absolute top-6 right-16 w-12 h-6 border border-dashed border-foreground/20 rounded-full" />
                  <div className="absolute bottom-6 left-12 w-20 h-4 border border-dashed border-foreground/20 rounded-full" />
                </div>

                {/* 2. Midground structures and nodes */}
                <div 
                  style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d"
                >
                  {/* Connective bezier lines overlay sketched */}
                  <svg className="absolute inset-0 w-full h-full opacity-30 stroke-foreground stroke-2 stroke-dasharray pointer-events-none">
                    <line x1="20%" y1="40%" x2="50%" y2="65%" stroke="currentColor" strokeDasharray="4 4" />
                    <line x1="75%" y1="25%" x2="50%" y2="65%" stroke="currentColor" strokeDasharray="4 4" />
                  </svg>

                  {/* Diorama standee elements */}
                  {project?.title === "Clown Town" && (
                    <div className="w-[120px] h-[55px] border-2 border-foreground/60 bg-white/70 paper-shadow flex items-center justify-center rotate-[3deg] absolute top-[20%] left-[35%]">
                      <span className="font-craft-title text-[9px] uppercase font-bold text-foreground/75">Arena Platform</span>
                    </div>
                  )}
                  {project?.title === "Pocket Shop" && (
                    <div className="w-[110px] h-[65px] border-2 border-foreground/50 bg-white/60 paper-shadow flex flex-col justify-around p-1.5 absolute top-[18%] left-[40%]">
                      <div className="w-full h-1 bg-craft-yellow border border-foreground/30" />
                      <span className="font-craft-sketch text-[8px] font-bold text-center">Garage Blueprint</span>
                    </div>
                  )}
                </div>

                {/* 3. Foreground Standee Cutouts */}
                <div 
                  style={{ transform: "translateZ(65px)", transformStyle: "preserve-3d" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none preserve-3d"
                >
                  {/* Standee base shadows */}
                  <div className="absolute bottom-[20%] w-[180px] h-6 bg-black/10 rounded-full blur-sm" />

                  {/* Character/Focus cardboard cutout */}
                  <div className="w-[200px] aspect-[1.8] bg-white border border-foreground/70 p-3 paper-shadow-lg flex flex-col justify-between relative pointer-events-auto select-none rotate-[-1deg]">
                    <div className="absolute top-[-6px] left-[35%] w-12 h-3.5 bg-craft-yellow/80 border border-foreground/50 rotate-[-4deg] paper-shadow" />
                    <div className="w-full h-[65px] border border-foreground/30 bg-[#fbf9f4] relative overflow-hidden flex items-center justify-center">
                      <img 
                        src={project?.image} 
                        alt="Stage Image" 
                        className="w-full h-full object-cover filter contrast-[1.05] grayscale-[10%]"
                      />
                      <div className="absolute inset-0 bg-craft-tan/10 mix-blend-color-burn" />
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-craft-title text-[9px] uppercase tracking-wide font-bold">{project?.title} LEVEL</span>
                      <div className="px-1.5 py-0.5 bg-craft-green/10 text-craft-green border border-craft-green/30 font-craft-body text-[7px] font-bold uppercase rounded-sm">LIVE STAGE</div>
                    </div>
                  </div>
                </div>

                {/* 4. Interactive Hotspot Pins floating in 3D */}
                {hotspots.map((h) => {
                  const isActive = activeHotspot?.id === h.id;
                  return (
                    <button
                      key={h.id}
                      onClick={() => handleHotspotClick(h)}
                      style={{
                        left: `${h.x}%`,
                        top: `${h.y}%`,
                        transform: `translateZ(${h.z}px) translate(-50%, -50%)`,
                        transformStyle: "preserve-3d"
                      }}
                      className="absolute z-30 group flex items-center justify-center pointer-events-auto"
                    >
                      {/* Pulse ring */}
                      <span className="absolute inline-flex h-6 w-6 rounded-full bg-craft-yellow animate-ping opacity-60 pointer-events-none" />
                      
                      {/* Interactive Pin base */}
                      <div 
                        className={`w-5.5 h-5.5 rounded-none border border-foreground/80 flex items-center justify-center shadow-[1px_2px_4px_rgba(0,0,0,0.2)] transition-all ${
                          isActive 
                            ? "bg-primary text-white rotate-45 scale-110" 
                            : "bg-white text-foreground hover:bg-craft-yellow hover:scale-115 rotate-[-8deg]"
                        }`}
                      >
                        <h.icon className={`w-3 h-3 ${isActive ? "rotate-[-45deg]" : ""}`} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Cardboard Standee legs indicator */}
            <div className="w-2/3 h-8 bg-craft-tan border-t border-dashed border-foreground/20 flex justify-around items-center px-4">
              <div className="w-4 h-full bg-[#c9b78e] border-x border-foreground/30" />
              <div className="w-4 h-full bg-[#c9b78e] border-x border-foreground/30" />
            </div>
          </div>

          {/* RIGHT: Hotspot Details & Case Study CTA */}
          <div className="w-full md:w-2/5 p-6 flex flex-col justify-between min-h-[320px] md:min-h-[500px]">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-craft-sketch text-[10px] text-muted-foreground uppercase">Project Workbench</span>
                <span className="w-1.5 h-1.5 rounded-full bg-craft-green animate-pulse" />
              </div>
              <h2 className="font-craft-title text-2xl text-foreground uppercase tracking-tight mb-1">
                {project?.title}
              </h2>
              <p className="font-craft-sketch text-xs text-craft-blue font-semibold">{project?.subtitle}</p>

              {/* Dynamic instruction or active hotspot details */}
              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {activeHotspot ? (
                    <motion.div
                      key={activeHotspot.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white border border-foreground/60 p-4 paper-shadow relative"
                    >
                      {/* Staple decoration */}
                      <div className="craft-staple top-[-3px] left-8 rotate-[-12deg]" />
                      
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className="p-1.5 bg-craft-yellow/20 border border-craft-yellow/40">
                          <activeHotspot.icon className="w-4 h-4 text-foreground" />
                        </div>
                        <h4 className="font-craft-title text-xs text-foreground uppercase font-bold tracking-tight">
                          {activeHotspot.title}
                        </h4>
                      </div>
                      
                      <p className="font-craft-body text-xs text-foreground/80 leading-relaxed">
                        {activeHotspot.description}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-white/60 border border-foreground/35 border-dashed p-5 text-center flex flex-col items-center justify-center min-h-[140px]"
                    >
                      <Info className="w-7 h-7 text-muted-foreground mb-2" />
                      <p className="font-craft-body text-xs text-muted-foreground max-w-[200px] leading-normal">
                        Click on the floating yellow pin nodes inside the diorama model to inspect system architectures.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tech details card block */}
              <div className="mt-5 p-3.5 bg-craft-tan/30 border border-foreground/35 rounded-none">
                <span className="font-craft-sketch text-[9px] text-muted-foreground uppercase block mb-2">Architectural Tags</span>
                <div className="flex flex-wrap gap-1.5">
                  {project?.tech.map((t: string, idx: number) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 border border-foreground/20 font-craft-body text-[9px] font-bold bg-white text-foreground shadow-[1px_1px_1.5px_rgba(0,0,0,0.03)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Compressed cardboard button depress actions */}
            <div className="space-y-3.5 mt-8 md:mt-0">
              <Button
                onClick={onViewCaseStudy}
                className="w-full bg-craft-yellow hover:bg-[#ebd284] text-foreground border border-foreground/80 paper-shadow-lg active:translate-y-[4px] active:shadow-[1px_1px_2px_rgba(0,0,0,0.15)] rounded-none py-6 font-craft-title text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all transition-transform duration-100"
              >
                <ExternalLink className="w-4 h-4 stroke-[2]" />
                Explore Case Study Report
              </Button>
              
              <Button
                onClick={handleClose}
                className="w-full bg-white hover:bg-neutral-50 text-muted-foreground border border-foreground/60 paper-shadow active:translate-y-[3px] active:shadow-[1px_1px_1px_rgba(0,0,0,0.1)] rounded-none py-4 font-craft-sketch text-xs uppercase tracking-wide flex items-center justify-center gap-1 transition-all transition-transform duration-100"
              >
                Return to Library
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
