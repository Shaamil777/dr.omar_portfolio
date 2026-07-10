export const CameraConfig = {
  // Base Settings
  fov: 50,
  distance: 10,
  
  // Base Offset for compositional centering
  targetX: 0,
  targetY: 0,
  
  // Parallax constraints
  parallaxStrengthX: 0.12,
  parallaxStrengthY: 0.08,
  
  // Camera Drift (Breathing)
  driftAmplitudeX: 0.02,
  driftAmplitudeY: 0.015,
  driftSpeed: 0.1, // Very slow
  
  // Damping
  damping: 0.08,
};
