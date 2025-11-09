"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Award, TrendingUp, Users, Sparkles, Code, Palette } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { useRef } from "react";

const highlights = [
  {
    icon: <Award className="w-8 h-8" />,
    number: "50+",
    label: "AI Tools Tested",
    description: "Expertise in cutting-edge AI design tools",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "1500+",
    label: "Products Optimized",
    description: "E-commerce listings enhanced",
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "40%",
    label: "Engagement Growth",
    description: "Average client metric improvement",
  },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <div className="min-h-screen pt-20" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <motion.div 
              className="text-center mb-16"
              style={{ y, opacity }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="inline-block mb-6"
              >
                <Sparkles className="w-12 h-12 text-purple-600 mx-auto" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {["A", "b", "o", "u", "t", " ", "M", "e"].map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + i * 0.05,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 font-inter max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Passionate designer merging traditional creativity with AI innovation
              </motion.p>
            </motion.div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Portrait Image with Enhanced Animations */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500 rounded-full opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-500 rounded-full opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-200 to-pink-200"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Profile Video - Full Display */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/Video_Generation_With_Text_Overlay.mp4" type="video/mp4" />
                  </video>

                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />
                </motion.div>

                {/* Floating text labels */}
                <motion.div
                  className="absolute -top-6 right-10 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  Available for Projects
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Bio Text with Staggered Animation */}
            <AnimatedSection delay={0.4}>
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold font-poppins text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Creative Designer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">AI Enthusiast</span>
                </motion.h2>
                
                <div className="prose prose-lg text-gray-600 font-inter space-y-4">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    I'm a creative and detail-oriented graphic designer with a
                    strong background in visual communication and user-centered
                    design. I specialize in branding, typography, print design,
                    and illustration.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    I integrate traditional design tools and modern AI tools like
                    ChatGPT, Midjourney, Runway ML, and DALL·E to deliver
                    intuitive, impactful visual solutions for clients and social
                    projects.
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    My approach combines strategic thinking with artistic
                    execution, ensuring every project not only looks beautiful
                    but also serves its intended purpose effectively.
                  </motion.p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    onClick={(e) => {
                      e.preventDefault();
                      // Create temporary link for download
                      const link = document.createElement('a');
                      link.href = "https://drive.google.com/uc?export=download&id=15OQmYZL1eDTMrvbzJgUDyvt-pe2aMu0d";
                      link.download = "Aanchal_Chaurasia_Resume.pdf";
                      link.style.display = 'none';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="group relative inline-flex items-center space-x-2 px-8 py-4 bg-purple-600 text-white rounded-full font-medium overflow-hidden cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
                    <span className="relative z-10">Download Resume</span>
                  </motion.button>

                  <motion.a
                    href="#highlights"
                    className="inline-flex items-center space-x-2 px-8 py-4 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-medium hover:bg-purple-50 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>View Achievements</span>
                    <motion.span
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      ↓
                    </motion.span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16 text-gray-900">
              Impact & Achievements
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <motion.div
                  className="relative p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-2xl mb-6">
                    {highlight.icon}
                  </div>
                  <h3 className="text-5xl font-bold text-purple-600 mb-2 font-poppins">
                    {highlight.number}
                  </h3>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                    {highlight.label}
                  </h4>
                  <p className="text-gray-600 font-inter">
                    {highlight.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16 text-gray-900">
              Skills & Expertise
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold font-poppins mb-6 text-gray-900">
                  Design Tools
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Adobe Photoshop", level: 95 },
                    { name: "Adobe Illustrator", level: 90 },
                    { name: "Figma", level: 85 },
                    { name: "After Effects", level: 80 },
                    { name: "Canva", level: 95 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 font-inter">
                          {skill.name}
                        </span>
                        <span className="text-purple-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div>
                <h3 className="text-2xl font-bold font-poppins mb-6 text-gray-900">
                  AI Tools
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Midjourney", level: 90 },
                    { name: "ChatGPT", level: 95 },
                    { name: "Runway ML", level: 85 },
                    { name: "DALL·E", level: 88 },
                    { name: "Stable Diffusion", level: 80 },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700 font-inter">
                          {skill.name}
                        </span>
                        <span className="text-purple-600 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}

