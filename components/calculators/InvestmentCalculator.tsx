import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const InvestmentCalculator: React.FC = () => {
  const [initialDeposit, setInitialDeposit] = useState(10000);
  const [monthlyContrib, setMonthlyContrib] = useState(500);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(7);

  const data = useMemo(() => {
    const result = [];
    let totalInvested = initialDeposit;
    let balance = initialDeposit;
    
    for (let i = 1; i <= years; i++) {
      for (let m = 0; m < 12; m++) {
        balance += monthlyContrib;
        totalInvested += monthlyContrib;
        balance *= (1 + (rate / 100 / 12));
      }
      result.push({
        year: `Year ${i}`,
        Invested: Math.round(totalInvested),
        Interest: Math.round(balance - totalInvested)
      });
    }
    return result;
  }, [initialDeposit, monthlyContrib, years, rate]);

  const finalBalance = (data[data.length - 1]?.Invested || 0) + (data[data.length - 1]?.Interest || 0);
  const totalInterest = data[data.length - 1]?.Interest || 0;

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Initial Deposit</label>
            <div className="relative"><span className="absolute left-3 top-2 text-slate-400">$</span>
            <input type="number" value={initialDeposit} onChange={e => setInitialDeposit(Number(e.target.value))} className="w-full pl-6 p-2 border rounded" /></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Contribution</label>
            <div className="relative"><span className="absolute left-3 top-2 text-slate-400">$</span>
            <input type="number" value={monthlyContrib} onChange={e => setMonthlyContrib(Number(e.target.value))} className="w-full pl-6 p-2 border rounded" /></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Investment Period (Years)</label>
            <input type="number" value={years} onChange={e => setYears(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Annual Interest Rate (%)</label>
            <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
           <div className="mb-4">
              <p className="text-slate-500 text-sm">Total Balance</p>
              <p className="text-3xl font-bold text-emerald-600">{formatMoney(finalBalance)}</p>
           </div>
           <div className="mb-4">
              <p className="text-slate-500 text-sm">Total Interest Earned</p>
              <p className="text-xl font-semibold text-emerald-500">{formatMoney(totalInterest)}</p>
           </div>
           <div className="h-48 w-full">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={data}>
                 <CartesianGrid strokeDasharray="3 3" />
                 <XAxis dataKey="year" hide />
                 <Tooltip formatter={(val: number) => formatMoney(val)} />
                 <Legend />
                 <Bar dataKey="Invested" stackId="a" fill="#94a3b8" />
                 <Bar dataKey="Interest" stackId="a" fill="#10b981" />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>
    </div>
  );
};