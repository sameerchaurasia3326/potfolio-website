"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const skills = [
  "Photoshop",
  "Illustrator",
  "Figma",
  "After Effects",
  "Midjourney",
  "Runway ML",
  "ChatGPT",
  "Canva",
  "DALL·E",
  "Stable Diffusion",
];

const featuredProjects = [
  {
    title: "Branding Design",
    description: "Modern logo and visual identity for creative startup",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
    tags: ["Branding", "Logo Design"],
    slug: "branding-design",
  },
  {
    title: "AI Art Showcase",
    description: "Exploring AI tools for creative design workflows",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["AI Art", "Midjourney"],
    slug: "ai-art-showcase",
  },
  {
    title: "E-commerce Visuals",
    description: "Enhanced product listings and mockups for TheFusionStore",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&h=600&fit=crop",
    tags: ["E-commerce", "Product Design"],
    slug: "ecommerce-visuals",
  },
  {
    title: "NGO Campaign",
    description: "Social awareness visuals for Hamari Pahchan NGO",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
    tags: ["Social Impact", "Campaign"],
    slug: "ngo-campaign",
  },
];

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-purple-600">
                Available for Freelance
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 text-gray-900">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="block"
              >
                Aanchal Chaurasia
              </motion.span>
            </h1>

            <motion.h2
              className="text-2xl md:text-3xl font-medium text-gray-700 mb-6 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Graphic Designer · AI Content Creator · Visual Storyteller
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 font-inter leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I blend design, storytelling, and AI tools to craft visuals that
              connect ideas with emotion.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <button
                onClick={() => scrollToSection("featured-projects")}
                className="group px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("contact-preview")}
                className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                Hire Me
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-gray-900">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 font-inter">
              A selection of my best work
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.1}>
                <Link href={`/portfolio#${project.slug}`}>
                  <motion.div
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-gray-100 aspect-[4/3]"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Project Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-2xl font-bold mb-2 font-poppins">
                          {project.title}
                        </h3>
                        <p className="text-sm mb-3 font-inter opacity-90">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Small Overlay for Title (visible by default) */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                      <h3 className="text-xl font-bold text-white font-poppins">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link href="/portfolio">
              <motion.button
                className="px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Strip Section */}
      <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="mb-12 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gray-900">
              Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Expertise in design and AI tools
            </p>
          </AnimatedSection>
        </div>

        <div className="relative">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-8 py-4 bg-white rounded-full shadow-md border border-gray-200"
              >
                <span className="text-lg font-medium text-gray-700 whitespace-nowrap font-inter">
                  {skill}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact-preview" className="py-24 bg-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-gray-900">
              Let's Create Together
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-inter">
              Have a project in mind? I'd love to hear about it.
            </p>
            <Link href="/contact">
              <motion.button
                className="px-10 py-5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
