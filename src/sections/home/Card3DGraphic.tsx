"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useEffect } from "react";

const FloatingShape = ({ index }: { index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetMouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    currentMouse.current.x = THREE.MathUtils.lerp(currentMouse.current.x, targetMouse.current.x, delta * 3);
    currentMouse.current.y = THREE.MathUtils.lerp(currentMouse.current.y, targetMouse.current.y, delta * 3);

    if (groupRef.current) {
      groupRef.current.rotation.y = currentMouse.current.x * 0.8;
      groupRef.current.rotation.x = -currentMouse.current.y * 0.8;
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={meshRef} scale={1.2}>
          {index === 0 && <icosahedronGeometry args={[1, 1]} />}
          {index === 1 && <torusKnotGeometry args={[0.7, 0.2, 100, 16]} />}
          {index === 2 && <octahedronGeometry args={[1, 2]} />}
          {index === 3 && <sphereGeometry args={[1, 32, 32]} />}
          <MeshDistortMaterial 
            color="#CD1D1D" 
            wireframe={true} 
            distort={0.5} 
            speed={2} 
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>
    </group>
  );
};

export default function Card3DGraphic({ index }: { index: number }) {
  return (
    <div className="absolute -inset-20 z-0 pointer-events-none mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#CD1D1D" />
        <FloatingShape index={index} />
      </Canvas>
    </div>
  );
}
