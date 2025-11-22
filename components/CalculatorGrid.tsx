import React from 'react';
import { CATEGORIES } from '../constants';
import { CalculatorId } from '../types';

interface CalculatorGridProps {
  onSelectCategory: (id: CalculatorId) => void;
}

export const CalculatorGrid: React.FC<CalculatorGridProps> = ({ onSelectCategory }) => {
  return (
    <section id="calculators">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-slate-900">Browse Categories</h3>
        <span className="text-sm text-slate-500">{CATEGORIES.length} Tools Available</span>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {CATEGORIES.map((category, index) => (
          <React.Fragment key={category.id}>
            {/* Native Ad Insertion Logic: Insert after the 4th item */}
            {index === 4 && (
               <div className="ad-native sm:col-span-2 lg:col-span-1 xl:col-span-1 bg-slate-100 rounded-xl border border-slate-200 p-6 flex flex-col items-center justify-center text-center">
                 <span className="text-xs font-bold text-slate-400 uppercase mb-2">Sponsored</span>
                 <p className="text-slate-500 text-sm mb-3">Check out the best rates for high-yield savings accounts today.</p>
                 <button className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-600 px-3 py-1 rounded transition-colors">Learn More</button>
               </div>
            )}
            
            <div 
              onClick={() => onSelectCategory(category.id)}
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50 transition-all cursor-pointer flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-lg bg-${category.color}-100 text-${category.color}-600 flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fa-solid ${category.icon}`}></i>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">{category.title}</h4>
              <p className="text-sm text-slate-500 mb-4 flex-grow">{category.description}</p>
              <div className="flex items-center text-blue-600 text-sm font-medium mt-auto">
                Open Calculator <i className="fa-solid fa-arrow-right ml-2 text-xs group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};