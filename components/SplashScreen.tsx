"use client";

import { useState, useEffect } from "react";
import LandingAnimation from "./LandingAnimation";

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Check if user has seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    
    if (hasSeenSplash === "true") {
      setShowSplash(false);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("hasSeenSplash", "true");
    setShowSplash(false);
  };

  // Prevent flash of content
  if (!mounted) {
    return null;
  }

  return (
    <>
      {showSplash && <LandingAnimation onComplete={handleComplete} />}
      <div style={{ opacity: showSplash ? 0 : 1, transition: "opacity 0.5s" }}>
        {children}
      </div>
    </>
  );
}



