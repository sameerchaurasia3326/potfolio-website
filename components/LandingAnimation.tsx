"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface LandingAnimationProps {
  onComplete: () => void;
}

export default function LandingAnimation({ onComplete }: LandingAnimationProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Auto-progress through animation steps (but don't auto-complete)
    const timer1 = setTimeout(() => setStep(1), 500);
    const timer2 = setTimeout(() => setStep(2), 1500);
    const timer3 = setTimeout(() => setStep(3), 2500);
    // Removed auto-complete timer - user must click to enter

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-white/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-white/20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          {/* Step 1: Logo/Icon Animation */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                }}
                className="mb-8"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-2xl"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 60px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-16 h-16 text-purple-600" />
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 2: Name Animation */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-poppins">
                  {["A", "a", "n", "c", "h", "a", "l"].map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 3: Tagline Animation */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.p
                  className="text-2xl md:text-3xl text-white/90 font-light font-inter mb-8"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  Creative Designer · AI Innovator
                </motion.p>

                {/* Enter Button */}
                <motion.button
                  onClick={onComplete}
                  className="group px-8 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                >
                  <span>Enter Portfolio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>

                {/* Click to Continue Hint */}
                <motion.p
                  className="block mx-auto mt-6 text-white/80 text-sm font-inter"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ 
                    delay: 0.5,
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                    }
                  }}
                >
                  Click to continue
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex space-x-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  step > i ? "bg-white" : "bg-white/30"
                }`}
                animate={{
                  scale: step === i ? [1, 1.5, 1] : 1,
                }}
                transition={{
                  duration: 0.5,
                  repeat: step === i ? Infinity : 0,
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

