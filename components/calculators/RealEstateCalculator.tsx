import React, { useState } from 'react';

export const RealEstateCalculator: React.FC = () => {
  const [price, setPrice] = useState(250000);
  const [rent, setRent] = useState(2200); // Monthly
  const [expenses, setExpenses] = useState(800); // Monthly (maintenance, management, taxes, insurance)

  const noi = (rent - expenses) * 12; // Net Operating Income
  const capRate = (noi / price) * 100;

  return (
    <div className="space-y-8">
       <div className="grid md:grid-cols-3 gap-6">
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Purchase Price</label>
             <input type="number" value={price} onChange={e => setPrice(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Rental Income</label>
             <input type="number" value={rent} onChange={e => setRent(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Expenses</label>
             <input type="number" value={expenses} onChange={e => setExpenses(Number(e.target.value))} className="w-full p-2 border rounded" />
             <p className="text-[10px] text-slate-400 mt-1">Includes tax, insurance, repairs, vacancy.</p>
          </div>
       </div>

       <div className="bg-sky-50 border border-sky-100 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
             <div>
                <p className="text-sky-800 text-sm font-semibold mb-1">Annual NOI</p>
                <p className="text-2xl font-bold text-sky-900">${noi.toLocaleString()}</p>
                <p className="text-xs text-sky-600 mt-1">Net Operating Income</p>
             </div>
             <div className="md:border-l md:border-r border-sky-200 px-4">
                <p className="text-sky-800 text-sm font-semibold mb-1">Cap Rate</p>
                <p className="text-4xl font-bold text-blue-600">{capRate.toFixed(2)}%</p>
                <p className="text-xs text-sky-600 mt-1">Return on Investment (unleveraged)</p>
             </div>
             <div>
                <p className="text-sky-800 text-sm font-semibold mb-1">Monthly Cash Flow</p>
                <p className="text-2xl font-bold text-sky-900">${(rent - expenses).toLocaleString()}</p>
                <p className="text-xs text-sky-600 mt-1">Before Mortgage Payment</p>
             </div>
          </div>
       </div>
    </div>
  );
};