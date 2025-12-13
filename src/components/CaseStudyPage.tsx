import { motion } from "motion/react";
import { ArrowLeft, Play, Image as ImageIcon, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Navigation } from "./Navigation";
import { getCaseStudyData } from "../data/caseStudies";

interface CaseStudyPageProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    tech: string[];
    color: string;
  };
  onBack: () => void;
}

export function CaseStudyPage({ project, onBack }: CaseStudyPageProps) {
  // Get extended case study data
  const caseStudyData = getCaseStudyData(project);

  return (
    <div className="min-h-screen bg-black">
      <Navigation onNavigate={onBack} showSections={false} />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 text-sm rounded-full bg-gradient-to-r ${project.color} text-white`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-6xl md:text-8xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 py-4">
              {project.title}
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-300 mb-8">
              {project.subtitle}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-700/50 text-slate-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Info Bar */}
      <section className="relative py-8 bg-slate-950 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Role", value: caseStudyData.role },
              { label: "Duration", value: caseStudyData.duration },
              { label: "Team Size", value: caseStudyData.team },
              { label: "Platform", value: caseStudyData.platform },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="text-sm text-slate-500 mb-2">{item.label}</div>
                <div className="text-slate-200">{item.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-8 py-4">
              Project Overview
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {caseStudyData.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="relative py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 py-4">
              Key Features
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudyData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative h-full bg-slate-950/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-cyan-400/50 rounded-2xl p-8 transition-all">
                  <div
                    className={`inline-block p-4 rounded-xl bg-gradient-to-r ${project.color} mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 py-4">
              Gallery
            </h2>
            <p className="text-xl text-slate-400">Screenshots & Videos</p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudyData.gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-slate-900 border border-slate-700/50 group-hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all">
                  <div className="aspect-video relative bg-slate-800">
                    {item.type === "image" ? (
                      <ImageWithFallback
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Play className="w-16 h-16 text-cyan-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <p className="p-4 text-white">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Add Media Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block bg-slate-900/80 backdrop-blur-xl border border-cyan-400/30 rounded-xl px-6 py-4">
              <p className="text-cyan-300 flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Disclaimer: All images displayed here are AI-generated and used
                as **placeholders**. This is done to comply with confidentiality
                agreements and avoid contract breach, as I do not own the
                proprietary project work. My role in this project was strictly
                as a Game Developer.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="relative py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 py-4">
              Challenges & Solutions
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-8">
            {caseStudyData.challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 group-hover:border-cyan-400/50 rounded-2xl p-8 transition-all">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Target className="w-6 h-6 text-red-400" />
                        <h3 className="text-xl text-red-400">Challenge</h3>
                      </div>
                      <p className="text-slate-300">{item.challenge}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-6 h-6 text-green-400" />
                        <h3 className="text-xl text-green-400">Solution</h3>
                      </div>
                      <p className="text-slate-300">{item.solution}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-24 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4 py-4">
              Results & Impact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudyData.results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-400/30 group-hover:border-cyan-400/60 rounded-2xl p-8 text-center transition-all">
                  <div className="text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3">
                    {result.metric}
                  </div>
                  <div className="text-slate-400">{result.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Producer KPIs Divider */}
          {caseStudyData.producerMetrics && (
            <div className="mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  Production KPIs
                </h2>
                <p className="text-xl text-slate-400">
                  Management & Efficiency
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full mt-4" />
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {caseStudyData.producerMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
                    <div className="relative bg-slate-900/80 backdrop-blur-xl border border-cyan-400/30 group-hover:border-cyan-400/60 rounded-2xl p-8 text-center transition-all">
                      <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-3 font-bold">
                        {metric.metric}
                      </div>
                      <div className="text-slate-400 text-sm font-medium uppercase tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center mt-16"
          >
            <Button
              onClick={onBack}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white px-8 py-6 rounded-xl transition-all hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
