import React from 'react';
import Typography from './Typography';
import SpeechBalloon from './SpeechBalloon';
import { BACKGROUND } from './config';

export default function Background() {
  return (
    <div 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none"
      style={{ backgroundColor: BACKGROUND.color }}
    >
      <Typography />
      <SpeechBalloon />
    </div>
  );
}
