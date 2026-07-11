"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroCanvas, { HeroCanvasHandle } from './HeroCanvas';
import HeroContent from './HeroContent';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);
  const canvasHandleRef = useRef<HeroCanvasHandle>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Delay initialization slightly so the DOM is completely ready.
    const timer = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;
  
      let ctx = gsap.context(() => {
        const obj = { frame: 0 };
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'top top',
            end: 'bottom bottom', // Scrubs through the entire 400vh container
            scrub: 1, 
            pin: false, // We use native CSS sticky instead of GSAP pin for better React compatibility
            invalidateOnRefresh: true,
          }
        });
  
        // 1. Unblur the canvas during the first 10% of the scroll
        if (blurRef.current) {
          tl.to(blurRef.current, {
            filter: 'blur(0px)',
            duration: 0.1, 
            ease: 'power1.out'
          }, 0);
        }
  
        // 2. Animate Frame sequence from 0 to 192
        tl.to(obj, {
          frame: 192,
          snap: 'frame',
          ease: 'none',
          onUpdate: () => {
            if (canvasHandleRef.current && canvasHandleRef.current.isLoaded) {
               canvasHandleRef.current.renderFrame(obj.frame);
            }
          }
        }, 0);
  
        // 3. Animate Telemetry Widgets (Scattered Data)
        const sticky = stickyRef.current;
        if (sticky) {
          const widgets = sticky.querySelectorAll('.telemetry-widget');
          widgets.forEach((widget, index) => {
            const targetColor = widget.getAttribute('data-reveal-color') || '#ffffff';
            tl.to(widget, {
              '--progress': 1, // Animates the custom CSS variable from 0 to 1
              opacity: 1,
              color: targetColor, // Change color from white to the specific reveal color
              duration: 0.15,
              ease: 'power2.out'
            }, index * 0.12 + 0.1); // Staggered reveal as we scroll
          });
        }
  
        // 4. Animate Redactions and Background
        if (contentRef.current) {
          const textContent = contentRef.current.querySelector('.hero-text-content');
          const overlay = contentRef.current.querySelector('.hero-overlay');
          
          if (textContent) {
            // Animate redaction reveal
            const hiddenTexts = textContent.querySelectorAll('.hidden-text');
            const redactionBoxes = textContent.querySelectorAll('.redaction-box');
            
            // Make text visible (still covered by red boxes initially)
            tl.set(hiddenTexts, { autoAlpha: 1 }, 0.1);
            
            // Shrink the red boxes to reveal the text
            tl.to(redactionBoxes, {
              scaleX: 0,
              duration: 0.4,
              stagger: 0.15,
              ease: 'power3.inOut'
            }, 0.2);
          }
          
          if (overlay) {
            tl.to(overlay, {
              opacity: 1,
              duration: 1,
              ease: 'none'
            }, 0);
          }
        }
      }, container);
  
      return () => ctx.revert();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    // The container is 400vh tall to create 300vh of scrolling space
    <section ref={containerRef} className="relative w-full h-[400vh] bg-black">
      {/* The sticky wrapper stays locked to the screen while scrolling through the 400vh container */}
      <div ref={stickyRef} className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <div ref={blurRef} className="absolute inset-0 w-full h-full z-0" style={{ filter: 'blur(4px)' }}>
          <HeroCanvas ref={canvasHandleRef} />
        </div>
        <HeroContent ref={contentRef} />
      </div>
    </section>
  );
}
