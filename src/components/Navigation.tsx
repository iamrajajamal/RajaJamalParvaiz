import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  Briefcase,
  FolderOpen,
  Trophy,
  Mail,
  ArrowLeft,
  Zap,
  GitBranch,
} from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  onNavigate?: (section: string) => void;
  showSections?: boolean;
}

const navItems = [
  { name: "Home", icon: Home, section: "hero" },
  { name: "About", icon: User, section: "about" },
  { name: "Skills", icon: Code, section: "skills" },
  { name: "Services", icon: Zap, section: "services" },
  { name: "Process", icon: GitBranch, section: "process" },
  { name: "Experience", icon: Briefcase, section: "experience" },
  { name: "Projects", icon: FolderOpen, section: "projects" },
  { name: "Stats", icon: Trophy, section: "stats" },
  { name: "Contact", icon: Mail, section: "contact" },
];

const getTapeColorClass = (index: number) => {
  const colors = ["tape-yellow", "tape-blue", "tape-coral", "tape-green"];
  return colors[index % colors.length];
};

export function Navigation({
  onNavigate,
  showSections = true,
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (!showSections) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar height + buffer
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        setActiveSection("contact");
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSections]);

  const scrollToSection = (section: string) => {
    setIsMobileMenuOpen(false);

    if (onNavigate) {
      onNavigate(section);
      return;
    }

    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`!fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-[#fbfbf9]/95 border-b-[1.2px] border-foreground/60 paper-shadow paper-grain"
            : "bg-transparent"
        }`}
      >
        {/* Decorative Tape on Header top right */}
        <div className="absolute right-10 top-0 w-24 h-6 tape-yellow rotate-3 opacity-90 pointer-events-none hidden md:block" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo representation as a small hand-cut polaroid */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex items-center gap-3 cursor-pointer relative"
              onClick={() => scrollToSection("hero")}
            >
              <div className="relative p-1.5 bg-white border border-foreground/50 paper-shadow rotate-[-2deg] rounded-sm">
                <img
                  src="/favicon.png"
                  alt="Logo"
                  className="w-8 h-8 object-cover rounded-none"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-craft-title text-lg text-foreground tracking-wide">
                  Jamal Parvaiz
                </div>
                <div className="text-xs font-craft-sketch text-muted-foreground">
                  Game Developer/Producer
                </div>
                {!showSections && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onNavigate) onNavigate("home");
                    }}
                    className="text-xs text-primary font-craft-sketch mt-1 cursor-pointer hover:underline flex items-center gap-1 transition-all"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Back to Home
                  </div>
                )}
              </div>
            </motion.div>

            {/* Desktop Navigation links */}
            {showSections && (
              <div className="hidden md:flex items-center gap-1.5">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.section;
                  return (
                    <motion.button
                      key={item.section}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.section)}
                      className={`group relative px-3 py-1.5 font-craft-body text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-foreground font-semibold"
                          : "text-foreground/75 hover:text-foreground"
                      }`}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        <item.icon className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${isActive ? "text-primary" : "text-foreground/60 group-hover:text-primary"}`} />
                        {item.name}
                      </span>
                      {/* Paper Washi Tape Highlight for active, or scribble for hover */}
                      <div
                        className={`absolute inset-0 rounded-sm transition-all duration-200 ${
                          isActive
                            ? `opacity-100 ${getTapeColorClass(index)} ${
                                index % 2 === 0 ? "rotate-[1.5deg]" : "rotate-[-1.5deg]"
                              } border-l border-r border-dashed border-foreground/15 shadow-sm scale-y-90 scale-x-[0.98]`
                            : "bg-craft-yellow/15 opacity-0 group-hover:opacity-100 group-hover:rotate-[-1deg] scale-y-75 scale-x-95"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </div>
            )}

            {/* Hire Me Custom Cutout Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contact")}
                className="craft-btn font-craft-title px-5 py-2 text-sm bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            {showSections && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 border border-foreground/45 bg-background text-foreground hover:bg-[#efeae0] transition-all paper-shadow"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {showSections && (
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-40 md:hidden overflow-hidden"
        >
          <div className="bg-[#fbfbf9]/95 border-b-[1.2px] border-foreground/60 paper-shadow-lg px-6 py-5 space-y-2.5 paper-grain">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.section;
              return (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.section)}
                  className={`w-full group relative flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all font-craft-body ${
                    isActive ? "text-primary font-semibold" : "text-foreground hover:text-primary"
                  }`}
                >
                  <div
                    className={`absolute inset-0 rounded-md transition-opacity ${
                      isActive
                        ? `${getTapeColorClass(index)} opacity-80 border-l border-r border-dashed border-foreground/10`
                        : "bg-craft-yellow/10 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <item.icon className="w-4 h-4 text-primary relative z-10" />
                  <span className="relative z-10 font-medium">{item.name}</span>
                  <span className={`ml-auto relative z-10 transition-all ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"} text-primary`}>→</span>
                </motion.button>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-3">
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full craft-btn font-craft-title py-3 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
