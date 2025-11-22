import React, { useState } from 'react';

export const PersonalFinanceCalculator: React.FC = () => {
  const [expenses, setExpenses] = useState(3000);
  const [months, setMonths] = useState(6);

  const target = expenses * months;

  return (
    <div className="max-w-xl mx-auto space-y-8">
       <div className="text-center">
          <h3 className="text-lg font-medium text-slate-800">Emergency Fund Calculator</h3>
          <p className="text-slate-500 text-sm">Determine how much you should save for a rainy day.</p>
       </div>

       <div className="space-y-6 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Essential Expenses</label>
             <div className="relative">
                <span className="absolute left-3 top-2 text-slate-400">$</span>
                <input type="number" value={expenses} onChange={e => setExpenses(Number(e.target.value))} className="w-full pl-6 p-2 border rounded" />
             </div>
          </div>
          
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-2">Coverage Duration: <span className="text-blue-600 font-bold">{months} Months</span></label>
             <input 
               type="range" 
               min="1" 
               max="12" 
               step="1" 
               value={months} 
               onChange={e => setMonths(Number(e.target.value))} 
               className="w-full accent-blue-600"
             />
             <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>1 Month</span>
                <span>6 Months</span>
                <span>1 Year</span>
             </div>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg text-center border border-indigo-100 mt-4">
             <span className="block text-slate-500 text-sm mb-1">Target Savings Goal</span>
             <span className="block text-4xl font-bold text-indigo-600">${target.toLocaleString()}</span>
          </div>
       </div>
       
       <div className="text-sm text-slate-600 bg-slate-100 p-4 rounded-lg">
          <i className="fa-solid fa-circle-info text-slate-400 mr-2"></i>
          <strong>Tip:</strong> Most financial experts recommend keeping 3 to 6 months of essential living expenses in a high-yield savings account.
       </div>
    </div>
  );
};