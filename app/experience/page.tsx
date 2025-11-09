"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const experiences = [
  {
    title: "Graphic Designer",
    company: "Bobble AI",
    period: "2023 - 2024",
    location: "Remote",
    description:
      "Created stickers and story designs, led visual improvements for multilingual features, improved engagement by 20%.",
    achievements: [
      "Designed 500+ custom stickers for multilingual keyboard features",
      "Led visual redesign improving user engagement by 20%",
      "Collaborated with product team on UX improvements",
      "Created brand-consistent story templates",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "E-commerce Specialist",
    company: "TheFusionStore",
    period: "2024 - 2025",
    location: "Remote",
    description:
      "Managed Shopify store visuals, optimized 1500+ product listings with AI tools (Mockey, ImageUpscaly).",
    achievements: [
      "Optimized 1500+ product listings with AI-enhanced imagery",
      "Increased conversion rate by 35% through improved visuals",
      "Implemented consistent brand aesthetics across store",
      "Created mockups and lifestyle images for products",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "AI Blogger",
    company: "Self-published",
    period: "2024 - Present",
    location: "Remote",
    description:
      "Wrote tutorials on AI tools, prompt strategies, and use cases for creative professionals.",
    achievements: [
      "Published 50+ articles on AI design tools",
      "Built community of 10K+ followers on Medium",
      "Created comprehensive guides on Midjourney and ChatGPT",
      "Featured in AI design newsletters",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Creative Intern",
    company: "Artevenue",
    period: "2025",
    location: "Hybrid",
    description:
      "Designed wall art and frames, developed creative social media campaigns.",
    achievements: [
      "Designed 100+ wall art pieces for home decor collection",
      "Created social media campaigns reaching 50K+ impressions",
      "Collaborated on product photography and styling",
      "Developed brand guidelines for new product lines",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Graphic Design Intern",
    company: "Hamari Pahchan NGO",
    period: "2025",
    location: "Remote",
    description:
      "Designed impactful campaign visuals for social entrepreneurship initiatives.",
    achievements: [
      "Created awareness campaign reaching 100K+ people",
      "Designed fundraising materials increasing donations by 40%",
      "Developed brand identity for social programs",
      "Produced educational infographics and posters",
    ],
    color: "from-violet-500 to-purple-500",
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-gray-900">
                Experience
              </h1>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                My professional journey in design and creative technology
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-300 via-pink-300 to-purple-300" />

            {/* Timeline Items */}
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <motion.div
                    className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                      index % 2 === 0 ? "" : "md:direction-rtl"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Content Card */}
                    <div
                      className={`${
                        index % 2 === 0 ? "md:text-right" : "md:text-left md:col-start-2"
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border border-gray-100">
                        {/* Header */}
                        <div className="mb-6">
                          <div
                            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium mb-4`}
                          >
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-purple-600 mb-2">
                            <Briefcase className="w-5 h-5" />
                            <span className="font-semibold font-inter">
                              {exp.company}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm font-inter">
                            {exp.location}
                          </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 font-inter mb-6">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-3">
                          <h4 className="font-semibold text-gray-900 font-poppins">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2 text-sm text-gray-600 font-inter"
                              >
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Briefcase className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Empty Column for Alternating Layout */}
                    {index % 2 === 0 ? (
                      <div className="hidden md:block" />
                    ) : (
                      <div className="hidden md:block md:col-start-1" />
                    )}
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-center mb-16 text-gray-900">
              Career Highlights
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "2000+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "15+", label: "Tools Mastered" },
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center p-8 bg-white rounded-2xl shadow-lg"
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 font-poppins">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-inter">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-gray-900">
              Want to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-inter">
              I'm always open to discussing new projects and opportunities
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-10 py-5 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

