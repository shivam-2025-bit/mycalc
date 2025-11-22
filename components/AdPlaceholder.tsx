import React from 'react';

interface AdPlaceholderProps {
  className?: string;
  label?: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ className = "", label = "Advertisement" }) => {
  return (
    <div className={`ad-banner bg-slate-100 border border-slate-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden ${className}`}>
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider z-10">{label}</div>
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
  );
};