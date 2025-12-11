import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X, Home, User, Code, Briefcase, FolderOpen, Trophy, Mail, ArrowLeft, Zap, GitBranch } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  onNavigate?: (section: string) => void;
  showSections?: boolean;
}

export function Navigation({ onNavigate, showSections = true }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur-lg opacity-50" />
                <div className="relative w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">RJ</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Raja Jamal Parvaiz
                </div>
                <div className="text-xs text-slate-400">Game Developer/Producer</div>
                {!showSections && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onNavigate) onNavigate("home");
                    }}
                    className="text-xs text-cyan-400 mt-1 cursor-pointer hover:text-cyan-300 flex items-center gap-1 transition-colors"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Back to Home
                  </div>
                )}
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            {showSections && (
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.section}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => scrollToSection(item.section)}
                    className="group relative px-4 py-2 rounded-lg text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-sm">
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </span>
                    <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </motion.button>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-6 py-2 rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            {showSections && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-300 transition-all"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
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
          <div className="bg-slate-950/98 backdrop-blur-xl border-b border-cyan-400/20 shadow-lg shadow-cyan-500/10">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.section)}
                  className="w-full group relative flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-cyan-300 transition-all"
                >
                  <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <item.icon className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-cyan-400">→</span>
                  </div>
                </motion.button>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/25"
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
