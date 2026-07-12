"use client";

import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';

export interface HeroCanvasHandle {
  renderFrame: (index: number) => void;
  isLoaded: boolean;
}

const HeroCanvas = forwardRef<HeroCanvasHandle>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentIndexRef = useRef(0);
  const [loaded, setLoaded] = useState(false);
  const totalFrames = 193;
  
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(4, '0');
      
      if (i === 193) {
        img.src = `/hero/frame_0193_final.jpeg`;
      } else {
        img.src = `/hero/frame_${frameNum}.png`;
      }
      img.onload = () => {
        if (i === 1) {
          setLoaded(true);
        }
      };
      loadedImages[i - 1] = img;
    }
    
    imagesRef.current = loadedImages;
    // Fallback: show canvas after 1 second even if frame 1 is slow
    const timeout = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const renderFrame = (index: number) => {
    index = Math.max(0, Math.min(index, totalFrames - 1));
    currentIndexRef.current = index;
    
    const images = imagesRef.current;
    if (!images || images.length === 0 || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Find the closest loaded image at or before the requested index
    let imgToDraw = null;
    for (let i = index; i >= 0; i--) {
      if (images[i] && images[i].complete && images[i].naturalWidth > 0) {
        imgToDraw = images[i];
        break;
      }
    }
    
    if (!imgToDraw) return; // Nothing loaded yet
    
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    ctx.scale(dpr, dpr);
    
    const canvasRatio = window.innerWidth / window.innerHeight;
    const imgRatio = imgToDraw.width / imgToDraw.height;
    
    let renderWidth = window.innerWidth;
    let renderHeight = window.innerHeight;
    let offsetX = 0;
    let offsetY = 0;
    
    if (canvasRatio > imgRatio) {
      renderHeight = window.innerWidth / imgRatio;
      offsetY = (window.innerHeight - renderHeight) / 2;
    } else {
      renderWidth = window.innerHeight * imgRatio;
      offsetX = (window.innerWidth - renderWidth) / 2;
    }
    
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.drawImage(imgToDraw, offsetX, offsetY, renderWidth, renderHeight);
  };

  useImperativeHandle(ref, () => ({
    renderFrame,
    isLoaded: loaded
  }));

  useEffect(() => {
    if (loaded) {
      renderFrame(currentIndexRef.current);
      
      const handleResize = () => {
        requestAnimationFrame(() => {
          renderFrame(currentIndexRef.current);
        });
      };
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [loaded]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
      {!loaded && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#131313] flex items-center justify-center z-50">
        </div>
      )}
    </>
  );
});

HeroCanvas.displayName = 'HeroCanvas';
export default HeroCanvas;
