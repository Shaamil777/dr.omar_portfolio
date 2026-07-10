import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { CameraConfig } from '../motion/camera.config';
import { SystemConfig } from '../motion/system.config';

interface CameraRigProps {
  children?: React.ReactNode;
}

/**
 * CameraRig owns the camera and all global visual movement.
 * It combines:
 * 1. Base positional offset
 * 2. Idle Camera Drift (Breathing)
 * 3. Mouse Parallax
 */
export function CameraRig({ children }: CameraRigProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const dampedPointer = useRef(new THREE.Vector2());
  
  useFrame((state, delta) => {
    if (!cameraRef.current) return;
    
    // 1. Mouse Parallax (Damped pointer tracking)
    let parallaxX = 0;
    let parallaxY = 0;

    if (SystemConfig.ENABLE_PARALLAX) {
      dampedPointer.current.lerp(state.pointer, CameraConfig.damping);
      parallaxX = dampedPointer.current.x * CameraConfig.parallaxStrengthX;
      parallaxY = dampedPointer.current.y * CameraConfig.parallaxStrengthY;
    }

    // 2. Camera Drift (Very slow organic breathing)
    let driftX = 0;
    let driftY = 0;

    if (SystemConfig.ENABLE_CAMERA_DRIFT) {
      const t = state.clock.getElapsedTime() * CameraConfig.driftSpeed;
      driftX = Math.sin(t) * CameraConfig.driftAmplitudeX;
      driftY = Math.cos(t * 1.3) * CameraConfig.driftAmplitudeY;
    }

    // 3. Combine into Target Position
    const targetPos = new THREE.Vector3(
      CameraConfig.targetX + parallaxX + driftX,
      CameraConfig.targetY + parallaxY + driftY,
      CameraConfig.distance
    );

    // Apply smoothly
    cameraRef.current.position.lerp(targetPos, CameraConfig.damping);
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={cameraRef}
      position={[CameraConfig.targetX, CameraConfig.targetY, CameraConfig.distance + 2]} // Start slightly pulled back
      fov={CameraConfig.fov}
      near={0.1}
      far={100}
    >
      {children}
    </PerspectiveCamera>
  );
}
