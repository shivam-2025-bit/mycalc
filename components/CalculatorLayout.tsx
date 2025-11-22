import React from 'react';

interface CalculatorLayoutProps {
  title: string;
  description: string;
  icon: string;
  onBack: () => void;
  children: React.ReactNode;
}

export const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({ title, description, icon, onBack, children }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-50 border-b border-slate-100 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button 
          onClick={onBack}
          className="bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-200 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <div className="flex-grow">
           <div className="flex items-center gap-3 mb-1">
              <i className={`fa-solid ${icon} text-blue-600`}></i>
              <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
           </div>
           <p className="text-slate-500 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};