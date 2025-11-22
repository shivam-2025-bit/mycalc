import React, { useState } from 'react';

export const BusinessCalculator: React.FC = () => {
  const [revenue, setRevenue] = useState(100000);
  const [cogs, setCogs] = useState(40000); // Cost of Goods Sold
  const [expenses, setExpenses] = useState(20000); // Operating Expenses

  const grossProfit = revenue - cogs;
  const grossMargin = (grossProfit / revenue) * 100;
  
  const netProfit = grossProfit - expenses;
  const netMargin = (netProfit / revenue) * 100;

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Total Revenue</label>
            <input type="number" value={revenue} onChange={e => setRevenue(Number(e.target.value))} className="w-full p-2 border rounded" />
         </div>
         <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Cost of Goods Sold (COGS)</label>
            <input type="number" value={cogs} onChange={e => setCogs(Number(e.target.value))} className="w-full p-2 border rounded" />
         </div>
         <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Operating Expenses</label>
            <input type="number" value={expenses} onChange={e => setExpenses(Number(e.target.value))} className="w-full p-2 border rounded" />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Gross Profit Metrics</h3>
            <div className="flex justify-between mb-2">
               <span className="text-slate-600">Gross Profit</span>
               <span className="font-bold">{formatMoney(grossProfit)}</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-slate-600">Gross Margin</span>
               <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded font-bold">{grossMargin.toFixed(2)}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 mt-4 rounded-full overflow-hidden">
               <div className="bg-blue-500 h-full" style={{ width: `${Math.min(grossMargin, 100)}%` }}></div>
            </div>
         </div>

         <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Net Profit Metrics</h3>
            <div className="flex justify-between mb-2">
               <span className="text-slate-600">Net Profit</span>
               <span className={`font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>{formatMoney(netProfit)}</span>
            </div>
            <div className="flex justify-between items-center">
               <span className="text-slate-600">Net Margin</span>
               <span className={`px-2 py-1 rounded font-bold ${netMargin >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{netMargin.toFixed(2)}%</span>
            </div>
            <div className="w-full bg-slate-200 h-2 mt-4 rounded-full overflow-hidden">
               <div className={`h-full ${netMargin >= 0 ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${Math.min(Math.abs(netMargin), 100)}%` }}></div>
            </div>
         </div>
      </div>
    </div>
  );
};