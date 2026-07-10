import React from 'react';
import Image from 'next/image';

interface AvatarProps {
  url?: string;
  alt: string;
}

export function Avatar({ url, alt }: AvatarProps) {
  if (!url) return null;

  return (
    <div className="relative w-[84px] h-[84px] overflow-hidden flex-shrink-0 bg-gray-100">
      <Image 
        src={url} 
        alt={alt} 
        fill 
        className="object-cover"
        sizes="84px"
      />
    </div>
  );
}
