import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const RetirementCalculator: React.FC = () => {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(50000);
  const [monthlyContrib, setMonthlyContrib] = useState(1000);
  const [annualReturn, setAnnualReturn] = useState(7);

  const data = useMemo(() => {
    const result = [];
    let balance = currentSavings;
    const yearsToGrow = retireAge - currentAge;
    
    for (let i = 0; i <= yearsToGrow; i++) {
      result.push({
        age: currentAge + i,
        balance: Math.round(balance)
      });
      // Compound monthly
      for (let m = 0; m < 12; m++) {
        balance += monthlyContrib;
        balance *= (1 + (annualReturn / 100 / 12));
      }
    }
    return result;
  }, [currentAge, retireAge, currentSavings, monthlyContrib, annualReturn]);

  const finalAmount = data[data.length - 1]?.balance || 0;
  
  const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="md:col-span-1 space-y-4">
            <div>
               <label className="text-sm font-medium text-slate-700 block mb-1">Current Age</label>
               <input type="number" value={currentAge} onChange={e => setCurrentAge(Number(e.target.value))} className="w-full p-2 border rounded" />
            </div>
            <div>
               <label className="text-sm font-medium text-slate-700 block mb-1">Retirement Age</label>
               <input type="number" value={retireAge} onChange={e => setRetireAge(Number(e.target.value))} className="w-full p-2 border rounded" />
            </div>
            <div>
               <label className="text-sm font-medium text-slate-700 block mb-1">Current Savings</label>
               <div className="relative">
                 <span className="absolute left-3 top-2 text-slate-400">$</span>
                 <input type="number" value={currentSavings} onChange={e => setCurrentSavings(Number(e.target.value))} className="w-full pl-6 p-2 border rounded" />
               </div>
            </div>
            <div>
               <label className="text-sm font-medium text-slate-700 block mb-1">Monthly Contribution</label>
               <div className="relative">
                 <span className="absolute left-3 top-2 text-slate-400">$</span>
                 <input type="number" value={monthlyContrib} onChange={e => setMonthlyContrib(Number(e.target.value))} className="w-full pl-6 p-2 border rounded" />
               </div>
            </div>
            <div>
               <label className="text-sm font-medium text-slate-700 block mb-1">Expected Return (%)</label>
               <input type="number" value={annualReturn} onChange={e => setAnnualReturn(Number(e.target.value))} className="w-full p-2 border rounded" />
            </div>
         </div>

         <div className="md:col-span-2 bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col">
            <div className="mb-6 text-center md:text-left">
               <span className="text-slate-500 text-sm">Projected Balance at Age {retireAge}</span>
               <h2 className="text-3xl md:text-4xl font-bold text-green-600">{formatMoney(finalAmount)}</h2>
            </div>
            <div className="flex-grow min-h-[300px]">
               <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                     <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                     <XAxis dataKey="age" stroke="#94a3b8" fontSize={12} />
                     <YAxis 
                        stroke="#94a3b8" 
                        fontSize={12} 
                        tickFormatter={(val) => `$${val / 1000}k`}
                     />
                     <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        formatter={(val: number) => [formatMoney(val), 'Balance']}
                     />
                     <Line type="monotone" dataKey="balance" stroke="#16a34a" strokeWidth={3} dot={false} activeDot={{ r: 6 }} />
                  </LineChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
};