import { MotionConfig } from './motion.config';
import { CardMotionProfile } from './motionProfiles';
import { SystemConfig } from './system.config';

/**
 * A slow, very subtle pseudo-noise function using layered sine waves (fractal motion).
 * Combines 3 distinct frequencies with prime multipliers to ensure it almost never repeats.
 */
function fractalNoise(t: number, phase: number = 0) {
  const t1 = (t + phase) * 0.73;
  const t2 = (t + phase * 1.3) * 1.13;
  const t3 = (t + phase * 2.1) * 1.67;

  // Layered sine waves:
  // Base slow wave + medium wave + fast subtle wave
  return (
    Math.sin(t1) * 1.0 +
    Math.sin(t2) * 0.4 +
    Math.sin(t3) * 0.15
  ) / 1.55;
}

export function useAntigravity(profile: CardMotionProfile) {
  // Returns a function that gets evaluated every frame
  const getIdleOffsets = (time: number) => {
    if (!SystemConfig.ENABLE_IDLE) {
      return { idleY: 0, idleRotX: 0, idleRotY: 0, idleRotZ: 0 };
    }

    const t = time * MotionConfig.globalSpeed;
    const { phase } = profile;

    // Use fractal noise for each axis independently to create organic drifting
    return {
      idleY: fractalNoise(t * profile.yFrequency, phase) * profile.yAmplitude,
      idleRotX: fractalNoise(t * profile.xRotationFrequency, phase + 2.4) * profile.xRotationAmplitude,
      idleRotY: fractalNoise(t * profile.yRotationFrequency, phase + 5.1) * profile.yRotationAmplitude,
      idleRotZ: fractalNoise(t * profile.zRotationFrequency, phase + 8.9) * profile.zRotationAmplitude,
    };
  };

  return getIdleOffsets;
}
