import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const MortgageCalculator: React.FC = () => {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(3000); // Annual
  const [homeInsurance, setHomeInsurance] = useState(1200); // Annual
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [breakdown, setBreakdown] = useState<any[]>([]);

  useEffect(() => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    // Mortgage P&I Formula: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]
    let mortgagePI = 0;
    if (interestRate > 0) {
        mortgagePI = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
        mortgagePI = principal / numberOfPayments;
    }

    const monthlyTax = propertyTax / 12;
    const monthlyInsurance = homeInsurance / 12;
    const totalMonthly = mortgagePI + monthlyTax + monthlyInsurance;

    setMonthlyPayment(totalMonthly);

    setBreakdown([
      { name: 'Principal & Interest', value: Math.round(mortgagePI), color: '#2563eb' },
      { name: 'Property Tax', value: Math.round(monthlyTax), color: '#0ea5e9' },
      { name: 'Home Insurance', value: Math.round(monthlyInsurance), color: '#64748b' },
    ]);
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance]);

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Home Price</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-slate-400">$</span>
            <input 
              type="number" 
              value={homePrice} 
              onChange={(e) => setHomePrice(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <input type="range" min="50000" max="2000000" step="1000" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="w-full mt-2 accent-blue-600" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Down Payment</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-slate-400">$</span>
              <input 
                type="number" 
                value={downPayment} 
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full pl-8 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">% of Price</label>
             <div className="py-2 px-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600">
                {Math.round((downPayment / homePrice) * 100)}%
             </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Loan Term</label>
            <select 
              value={loanTerm} 
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            >
              <option value={15}>15 Years</option>
              <option value={20}>20 Years</option>
              <option value={30}>30 Years</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (%)</label>
            <input 
              type="number" 
              step="0.1"
              value={interestRate} 
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-slate-100">
           <h4 className="text-sm font-semibold text-slate-900 mb-3">Taxes & Insurance (Annual)</h4>
           <div className="grid grid-cols-2 gap-4">
             <div>
                <label className="block text-xs text-slate-500 mb-1">Property Tax</label>
                <div className="relative">
                  <span className="absolute left-2 top-2 text-xs text-slate-400">$</span>
                  <input type="number" value={propertyTax} onChange={(e) => setPropertyTax(Number(e.target.value))} className="w-full pl-6 pr-2 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
             </div>
             <div>
                <label className="block text-xs text-slate-500 mb-1">Home Insurance</label>
                <div className="relative">
                  <span className="absolute left-2 top-2 text-xs text-slate-400">$</span>
                  <input type="number" value={homeInsurance} onChange={(e) => setHomeInsurance(Number(e.target.value))} className="w-full pl-6 pr-2 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Results */}
      <div className="bg-slate-50 rounded-xl p-6 flex flex-col justify-center">
         <div className="text-center mb-8">
            <p className="text-slate-500 font-medium mb-1">Estimated Monthly Payment</p>
            <h3 className="text-4xl font-extrabold text-slate-900">{formatMoney(monthlyPayment)}</h3>
         </div>

         <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={breakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {breakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => formatMoney(value)} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
         </div>

         <div className="mt-6 space-y-3">
            {breakdown.map((item, i) => (
               <div key={i} className="flex justify-between text-sm">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                     <span className="text-slate-600">{item.name}</span>
                  </div>
                  <span className="font-semibold text-slate-800">{formatMoney(item.value)}</span>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};