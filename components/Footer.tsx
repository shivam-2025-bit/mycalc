import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <i className="fa-solid fa-calculator text-blue-500"></i>
              <span className="text-xl font-bold">FinCalc Pro</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 max-w-md">
              FinCalc Pro offers free, high-quality financial tools to help you make informed decisions about your money, loans, and investments.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">All Calculators</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="bg-slate-800/50 p-4 rounded text-xs text-slate-400 mb-6">
            <strong className="text-slate-300 block mb-1">Disclaimer:</strong>
            The calculations provided by FinCalc Pro are for illustrative and educational purposes only. 
            They are not financial advice. Results are estimates based on information you provide and may not reflect actual results.
            Please consult with a qualified financial advisor, accountant, or attorney before making any financial decisions.
          </div>
          <div className="text-center text-xs">
            &copy; {new Date().getFullYear()} FinCalc Pro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};