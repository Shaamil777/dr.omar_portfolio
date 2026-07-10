import React from 'react';
import Image from 'next/image';
import { BACKGROUND } from './config';

export default function SpeechBalloon() {
  return (
    <>
      <style>{`
        @keyframes float-drift {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        .animate-float-drift {
          animation: float-drift 6s ease-in-out infinite;
        }
      `}</style>

      {/* Desktop Balloon */}
      <div className={`hidden md:block z-10 animate-float-drift pointer-events-none ${BACKGROUND.balloon.desktop}`}>
        <Image src="/balloon.png" alt="" width={400} height={200} className="w-full h-auto drop-shadow-xl" aria-hidden="true" />
      </div>

      {/* Mobile Balloon */}
      <div className={`block md:hidden z-10 animate-float-drift pointer-events-none ${BACKGROUND.balloon.mobile}`}>
        <Image src="/balloon.png" alt="" width={400} height={200} className="w-full h-auto drop-shadow-xl" aria-hidden="true" />
      </div>
    </>
  );
}
