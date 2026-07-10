export interface CardMotionProfile {
  yAmplitude: number;
  yFrequency: number;

  xRotationAmplitude: number;
  xRotationFrequency: number;

  yRotationAmplitude: number;
  yRotationFrequency: number;

  zRotationAmplitude: number;
  zRotationFrequency: number;

  phase: number;
}

// These profiles give each slot a unique "personality"
// They determine how intensely and how fast a card floats and rotates.
export const MotionProfiles: Record<string, CardMotionProfile> = {
  CENTER: {
    yAmplitude: 0.05, // very subtle vertical drift
    yFrequency: 0.8,
    
    xRotationAmplitude: 0.01,
    xRotationFrequency: 0.5,
    
    yRotationAmplitude: 0.02,
    yRotationFrequency: 0.6,
    
    zRotationAmplitude: 0.015,
    zRotationFrequency: 0.4,
    
    phase: 0.0,
  },
  
  LEFT: {
    yAmplitude: 0.08,
    yFrequency: 1.1,
    
    xRotationAmplitude: 0.04, // Mostly X rotation
    xRotationFrequency: 1.2,
    
    yRotationAmplitude: 0.015,
    yRotationFrequency: 0.7,
    
    zRotationAmplitude: 0.02,
    zRotationFrequency: 0.9,
    
    phase: 1.2,
  },
  
  RIGHT: {
    yAmplitude: 0.07,
    yFrequency: 0.9,
    
    xRotationAmplitude: 0.015,
    xRotationFrequency: 0.8,
    
    yRotationAmplitude: 0.04, // Mostly Y rotation
    yRotationFrequency: 1.1,
    
    zRotationAmplitude: 0.02,
    zRotationFrequency: 0.8,
    
    phase: 3.4,
  },
  
  FAR_LEFT: {
    yAmplitude: 0.04,
    yFrequency: 0.6,
    
    xRotationAmplitude: 0.01,
    xRotationFrequency: 0.4,
    
    yRotationAmplitude: 0.01,
    yRotationFrequency: 0.5,
    
    zRotationAmplitude: 0.01,
    zRotationFrequency: 0.3,
    
    phase: 5.1,
  },
  
  FAR_RIGHT: {
    yAmplitude: 0.05,
    yFrequency: 0.7,
    
    xRotationAmplitude: 0.01,
    xRotationFrequency: 0.5,
    
    yRotationAmplitude: 0.01,
    yRotationFrequency: 0.4,
    
    zRotationAmplitude: 0.01,
    zRotationFrequency: 0.4,
    
    phase: 7.8,
  }
};
