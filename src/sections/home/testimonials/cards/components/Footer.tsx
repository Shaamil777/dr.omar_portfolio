import React from 'react';
import { Avatar } from './Avatar';
import { CountryFlag } from './CountryFlag';
import { TestimonialCardData } from '../types';

interface FooterProps {
  data: TestimonialCardData;
}

export function Footer({ data }: FooterProps) {
  return (
    <div className="flex flex-row items-stretch w-full gap-6">
      <Avatar url={data.avatarUrl} alt={data.name} />
      
      <div className="flex flex-col justify-between min-h-[84px] py-1">
        <h4 className="text-lg font-medium text-[#0a0a0a] leading-none tracking-tight">{data.name}</h4>
        
        {(data.role || data.country) && (
          <div className="flex flex-col leading-snug">
            {data.role && <p className="text-base font-light text-[#9ca3af]">{data.role}</p>}
            {data.country && <p className="text-base font-light text-[#9ca3af]">{data.country}</p>}
          </div>
        )}
      </div>

      <div className="ml-auto self-end pb-1">
        <CountryFlag url={data.flagUrl} countryName={data.country} />
      </div>
    </div>
  );
}
