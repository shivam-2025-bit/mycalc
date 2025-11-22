import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Empowering Financial Confidence</h2>
        <p className="text-xl text-slate-600 leading-relaxed">
          At FinCalc Pro, we believe that financial clarity shouldn't be complicated. 
          Our mission is to provide accessible, professional-grade tools that help you make smarter money decisions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
           <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              <i className="fa-solid fa-check"></i>
           </div>
           <h3 className="font-bold text-slate-900 mb-2">Accuracy First</h3>
           <p className="text-slate-500 text-sm">Our algorithms are rigorously tested against banking standards to ensure reliable estimates.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
           <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              <i className="fa-solid fa-user-shield"></i>
           </div>
           <h3 className="font-bold text-slate-900 mb-2">Privacy Focused</h3>
           <p className="text-slate-500 text-sm">We process calculations in your browser. Your personal financial data never hits our servers.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
           <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              <i className="fa-solid fa-lightbulb"></i>
           </div>
           <h3 className="font-bold text-slate-900 mb-2">Educational</h3>
           <p className="text-slate-500 text-sm">More than just numbers, we provide context and explanations to help you understand the 'why'.</p>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto text-center">
         <h3 className="text-2xl font-bold mb-4">Have questions or feedback?</h3>
         <p className="text-slate-400 mb-8">We are constantly improving our tools based on user input. Reach out to our team.</p>
         <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors shadow-lg">Contact Us</button>
      </div>
    </div>
  );
};