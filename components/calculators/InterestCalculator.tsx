import React, { useState } from 'react';

export const InterestCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(5);
  const [type, setType] = useState<'simple' | 'compound'>('simple');

  let interest = 0;
  let total = 0;

  if (type === 'simple') {
    interest = principal * (rate / 100) * time;
    total = principal + interest;
  } else {
    total = principal * Math.pow((1 + rate / 100), time);
    interest = total - principal;
  }

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-4">
         <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Calculation Type</label>
            <div className="flex bg-slate-100 p-1 rounded-lg">
               <button onClick={() => setType('simple')} className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${type === 'simple' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}>Simple Interest</button>
               <button onClick={() => setType('compound')} className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${type === 'compound' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}>Compound Interest</button>
            </div>
         </div>
         <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Principal Amount</label>
            <input type="number" value={principal} onChange={e => setPrincipal(Number(e.target.value))} className="w-full p-2 border rounded" />
         </div>
         <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Annual Rate (%)</label>
            <input type="number" value={rate} onChange={e => setRate(Number(e.target.value))} className="w-full p-2 border rounded" />
         </div>
         <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Time Period (Years)</label>
            <input type="number" value={time} onChange={e => setTime(Number(e.target.value))} className="w-full p-2 border rounded" />
         </div>
      </div>

      <div className="bg-orange-50 rounded-xl p-8 flex flex-col justify-center items-center text-center border border-orange-100">
         <h3 className="text-slate-600 font-medium mb-2">Total Amount</h3>
         <div className="text-4xl font-bold text-orange-600 mb-6">{formatMoney(total)}</div>
         
         <div className="w-full space-y-2 text-sm">
            <div className="flex justify-between border-b border-orange-200 pb-2">
               <span className="text-slate-500">Principal</span>
               <span className="font-medium text-slate-800">{formatMoney(principal)}</span>
            </div>
            <div className="flex justify-between pt-2">
               <span className="text-slate-500">Total Interest</span>
               <span className="font-medium text-slate-800">{formatMoney(interest)}</span>
            </div>
         </div>
      </div>
    </div>
  );
};