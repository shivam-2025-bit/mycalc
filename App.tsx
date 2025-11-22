import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { CalculatorGrid } from './components/CalculatorGrid';
import { CalculatorLayout } from './components/CalculatorLayout';
import { AdPlaceholder } from './components/AdPlaceholder';
import { FinancialAI } from './components/FinancialAI';
import { MortgageCalculator } from './components/calculators/MortgageCalculator';
import { RetirementCalculator } from './components/calculators/RetirementCalculator';
import { InvestmentCalculator } from './components/calculators/InvestmentCalculator';
import { TaxBudgetCalculator } from './components/calculators/TaxBudgetCalculator';
import { BusinessCalculator } from './components/calculators/BusinessCalculator';
import { InterestCalculator } from './components/calculators/InterestCalculator';
import { CurrencyCalculator } from './components/calculators/CurrencyCalculator';
import { InsuranceCalculator } from './components/calculators/InsuranceCalculator';
import { PersonalFinanceCalculator } from './components/calculators/PersonalFinanceCalculator';
import { CreditCardCalculator } from './components/calculators/CreditCardCalculator';
import { RealEstateCalculator } from './components/calculators/RealEstateCalculator';
import { ResourcesPage } from './components/pages/ResourcesPage';
import { AboutPage } from './components/pages/AboutPage';
import { CalculatorCategory, CalculatorId } from './types';
import { CATEGORIES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<CalculatorId | 'home' | 'resources' | 'about'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeCategory = CATEGORIES.find(c => c.id === currentView);

  const renderCalculator = () => {
    switch (currentView) {
      case CalculatorId.LOAN_MORTGAGE: return <MortgageCalculator />;
      case CalculatorId.RETIREMENT: return <RetirementCalculator />;
      case CalculatorId.INVESTMENT: return <InvestmentCalculator />;
      case CalculatorId.TAX_BUDGET: return <TaxBudgetCalculator />;
      case CalculatorId.BUSINESS: return <BusinessCalculator />;
      case CalculatorId.INTEREST: return <InterestCalculator />;
      case CalculatorId.CURRENCY: return <CurrencyCalculator />;
      case CalculatorId.INSURANCE: return <InsuranceCalculator />;
      case CalculatorId.PERSONAL: return <PersonalFinanceCalculator />;
      case CalculatorId.CREDIT_CARDS: return <CreditCardCalculator />;
      case CalculatorId.REAL_ESTATE: return <RealEstateCalculator />;
      default: return null;
    }
  };

  const renderMainContent = () => {
    if (currentView === 'home') {
      return (
        <>
          <Hero />
          <div className="container mx-auto px-4 py-8">
            <AdPlaceholder className="mb-8 h-24 w-full" label="Top Banner Ad" />
            <CalculatorGrid onSelectCategory={(id) => setCurrentView(id)} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
               <AdPlaceholder className="h-64 w-full" label="Sidebar / Native Ad" />
               <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Why use FinCalc Pro?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Our tools are designed to give you instant estimates for complex financial scenarios. 
                    Whether you are planning a mortgage, saving for retirement, or calculating tax obligations, 
                    FinCalc Pro provides the initial figures you need to plan ahead.
                  </p>
               </div>
            </div>
          </div>
        </>
      );
    }

    if (currentView === 'resources') {
      return <ResourcesPage />;
    }

    if (currentView === 'about') {
      return <AboutPage />;
    }

    // Calculator View
    return (
      <div className="container mx-auto px-4 py-8">
        <AdPlaceholder className="mb-8 h-24 w-full" label="Top Banner Ad" />
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
             {activeCategory && (
               <CalculatorLayout 
                  title={activeCategory.title} 
                  description={activeCategory.description}
                  icon={activeCategory.icon}
                  onBack={() => setCurrentView('home')}
                >
                  {renderCalculator()}
               </CalculatorLayout>
             )}
          </div>
          <div className="w-full lg:w-1/3 space-y-6">
            <FinancialAI />
            <AdPlaceholder className="h-[600px] w-full sticky top-24" label="Vertical Sidebar Ad" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header 
        onNavigate={(page) => setCurrentView(page as any)} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="flex-grow">
        {renderMainContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;