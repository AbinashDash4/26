import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16'
  };

  return (
    <div className={`inline-flex items-center cursor-pointer select-none group ${className}`}>
      {/* 
        User's Exact Uploaded PNG Image File (/logo.png)
        Rendered as an image element with background pill container for crisp legibility in both light and dark mode.
      */}
      <div className="bg-white/90 dark:bg-slate-900/90 px-3 py-1.5 rounded-2xl border border-slate-200/60 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:border-brand-500/50 group-hover:shadow-brand-500/10 flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Megasus Logo"
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
    </div>
  );
};
