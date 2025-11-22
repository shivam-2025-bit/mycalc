import React, { useState } from 'react';

export const InsuranceCalculator: React.FC = () => {
  const [annualIncome, setAnnualIncome] = useState(60000);
  const [yearsSupport, setYearsSupport] = useState(20);
  const [debt, setDebt] = useState(150000); // Mortgage + other debts
  const [savings, setSavings] = useState(50000);
  const [finalExpenses, setFinalExpenses] = useState(15000);

  const needed = (annualIncome * yearsSupport) + debt + finalExpenses - savings;

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="grid md:grid-cols-2 gap-8">
       <div className="space-y-4">
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Annual Income to Replace</label>
             <input type="number" value={annualIncome} onChange={e => setAnnualIncome(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Years of Support Needed</label>
             <input type="number" value={yearsSupport} onChange={e => setYearsSupport(Number(e.target.value))} className="w-full p-2 border rounded" />
             <p className="text-xs text-slate-500 mt-1">E.g., until youngest child graduates college.</p>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Total Debt (Mortgage, Loans)</label>
             <input type="number" value={debt} onChange={e => setDebt(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Existing Savings & Insurance</label>
             <input type="number" value={savings} onChange={e => setSavings(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Est. Final Expenses (Funeral, etc.)</label>
             <input type="number" value={finalExpenses} onChange={e => setFinalExpenses(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
       </div>

       <div className="flex items-center">
          <div className="bg-rose-50 w-full p-8 rounded-xl border border-rose-100 text-center">
             <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                <i className="fa-solid fa-shield-heart"></i>
             </div>
             <h3 className="text-lg font-semibold text-slate-700 mb-2">Recommended Coverage</h3>
             <p className="text-4xl font-bold text-rose-600 mb-4">{formatMoney(needed > 0 ? needed : 0)}</p>
             <p className="text-sm text-slate-500">
                This estimates the life insurance coverage needed to pay off debts and replace your income for {yearsSupport} years.
             </p>
          </div>
       </div>
    </div>
  );
};