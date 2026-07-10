"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

// A curved 3D mesh that applies the generated texture
const CurvedCard = ({ textureUrl, rotation }: any) => {
  const texture = useTexture(textureUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  
  // Height = 4.8. Width = 3.6.
  // Radius = 6. thetaLength = Width / Radius = 3.6 / 6 = 0.6.
  return (
    <group rotation={rotation}>
      {/* Front face with texture */}
      <mesh>
        <cylinderGeometry args={[6, 6, 5.6, 32, 1, true, -0.36, 0.72]} />
        <meshStandardMaterial 
          map={texture} 
          transparent 
          side={THREE.FrontSide}
          roughness={0.2}
        />
      </mesh>
      {/* Back face for the solid, dark shadow look when curved away */}
      <mesh>
        <cylinderGeometry args={[5.99, 5.99, 5.6, 32, 1, true, -0.36, 0.72]} />
        <meshStandardMaterial 
          color="#090909"
          side={THREE.BackSide}
          roughness={0.9}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
};

const imageUrls = [
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&h=400&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=400&q=80"
];

// Per-letter config: char, approximate width (fraction of fontSize), scaleY
// Using HeadingNow Width-5 Heavy — a much bolder/wider variant
const LETTERS_CONFIG = [
  { char: 'P', width: 0.55, scaleY: 1.0 },
  { char: 'R', width: 0.58, scaleY: 1.0 },
  { char: 'O', width: 0.62, scaleY: 1.0 },
  { char: 'G', width: 0.62, scaleY: 1.0 },
  { char: 'R', width: 0.58, scaleY: 1.0 },
  { char: 'A', width: 0.60, scaleY: 1.0 },
  { char: 'M', width: 0.72, scaleY: 1.0 },
  { char: 'M', width: 0.72, scaleY: 1.0 },
  { char: 'E', width: 0.50, scaleY: 1.0 },
  { char: 'S', width: 0.52, scaleY: 1.0 },
];

const LETTER_GAP = -0.06; // Negative to tighten gaps between letters

// The massive 3D text — each letter rendered individually for variable height control
const IntersectingText = () => {
  const { viewport } = useThree();
  
  // Calculate the visible world-space width at the text's z-depth (-3)
  const depthScale = 14 / 11;
  const widthAtText = viewport.width * depthScale;
  
  // Compute fontSize so all letters span ~95% of viewport width
  const totalCharWidth = LETTERS_CONFIG.reduce((sum, l) => sum + l.width, 0);
  const totalGaps = LETTER_GAP * (LETTERS_CONFIG.length - 1);
  const fontSize = (widthAtText * 0.95) / (totalCharWidth + totalGaps);
  
  // Compute cumulative X positions for each letter
  const positions: number[] = [];
  let x = 0;
  for (let i = 0; i < LETTERS_CONFIG.length; i++) {
    positions.push(x);
    x += (LETTERS_CONFIG[i].width + LETTER_GAP) * fontSize;
  }
  const totalPixelWidth = x - LETTER_GAP * fontSize;
  const offsetX = -totalPixelWidth / 2; // Center the whole word

  return (
    <group position={[0, 1.8, -3]}>
      {LETTERS_CONFIG.map((letter, i) => (
        <Text
          key={i}
          position={[offsetX + positions[i], 0, 0]}
          fontSize={fontSize}
          font="/fonts/HeadingNowHeavy.ttf"
          color="#ffffff"
          anchorX="left"
          anchorY="top"
          scale={[1, letter.scaleY, 1]}
          material-toneMapped={false}
        >
          {letter.char}
        </Text>
      ))}
    </group>
  );
};

// We move the scene into its own component so it renders INSIDE the Canvas
// This ensures that the groupRef is fully mounted before GSAP tries to animate it.
const CarouselScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  // useFrame runs on every single animation frame (e.g. 60 times a second)
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Rotating positively on Y makes the front faces move from right to left continuously!
      groupRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />
      <Environment preset="city" />
      
      {/* The massive text sits at the cylinder's center depth — 
          front cards will occlude it, back cards sit behind it */}
      <IntersectingText />

      {/* Parent group: FIXED left-tilt. Never animated — holds static orientation. */}
      <group position={[0, -0.5, -3]} rotation={[0.2, 0, 0.35]} scale={[0.70, 0.70, 0.70]}>
        {/* Child group: ONLY Y-spin via useFrame. Tilt stays locked. */}
        <group ref={groupRef}>
          {/* 8 Cards forming a closed 360° loop */}
          {Array.from({ length: 8 }).map((_, i) => (
            <CurvedCard 
              key={i}
              textureUrl={imageUrls[i % 3]} 
              rotation={[0, i * (Math.PI * 2 / 8), 0]} 
            />
          ))}
        </group>
      </group>
    </>
  );
};

export default function ProgrammesCards() {
  return (
    <div className="absolute inset-0 w-full h-full z-20 pointer-events-none flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 11], fov: 45 }}>
        <CarouselScene />
      </Canvas>
    </div>
  );
}
