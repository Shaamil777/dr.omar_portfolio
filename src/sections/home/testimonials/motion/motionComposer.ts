import * as THREE from 'three';

/**
 * The Motion Composer
 * 
 * Pipeline:
 * Base Target Pose -> Add Idle Layer -> Final Transform
 * 
 * Note: Camera Parallax is no longer handled here. It is exclusively owned by CameraRig.
 */
export function composeTransforms(
  targetPosition: THREE.Vector3,
  targetRotation: THREE.Euler,
  targetScale: number,
  idleOffsets: { idleY: number; idleRotX: number; idleRotY: number; idleRotZ: number }
): { position: THREE.Vector3; rotation: THREE.Euler; scale: number } {
  
  // Compose Final Transforms
  const finalPosition = new THREE.Vector3(
    targetPosition.x,
    targetPosition.y + idleOffsets.idleY,
    targetPosition.z
  );

  const finalRotation = new THREE.Euler(
    targetRotation.x + idleOffsets.idleRotX,
    targetRotation.y + idleOffsets.idleRotY,
    targetRotation.z + idleOffsets.idleRotZ
  );

  return {
    position: finalPosition,
    rotation: finalRotation,
    scale: targetScale,
  };
}
