import React from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, mobileMenuOpen, setMobileMenuOpen }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => handleNav('home')}
        >
          <div className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center">
            <i className="fa-solid fa-calculator"></i>
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">FinCalc<span className="text-blue-600">Pro</span></h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <button onClick={() => handleNav('home')} className="hover:text-blue-600 transition-colors">Calculators</button>
          <button onClick={() => handleNav('resources')} className="hover:text-blue-600 transition-colors">Resources</button>
          <button onClick={() => handleNav('about')} className="hover:text-blue-600 transition-colors">About</button>
          <button onClick={() => handleNav('home')} className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-600 text-xl p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full left-0 top-16 p-4 shadow-lg flex flex-col gap-4 z-50">
          <button onClick={() => handleNav('home')} className="text-left py-2 font-medium text-slate-700">Calculators</button>
          <button onClick={() => handleNav('resources')} className="text-left py-2 font-medium text-slate-700">Resources</button>
          <button onClick={() => handleNav('about')} className="text-left py-2 font-medium text-slate-700">About</button>
          <div className="h-px bg-slate-100 my-2"></div>
          <div className="ad-placeholder bg-slate-50 border-2 border-dashed border-slate-200 rounded h-16 flex items-center justify-center text-xs text-slate-400">
            Mobile Menu Ad
          </div>
        </div>
      )}
    </header>
  );
};