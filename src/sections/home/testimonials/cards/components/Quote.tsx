import React from 'react';

interface QuoteProps {
  text: string;
}

export function Quote({ text }: QuoteProps) {
  return (
    <div className="text-[36px] md:text-[46px] leading-[1.2] tracking-[-0.03em] text-[#0a0a0a] font-medium whitespace-pre-wrap">
      {text}
    </div>
  );
}
