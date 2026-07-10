import React from 'react';
import Image from 'next/image';

interface CountryFlagProps {
  url?: string;
  countryName?: string;
}

export function CountryFlag({ url, countryName }: CountryFlagProps) {
  if (!url) return null;

  return (
    <div className="relative w-12 h-8 ml-auto flex-shrink-0">
      <Image 
        src={url} 
        alt={`${countryName || 'Country'} flag`}
        fill
        className="object-contain object-right"
        sizes="48px"
      />
    </div>
  );
}
