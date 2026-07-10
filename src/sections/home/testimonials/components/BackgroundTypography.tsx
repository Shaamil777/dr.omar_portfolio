import { Anton } from 'next/font/google';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

export default function BackgroundTypography() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
      <h1
        className={`${anton.className} text-black opacity-100 absolute top-[5vh]`}
        style={{
          fontSize: '22vw', // Reduced to prevent cutoff
          letterSpacing: '-0.06em',
          lineHeight: '0.8',
          transform: 'scaleY(1.4)',
          transformOrigin: 'top',
          whiteSpace: 'nowrap',
          textTransform: 'uppercase'
        }}
      >
        TESTIMONIALS
      </h1>
    </div>
  );
}
