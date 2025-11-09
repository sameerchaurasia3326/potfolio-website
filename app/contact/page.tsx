"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { useState, FormEvent } from "react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "aanchalchaurasia86@gmail.com",
    href: "mailto:aanchalchaurasia86@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Available Remotely",
    href: null,
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
];

const socialLinks = [
  {
    name: "Behance",
    url: "https://www.behance.net/aanchalchaurasia14",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
    color: "hover:text-blue-600",
  },
  {
    name: "Medium",
    url: "https://medium.com/@ACAIBLOGER",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
    color: "hover:text-gray-900",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aanchal-chaurasia-094521211/",
    icon: <Linkedin className="w-6 h-6" />,
    color: "hover:text-blue-700",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // Using Web3Forms - Free unlimited form submissions
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "your-webform-access-key",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission - Portfolio",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 text-gray-900">
                Let's Create Something Together
              </h1>
              <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
                Reach out for collaborations, freelance projects, or creative
                partnerships
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-6 text-gray-900">
                    Get In Touch
                  </h2>
                  <p className="text-lg text-gray-600 font-inter mb-8">
                    I'm always excited to hear about new projects and
                    opportunities. Whether you have a question or just want to say
                    hi, feel free to reach out!
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl hover:bg-purple-50 transition-colors"
                      whileHover={{ x: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 font-poppins mb-1">
                          {info.label}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-purple-600 transition-colors font-inter"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 font-inter">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold font-poppins mb-4 text-gray-900">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-colors ${link.color}`}
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={link.name}
                      >
                        {link.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2}>
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold font-poppins mb-6 text-gray-900">
                  Send Me a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2 font-inter"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-white"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2 font-inter"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all bg-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2 font-inter"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none bg-white"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: status === "loading" ? 1 : 1.02 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  >
                    {status === "loading" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* Status Messages */}
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 text-green-700 rounded-xl text-center font-inter"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-100 text-red-700 rounded-xl text-center font-inter"
                    >
                      Oops! Something went wrong. Please try again or email me
                      directly.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map or Additional Info Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 text-gray-900">
              Let's Make Magic Happen
            </h2>
            <p className="text-xl text-gray-600 font-inter mb-8">
              I typically respond within 24 hours and would love to discuss your
              project in detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white rounded-full shadow-md">
                <span className="text-gray-700 font-inter">
                  ⚡ Fast Response
                </span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md">
                <span className="text-gray-700 font-inter">
                  🎨 Creative Solutions
                </span>
              </div>
              <div className="px-6 py-3 bg-white rounded-full shadow-md">
                <span className="text-gray-700 font-inter">
                  💼 Professional Service
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}

