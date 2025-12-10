import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, Send, Terminal, PhoneCallIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries((formData as any).entries());

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      toast.error("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/rajajamalparvez@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Contact from ${data.name}`,
          _template: "table",
          _captcha: "false"
        })
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again or email directly.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajajamalparvez@gmail.com",
      link: "mailto:rajajamalparvez@gmail.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Phone,
      label: "Phone & Whatsapp",
      value: "+92 (342) 263-7464",
      link: "tel:+923422637464",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/rajajamal",
      link: "https://www.linkedin.com/in/raja-jamal/",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@rajajamal",
      link: "https://github.com/iamrajajamal",
      color: "from-pink-500 to-purple-500",
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-black overflow-hidden">
      {/* Terminal Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ff_1px,transparent_1px),linear-gradient(to_bottom,#0ff_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            Initialize Contact
          </h2>
          <p className="text-xl text-slate-400">{"// Let's build something amazing together"}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Terminal-Style Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />

            {/* Terminal Window */}
            <div className="relative bg-slate-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 border-b border-cyan-400/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-slate-400">contact.terminal</span>
                </div>
              </div>

                {/* Form Content */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="flex items-center gap-2 text-green-400 mb-6">
                    <span>$</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      initialize_contact_sequence...
                    </motion.span>
                  </div>

                  <div className="space-y-4">
                    {/* Name Input */}
                    <div>
                      <label className="block text-sm text-cyan-400 mb-2">
                        {">"} Your Name
                      </label>
                      <Input
                        name="name"
                        required
                        placeholder="Enter your name"
                        className="bg-slate-800/50 border-slate-700 focus:border-cyan-400 text-slate-200"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-sm text-cyan-400 mb-2">
                        {">"} Your Email
                      </label>
                      <Input
                        name="email"
                        required
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-slate-800/50 border-slate-700 focus:border-cyan-400 text-slate-200"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-sm text-cyan-400 mb-2">
                        {">"} Message
                      </label>
                      <Textarea
                        name="message"
                        required
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="bg-slate-800/50 border-slate-700 focus:border-cyan-400 text-slate-200 resize-none"
                        onFocus={() => setIsTyping(true)}
                        onBlur={() => setIsTyping(false)}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white rounded-lg transition-all hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className={`w-4 h-4 mr-2 ${isSubmitting ? "animate-spin" : ""}`} />
                      {isSubmitting ? "Transmitting..." : "Execute: Send Message"}
                    </Button>
                  </div>

                {/* Terminal Output */}
                <div className="mt-6 p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-green-400">{">"}</span>
                    <motion.span
                      animate={{ opacity: isTyping ? [1, 0, 1] : 1 }}
                      transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
                    >
                      {isTyping
                        ? "Awaiting input..."
                        : "System ready. Standing by for message transmission."}
                    </motion.span>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info Header */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
                <h3 className="text-2xl text-white mb-2">
                  Direct Channels
                </h3>
                <p className="text-slate-400">
                  Reach out through any of these platforms
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="block relative group"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${contact.color} rounded-xl blur opacity-0 group-hover:opacity-40 transition-opacity`} />
                  <div className="relative flex items-center gap-4 p-5 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-cyan-400/50 rounded-xl transition-all">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color}`}>
                      <contact.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-400">{contact.label}</div>
                      <div className="text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {contact.value}
                      </div>
                    </div>
                    <div className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-cyan-400/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm text-slate-400">STATUS: AVAILABLE</span>
                </div>
                <p className="text-sm text-slate-300">
                  Open to freelance projects, consulting opportunities, and full-time positions.
                  Response time: Usually within 24 hours.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative z-10 mt-24 pt-12 border-t border-slate-800"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Raja Jamal Parvaiz. Built with Unity mindset, powered by React.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            {"// Crafted with passion for game development"}
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
