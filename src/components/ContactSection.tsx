import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
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
      const response = await fetch(
        "https://formsubmit.co/ajax/rajajamalparvez@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: `New Contact from ${data.name}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(
        "Failed to send message. Please try again or email directly."
      );
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
      color: "border-[#fca5a5] bg-[#fee2e2]/30 text-craft-red",
    },
    {
      icon: Phone,
      label: "Phone & Whatsapp",
      value: "+92 (342) 263-7464",
      link: "tel:+923422637464",
      color: "border-[#93c5fd] bg-[#dbeafe]/30 text-craft-blue",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/raja-jamal",
      link: "https://www.linkedin.com/in/raja-jamal/",
      color: "border-[#fde047] bg-[#fef9c3]/40 text-foreground",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@iamrajajamal",
      link: "https://github.com/iamrajajamal",
      color: "border-foreground/30 bg-craft-tan/10 text-[#4b5563]",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#faf8f5] to-[#f5f2eb] border-t border-foreground/10 overflow-hidden paper-grain" id="contact">
      {/* Background craft shapes */}
      <div className="absolute bottom-[-100px] right-[10%] w-96 h-96 bg-craft-tan rounded-full opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Title Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-6 py-2 bg-craft-red text-white border border-foreground/80 paper-shadow rotate-[1.5deg] font-craft-title text-2xl uppercase tracking-wider">
            Send a Letter
          </div>
          <p className="text-sm font-craft-sketch text-muted-foreground mt-3">// Drop an envelope in my mailbox</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Folded Mailer Envelope Form Container */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 relative rotate-[-0.5deg]"
          >
            {/* The Physical Envelope Frame */}
            <div className="relative bg-white border border-foreground/60 paper-shadow-lg p-8 md:p-10 flex flex-col justify-between notebook-ruled overflow-hidden">
              {/* Notebook red margin line */}
              <div className="absolute left-[34px] top-0 bottom-0 w-[1px] bg-red-400 opacity-40 pointer-events-none" />

              {/* Envelope flap tape indicator */}
              <div className="craft-tape w-24 h-5 top-[-10px] left-1/2 -translate-x-1/2 tape-blue pointer-events-none z-10" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="flex justify-between items-center pb-4 border-b border-dashed border-foreground/20">
                  <div className="font-craft-sketch text-xs text-muted-foreground uppercase pl-6">From: INBOX_SEQUENCE</div>
                  <div className="w-12 h-12 border border-foreground/40 rounded-none bg-white flex items-center justify-center font-craft-title text-xs rotate-6 paper-shadow">
                    POST
                  </div>
                </div>

                <div className="space-y-6 font-craft-body text-sm">
                  {/* Name Input Lined */}
                  <div className="relative">
                    <label className="block font-craft-title text-xs text-foreground uppercase tracking-wider mb-2 pl-6">
                      Your Name
                    </label>
                    <input
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground focus:outline-none pb-2 text-foreground font-craft-sketch placeholder:text-muted-foreground/40 text-base pl-6"
                    />
                  </div>

                  {/* Email Input Lined */}
                  <div className="relative">
                    <label className="block font-craft-title text-xs text-foreground uppercase tracking-wider mb-2 pl-6">
                      Your Email Address
                    </label>
                    <input
                      name="email"
                      required
                      type="email"
                      placeholder="e.g. john@example.com"
                      className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground focus:outline-none pb-2 text-foreground font-craft-sketch placeholder:text-muted-foreground/40 text-base pl-6"
                    />
                  </div>

                  {/* Message Textarea Lined */}
                  <div className="relative">
                    <label className="block font-craft-title text-xs text-foreground uppercase tracking-wider mb-2 pl-6">
                      Letter Details
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Write your project details or inquiries here..."
                      rows={5}
                      className="w-[calc(100%-24px)] ml-6 bg-[#faf8f5]/60 border border-foreground/35 focus:border-foreground focus:outline-none p-3 text-foreground font-craft-body placeholder:text-muted-foreground/40 text-sm resize-none"
                    />
                  </div>

                  {/* Stamp Send Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-[calc(100%-24px)] ml-6 bg-craft-red hover:bg-craft-red/90 text-white border border-foreground/80 paper-shadow active:translate-y-0.5 active:shadow-[1px_1px_2px_rgba(0,0,0,0.1)] rounded-none py-6 text-sm font-craft-title uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all"
                  >
                    <Send className={`w-4 h-4 ${isSubmitting ? "animate-spin" : ""}`} />
                    {isSubmitting ? "Delivering Letter..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Sticky Notepad */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-6 bg-white border border-foreground/60 paper-shadow-lg rotate-[1.5deg]"
            >
              <div className="craft-tape w-12 h-4 top-[-8px] left-[15px] pointer-events-none tape-coral" style={{ transform: "rotate(-5deg)" }} />
              <h3 className="font-craft-title text-lg text-foreground uppercase tracking-tight mb-2">Direct Mail</h3>
              <p className="font-craft-sketch text-xs text-muted-foreground mb-4">Feel free to connect directly via any channel below:</p>

              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.link}
                    whileHover={{ x: 3 }}
                    className={`flex items-center gap-3.5 p-3.5 border border-foreground/60 bg-white paper-shadow transition-all`}
                  >
                    <div className={`p-2 border border-foreground/30 flex items-center justify-center bg-[#faf8f5]`}>
                      <contact.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-craft-sketch text-[10px] text-muted-foreground uppercase">{contact.label}</div>
                      <div className="font-craft-body text-xs text-foreground font-bold truncate">{contact.value}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status Cardboard Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-6 bg-white border border-foreground/60 paper-shadow-lg rotate-[-1deg]"
            >
              <div className="craft-tape w-16 h-3.5 top-[-8px] left-[15px] pointer-events-none tape-green" style={{ transform: "rotate(5deg)" }} />
              
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-craft-green shrink-0" />
                <span className="font-craft-title text-xs text-foreground uppercase tracking-widest">
                  Status: Available
                </span>
              </div>
              <p className="font-craft-body text-xs text-foreground/80 leading-relaxed">
                Open to freelance contracts, game production consulting, and full-time senior development positions. Response turnaround is typically under 24 hours.
              </p>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 mt-24 pt-12 border-t border-dashed border-foreground/15 pb-8"
      >
        <div className="max-w-6xl mx-auto px-6 text-center space-y-2">
          <p className="font-craft-title text-xs uppercase tracking-widest text-foreground">
            © 2026 Raja Jamal Parvaiz. Built with physical craft & paper code.
          </p>
          <p className="font-craft-sketch text-xs text-muted-foreground">
            // Handcrafted using Next/React and motion.
          </p>
        </div>
      </motion.footer>
    </section>
  );
}
