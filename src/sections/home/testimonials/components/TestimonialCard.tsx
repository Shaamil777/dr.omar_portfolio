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
      className={`w-[460px] h-[520px] bg-white p-10 flex flex-col justify-between shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] relative select-none ${className}`}
      style={style}
    >
      {/* Quote */}
      <p className="text-[20px] leading-[1.4] text-black font-normal text-left overflow-hidden">
        {quote}
      </p>

      {/* Footer */}
      <div className="relative flex flex-row items-center gap-4 w-full h-[60px] mt-auto pt-6 border-t border-gray-200">

        {/* Avatar — ALWAYS rendered, hidden via CSS if missing */}
        <img
          src={avatarUrl || ''}
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className={`w-14 h-14 min-w-[56px] min-h-[56px] object-cover bg-gray-200 shrink-0 rounded-none ${avatarUrl ? 'block' : 'hidden'}`}
        />

        {/* Author Details */}
        <div className="flex flex-col justify-center">
          <span className="text-[16px] text-black font-medium leading-tight">{name}</span>
          <span className="text-[14px] text-gray-400 leading-tight mt-1">
            {role}{country ? `, ${country}` : ''}
          </span>
        </div>

        {/* Flag — ALWAYS rendered, hidden via CSS if missing */}
        <img
          src={flagUrl || ''}
          alt=""
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
          className={`absolute bottom-0 right-0 w-8 h-6 object-cover border border-gray-100 ${flagUrl ? 'block' : 'hidden'}`}
        />

      </div>
    </div>
  );
}
