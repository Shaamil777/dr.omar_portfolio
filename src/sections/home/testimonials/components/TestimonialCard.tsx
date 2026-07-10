import Image from 'next/image';
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  country: string;
  avatarUrl: string;
  flagUrl: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function TestimonialCard({
  quote,
  name,
  role,
  country,
  avatarUrl,
  flagUrl,
  className = '',
  style,
}: TestimonialCardProps) {
  return (
    <div
      className={`w-[460px] h-[520px] bg-white p-12 shadow-2xl flex flex-col justify-between select-none rounded-none ${className}`}
      style={style}
    >
      <div className="flex-grow">
        <p className="text-[20px] leading-[1.45] text-black font-normal">
          {quote}
        </p>
      </div>

      <div className="relative">
        <div className="w-full h-[1px] bg-gray-200 mb-6"></div>
        <div className="flex flex-row items-center gap-4 relative w-full">
          
          <div className="w-14 h-14 bg-gray-300 shrink-0">
            <Image src={avatarUrl} fill unoptimized className="object-cover" alt="" />
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-[16px] text-black font-medium">{name}</h4>
            <p className="text-[14px] text-gray-400 mt-1">{role}{country ? `, ${country}` : ''}</p>
          </div>
          
          <img src={flagUrl} className="absolute bottom-0 right-0 w-8 h-6 border border-gray-100 object-cover" />

        </div>
      </div>
    </div>
  );
}
