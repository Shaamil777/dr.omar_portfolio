import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { POSES, SlotName } from './poses';
import { MotionConfig } from './motion.config';

export function useCarousel(slots: (SlotName | 'HIDDEN')[]) {
  // We keep an array of target transforms for each card
  const targetTransforms = useRef(
    slots.map(slot => {
      const p = slot !== 'HIDDEN' ? POSES[slot] : POSES.FAR_LEFT; // fallback
      return {
        x: p.position[0],
        y: p.position[1],
        z: p.position[2],
        rotX: p.rotation[0],
        rotY: p.rotation[1],
        rotZ: p.rotation[2],
        scale: p.scale,
        opacity: p.opacity,
      };
    })
  );

  useGSAP(() => {
    slots.forEach((slot, index) => {
      if (slot === 'HIDDEN') return;
      
      const pose = POSES[slot];
      const target = targetTransforms.current[index];

      gsap.to(target, {
        x: pose.position[0],
        y: pose.position[1],
        z: pose.position[2],
        rotX: pose.rotation[0],
        rotY: pose.rotation[1],
        rotZ: pose.rotation[2],
        scale: pose.scale,
        opacity: pose.opacity,
        duration: MotionConfig.transitionDuration,
        ease: MotionConfig.transitionEase,
        overwrite: "auto"
      });
    });
  }, [slots]);

  return targetTransforms;
}
