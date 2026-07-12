"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

export default function CustomCursor() {
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Exact Mouse Position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring configuration for the trailing ring (bouncy and premium)
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Hide the global cursor if we are over a section that has its own custom huge cursor
      const target = e.target as HTMLElement;
      if (target && (target.closest('.program-card-item') || target.closest('.entrepreneur-card'))) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleLinkHoverStart = () => setIsHoveringLink(true);
    const handleLinkHoverEnd = () => setIsHoveringLink(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Setup Mutation Observer to attach hover events to dynamic links
    const attachHoverListeners = () => {
      const interactiveElements = document.querySelectorAll("a, button, .interactive-hover");
      interactiveElements.forEach((el) => {
        // Prevent double binding
        el.removeEventListener("mouseenter", handleLinkHoverStart);
        el.removeEventListener("mouseleave", handleLinkHoverEnd);
        
        el.addEventListener("mouseenter", handleLinkHoverStart);
        el.addEventListener("mouseleave", handleLinkHoverEnd);
      });
    };

    attachHoverListeners();

    const observer = new MutationObserver(() => {
      attachHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
      
      const interactiveElements = document.querySelectorAll("a, button, .interactive-hover");
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart);
        el.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, [mouseX, mouseY, isVisible, pathname]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null; // Do not render on mobile
  }

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-[1.5px] border-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHidden ? 0 : (isHoveringLink ? 1.8 : 1),
          opacity: isVisible && !isHidden ? (isHoveringLink ? 0.8 : 0.5) : 0,
          backgroundColor: isHoveringLink ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHidden ? 0 : (isHoveringLink ? 0 : 1),
          opacity: isVisible && !isHidden ? 1 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />
    </>
  );
}
