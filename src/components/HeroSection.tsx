import { useState, useEffect, useRef } from "react";
import { Download, Play, Gamepad2, Monitor } from "lucide-react";
import { Button } from "./ui/button";
import MyPictureCutout from "../assets/mypicture/mypicture_paper_cutout.png";
import MyPictureStanding from "../assets/mypicture/mypicture_developer_standing.png";
import MyPictureCoding from "../assets/mypicture/mypicture_developer_coding.png";
import { PaperPlaneCanvas } from "./PaperPlaneCanvas";
import { useMatterPhysics } from "../hooks/useMatterPhysics";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [prevActivePhoto, setPrevActivePhoto] = useState(0);
  const [exitingCardId, setExitingCardId] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [cw, setCw] = useState(320);
  const [ch, setCh] = useState(400);

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const isMd = window.innerWidth >= 768;
      setIsDesktop(isMd);
      setCw(isMd ? 320 : 280);
      setCh(isMd ? 400 : 360);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // GSAP ScrollTrigger for pinning
  useEffect(() => {
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=120%", // Pin duration
        pin: true,
        pinSpacing: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          let newIndex = 0;
          if (progress > 0.33 && progress <= 0.68) {
            newIndex = 1;
          } else if (progress > 0.68) {
            newIndex = 2;
          }
          setActivePhoto(newIndex);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isDesktop]);

  const photos = [
    {
      id: 0,
      src: MyPictureCutout,
      caption: "Jamal - Developer Portrait",
      tag: "Self Portrait",
      rotation: -3,
      color: "border-craft-red",
    },
    {
      id: 1,
      src: MyPictureStanding,
      caption: "Jamal - Level Design & Production",
      tag: "Producer Mode",
      rotation: 4,
      color: "border-craft-blue",
    },
    {
      id: 2,
      src: MyPictureCoding,
      caption: "Jamal - Systems Architecture",
      tag: "Writing Code",
      rotation: -5,
      color: "border-craft-green",
    },
  ];

  // Compute anchors for Matter.js physics
  const anchors = photos.map((photo, index) => {
    const positionIndex = (index - activePhoto + photos.length) % photos.length;
    const ax = cw / 2 + positionIndex * 15;
    const ay = ch / 2 + positionIndex * -12;
    const baseRotation = photo.rotation * (Math.PI / 180);
    const behindRotation = (index % 2 === 0 ? 1 : -1) * (positionIndex * 6) * (Math.PI / 180);
    const aa = positionIndex === 0 ? baseRotation : behindRotation;
    return { x: ax, y: ay, angle: aa };
  });

  useMatterPhysics(cardsContainerRef, {
    itemSelector: ".portrait-card",
    anchors: anchors,
    disableCollision: true,
  });

  const handlePhotoClick = (index: number) => {
    setPrevActivePhoto(activePhoto);
    setExitingCardId(activePhoto);

    if (index === activePhoto) {
      setActivePhoto((prev) => (prev + 1) % photos.length);
    } else {
      setActivePhoto(index);
    }

    setTimeout(() => {
      setExitingCardId(null);
    }, 300);
  };

  const techTags = [
    {
      name: "Unity 3D",
      color: "bg-craft-red/10 text-craft-red border-craft-red/30",
    },
    {
      name: "Multiplayer Systems",
      color: "bg-craft-blue/10 text-craft-blue border-craft-blue/30",
    },
    {
      name: "Project Management",
      color: "bg-craft-brown/10 text-craft-brown border-craft-brown/30",
    },
    {
      name: "AR/VR",
      color: "bg-craft-green/10 text-craft-green border-craft-green/30",
    },
    {
      name: "Mobile & PC Games",
      color: "bg-craft-yellow/10 text-foreground border-craft-yellow/40",
    },
    {
      name: "WebGL",
      color: "bg-craft-red/15 text-craft-red border-craft-red/30",
    },
    {
      name: "Console Games",
      color: "bg-craft-blue/15 text-craft-blue border-craft-blue/30",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#cde7f7] to-[#a4d4f2] pt-28 pb-20 paper-grain"
    >
      <PaperPlaneCanvas />
      {/* Paper Sun Cutout */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute top-16 right-16 w-24 h-24 bg-craft-yellow rounded-full paper-shadow z-0 border border-foreground/10 flex items-center justify-center pointer-events-none"
      >
        <div className="absolute inset-[-6px] border-2 border-dashed border-craft-yellow/50 rounded-full" />
      </motion.div>

      {/* Floating Paper Clouds */}
      <motion.div
        animate={{ x: ["-20vw", "110vw"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 left-0 w-32 h-10 bg-white/95 rounded-full paper-shadow-lg z-0 pointer-events-none"
        style={{ borderRadius: "50px" }}
      />
      <motion.div
        animate={{ x: ["110vw", "-20vw"] }}
        transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
        className="absolute top-48 left-0 w-44 h-12 bg-white/90 rounded-full paper-shadow z-0 pointer-events-none"
        style={{ borderRadius: "60px" }}
      />
      <motion.div
        animate={{ x: ["-30vw", "120vw"] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          delay: 15,
        }}
        className="absolute top-14 left-0 w-28 h-9 bg-white/95 rounded-full paper-shadow-lg z-0 pointer-events-none"
        style={{ borderRadius: "40px" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Developer Info */}
        <div className="lg:col-span-7 text-left space-y-8">
          {/* Tagline Badge styled as a strip of torn paper/tape */}
          <motion.div
            initial={{ opacity: 0, rotate: -2, y: 15 }}
            animate={{ opacity: 1, rotate: -1.5, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block relative px-5 py-2 bg-craft-yellow border border-foreground/80 paper-shadow text-foreground font-craft-sketch text-sm uppercase tracking-wider md:text-base"
          >
            {/* Left tape piece */}
            <div className="absolute left-[-15px] top-[-5px] w-8 h-4 bg-craft-blue/30 border-l border-r border-dashed border-black/10 rotate-[-25deg] pointer-events-none" />
            Lead Game Programmer & Producer
          </motion.div>

          {/* Name Header */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-craft-title text-5xl md:text-7xl lg:text-8xl text-foreground leading-[1.1]"
            >
              Raja Jamal <br />
              <span className="relative inline-block text-primary">
                Parvaiz
                {/* Handdrawn highlight loop under name */}
                <svg
                  className="absolute bottom-[-10px] left-0 w-full h-4 text-craft-yellow"
                  fill="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M 0 5 Q 50 1 100 5 Q 50 9 0 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-craft-body text-lg md:text-xl text-[#3d424d] max-w-xl"
            >
              Creating immersive interactive worlds. Specialized in core
              gameplay, production, and scalable systems.
            </motion.p>
          </div>

          {/* Draggable Tech Stack tags: interactive craft badge board */}
          <div className="space-y-3">
            <span className="font-craft-sketch text-xs text-muted-foreground uppercase tracking-widest block">
              📌 Grab and toss these skills:
            </span>
            <div className="flex flex-wrap gap-2.5 max-w-xl">
              {techTags.map((tech, index) => (
                <motion.div
                  key={index}
                  drag
                  dragConstraints={{
                    left: -100,
                    right: 100,
                    top: -50,
                    bottom: 50,
                  }}
                  dragElastic={0.1}
                  whileDrag={{ scale: 1.1, rotate: 5, zIndex: 50 }}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    rotate: (Math.random() - 0.5) * 6,
                  }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className={`cursor-grab active:cursor-grabbing px-4 py-2 border border-foreground/60 rounded-lg font-craft-body text-sm font-medium paper-shadow hover:bg-white/80 transition-all ${tech.color}`}
                >
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 items-center pt-4"
          >
            <Button
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="craft-btn font-craft-title px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/95 flex items-center gap-2"
            >
              <Play className="w-5 h-5 fill-current" />
              View Projects
            </Button>

            <Button
              asChild
              className="craft-btn font-craft-title px-8 py-6 text-base bg-white text-foreground hover:bg-[#f5f2eb] flex items-center gap-2"
            >
              <a
                href="/assets/CV/RajaJamalParvaiz-GameDeveloper.pdf"
                download="RajaJamalParvaiz-GameDeveloper.pdf"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Interactive Polaroid Photo Stack */}
        <div className="lg:col-span-5 flex justify-center py-8 lg:py-0">
          <div 
            ref={cardsContainerRef}
            className="relative w-[280px] h-[360px] md:w-[320px] md:h-[400px]"
          >
            {/* Instruction Sticky Note */}
            <div className="absolute top-[-40px] right-[-30px] z-40 bg-[#fef08a] border border-foreground/50 p-2 rounded paper-shadow rotate-[12deg] max-w-[120px] text-center hidden md:block">
              <span className="font-craft-sketch text-[10px] text-black font-bold uppercase">
                👇 Click photo to flip stack!
              </span>
            </div>

            {/* Render the polaroid photos with custom Z-Index switching */}
            {photos.map((photo, index) => {
              const isActive = activePhoto === index;
              // Simple formula to layout background photos rotated
              const positionIndex =
                (index - activePhoto + photos.length) % photos.length;
              const zIndex = photos.length - positionIndex;
              const isBehind = positionIndex > 0;
              const isExiting = index === prevActivePhoto && !isActive;
              const renderZIndex =
                exitingCardId === photo.id ? photos.length + 2 : zIndex;

              return (
                <motion.div
                  key={photo.id}
                  style={{ zIndex: renderZIndex }}
                  animate={!isDesktop ? {
                    x: isExiting
                      ? [0, 240, positionIndex * 15]
                      : isBehind
                        ? positionIndex * 15
                        : 0,
                    y: isExiting
                      ? [0, -16, positionIndex * -12]
                      : isBehind
                        ? positionIndex * -12
                        : 0,
                    rotate: isExiting
                      ? [
                          photo.rotation,
                          12,
                          (index % 2 === 0 ? 1 : -1) * (positionIndex * 6),
                        ]
                      : isBehind
                        ? (index % 2 === 0 ? 1 : -1) * (positionIndex * 6)
                        : photo.rotation,
                    scale: isBehind ? 0.95 - positionIndex * 0.04 : 1,
                  } : undefined}
                  whileHover={!isBehind && !isDesktop ? { scale: 1.02 } : undefined}
                  transition={
                    isExiting
                      ? {
                          duration: 0.65,
                          ease: "easeInOut",
                          times: [0, 0.4, 1],
                        }
                      : {
                          type: "spring",
                          stiffness: 260,
                          damping: 25,
                        }
                  }
                  onClick={() => handlePhotoClick(index)}
                  className="absolute inset-0 cursor-pointer craft-polaroid w-full h-full flex flex-col justify-between portrait-card"
                >
                  {/* Washi Tape at the top of active image */}
                  {!isBehind && (
                    <div
                      className={`craft-tape craft-tape-top ${
                        index === 0
                          ? "tape-coral"
                          : index === 1
                            ? "tape-blue"
                            : "tape-green"
                      }`}
                    />
                  )}

                  {/* Image cutout container */}
                  <div className="w-full h-[78%] overflow-hidden border border-foreground bg-stone-100 relative">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover grayscale-[15%] contrast-110"
                    />

                    {/* Small category tag tape */}
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-craft-yellow text-[10px] font-craft-sketch border border-foreground/50 shadow-[1px_1px_2px_rgba(0,0,0,0.1)] uppercase">
                      {photo.tag}
                    </div>
                  </div>

                  {/* Polaroid caption with custom handwriting feel */}
                  <div className="pt-3 pb-1 text-center">
                    <p className="font-craft-sketch text-xs md:text-sm text-foreground font-bold tracking-tight">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mini Decorative Game Floating cutouts */}
      <div className="absolute bottom-16 left-6 hidden md:flex items-center gap-2 bg-white border border-foreground/60 px-3 py-1.5 paper-shadow rotate-[-4deg] z-10">
        <Gamepad2 className="w-4 h-4 text-primary" />
        <span className="font-craft-sketch text-xs">READY PLAYER ONE</span>
      </div>

      <div className="absolute top-28 right-12 hidden md:flex items-center gap-2 bg-white border border-foreground/60 px-3 py-1.5 paper-shadow rotate-[6deg] z-10">
        <Monitor className="w-4 h-4 text-accent" />
        <span className="font-craft-sketch text-xs">VIM MODE ACTIVE</span>
      </div>

      {/* Torn Green Grass Cutout Separator at the Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-craft-green paper-torn-top z-20 pointer-events-none" />
    </section>
  );
}
