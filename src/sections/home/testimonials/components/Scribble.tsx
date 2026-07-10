export default function Scribble() {
  return (
    <div className="absolute top-[18vh] left-[5vw] z-20 pointer-events-none -rotate-[5deg]">
      <svg
        width="280"
        height="120"
        viewBox="0 0 280 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="roughpaper" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        {/* An organic hand-drawn scribble loop */}
        <path
          d="M30 80 C 10 30, 250 10, 260 60 C 270 110, 50 115, 30 75 Z"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90 drop-shadow-sm"
          filter="url(#roughpaper)"
        />
        <path
          d="M35 85 C 5 20, 260 0, 265 50 C 270 120, 40 125, 25 80 Z"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-60"
          filter="url(#roughpaper)"
        />
      </svg>
    </div>
  );
}
