"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Sparkles, Eye } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: "branding-design",
    title: "Branding Design",
    description: "Modern logo and visual identity for creative startup",
    tags: ["Branding", "Logo Design", "Identity"],
    category: "Branding",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-purple-400 via-pink-400 to-red-400",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
  },
  {
    id: "ai-art-showcase",
    title: "AI Art Showcase",
    description:
      "Exploring AI tools like Midjourney and Runway ML for creative design workflows",
    tags: ["AI Art", "Midjourney", "Experimental"],
    category: "AI Art",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-blue-400 via-purple-400 to-pink-400",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    id: "ecommerce-visuals",
    title: "E-commerce Visuals",
    description:
      "Enhanced product listings and mockups for TheFusionStore",
    tags: ["E-commerce", "Product Design", "Shopify"],
    category: "E-commerce",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-green-400 via-teal-400 to-blue-400",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: "ngo-campaign",
    title: "NGO Campaign",
    description: "Created social awareness visuals for Hamari Pahchan NGO",
    tags: ["Social Impact", "Campaign", "Non-profit"],
    category: "Campaign",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-orange-400 via-red-400 to-pink-400",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
  },
  {
    id: "sticker-design",
    title: "Sticker Design",
    description: "Bobble AI custom sticker collection for multilingual features",
    tags: ["Stickers", "Illustration", "Mobile"],
    category: "Illustration",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-yellow-400 via-orange-400 to-red-400",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    id: "digital-illustrations",
    title: "Digital Illustrations",
    description: "Hand-drawn + AI-refined artwork series",
    tags: ["Illustration", "Digital Art", "Mixed Media"],
    category: "Illustration",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-pink-400 via-purple-400 to-indigo-400",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=600&fit=crop",
  },
  {
    id: "wall-art",
    title: "Wall Art Collection",
    description: "Creative wall art and frame designs for Artevenue",
    tags: ["Print Design", "Art", "Interior"],
    category: "Print",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-indigo-400 via-blue-400 to-teal-400",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&h=600&fit=crop",
  },
  {
    id: "social-media",
    title: "Social Media Assets",
    description: "Engaging visual content for various platforms",
    tags: ["Social Media", "Marketing", "Content"],
    category: "Campaign",
    link: "https://www.behance.net/aanchalchaurasia14",
    gradient: "from-cyan-400 via-blue-400 to-purple-400",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
  },
];

const categories = ["All", "Branding", "AI Art", "Campaign", "Illustration", "E-commerce", "Print"];

// 3D Tilt Card Component
function TiltCard({ project, index }: { project: any; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-xl h-full"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Image Background */}
          <div className="relative w-full h-80 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-multiply group-hover:opacity-40 transition-opacity duration-300`} />
            
            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 border-4 border-white/0 group-hover:border-white/30 rounded-2xl transition-all duration-300"
              animate={isHovered ? { scale: [1, 0.98, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                {project.title}
              </h3>
              <p className="text-white/90 text-sm mb-4 font-inter">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: string) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* View Project Button */}
              <motion.div
                className="inline-flex items-center space-x-2 text-white font-semibold"
                whileHover={{ x: 5 }}
              >
                <span>View Project</span>
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Sparkle Effect on Hover */}
          <motion.div
            className="absolute top-4 right-4"
            animate={isHovered ? { rotate: 360, scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-white drop-shadow-lg" />
          </motion.div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 1, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
          />
        </motion.div>
      </a>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-gray-900">
                Portfolio
              </h1>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                A collection of my creative work spanning branding, AI art,
                campaigns, and digital design
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white sticky top-20 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={project.id}
                layout
              >
                <TiltCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-xl text-gray-600 font-inter">
                No projects found in this category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-gray-900">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-gray-600 mb-10 font-inter">
              Let's create something amazing for your brand
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

