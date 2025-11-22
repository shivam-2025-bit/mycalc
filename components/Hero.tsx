import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 lg:py-20 border-b border-slate-100">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-6">
          <i className="fa-solid fa-star"></i> Free Financial Tools
        </div>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Smart Tools for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Money and Investments</span>
        </h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
          Calculate loans, estimate taxes, plan retirement, and more with our comprehensive suite of professional-grade financial calculators.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#calculators" className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Explore Calculators
          </a>
          <button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-700 border border-slate-200 font-semibold rounded-lg hover:bg-slate-50 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};