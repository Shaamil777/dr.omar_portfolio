export type SlotName = 'FAR_LEFT' | 'LEFT' | 'CENTER' | 'RIGHT' | 'FAR_RIGHT';

export interface Pose {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  opacity: number;
  zIndex: number;
}

export const POSES: Record<SlotName, Pose> = {
  FAR_LEFT: {
    position: [-8.0, 0.0, -5.0],
    rotation: [0, 0, 0.4],
    scale: 0.5,
    opacity: 0,
    zIndex: 1,
  },
  LEFT: {
    position: [-4.0, 0.5, -2.0], 
    rotation: [0, 0, 0.15], 
    scale: 0.8,
    opacity: 1,
    zIndex: 2,
  },
  CENTER: {
    position: [0, 0, 0], 
    rotation: [0, 0, 0],
    scale: 1.0, 
    opacity: 1,
    zIndex: 3,
  },
  RIGHT: {
    position: [4.0, 0.5, -2.0], 
    rotation: [0, 0, -0.2], 
    scale: 0.8,
    opacity: 1,
    zIndex: 2,
  },
  FAR_RIGHT: {
    position: [8.0, 0.0, -5.0],
    rotation: [0, 0, -0.4],
    scale: 0.5,
    opacity: 0,
    zIndex: 1,
  },
};
