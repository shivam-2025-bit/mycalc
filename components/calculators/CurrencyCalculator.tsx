import React, { useState } from 'react';

const RATES: {[key: string]: number} = {
  'USD': 1,
  'EUR': 0.92,
  'GBP': 0.79,
  'JPY': 150.4,
  'CAD': 1.35,
  'AUD': 1.52,
  'CHF': 0.88,
  'CNY': 7.19
};

export const CurrencyCalculator: React.FC = () => {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');

  const converted = (amount / RATES[from]) * RATES[to];

  return (
    <div className="max-w-lg mx-auto">
       <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Amount</label>
             <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} className="w-full p-3 border rounded-lg text-lg" />
          </div>
          
          <div className="grid grid-cols-[1fr,auto,1fr] gap-2 items-center">
             <div>
                <label className="block text-xs text-slate-500 mb-1">From</label>
                <select value={from} onChange={e => setFrom(e.target.value)} className="w-full p-2 border rounded font-semibold bg-white">
                   {Object.keys(RATES).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
             </div>
             <div className="text-slate-400 mt-4"><i className="fa-solid fa-arrow-right"></i></div>
             <div>
                <label className="block text-xs text-slate-500 mb-1">To</label>
                <select value={to} onChange={e => setTo(e.target.value)} className="w-full p-2 border rounded font-semibold bg-white">
                   {Object.keys(RATES).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
             </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-slate-200 text-center shadow-sm">
             <p className="text-slate-500 text-sm mb-1">{amount} {from} =</p>
             <p className="text-3xl font-bold text-slate-900">{converted.toFixed(2)} {to}</p>
             <p className="text-xs text-slate-400 mt-2">Exchange rate: 1 {from} = {(RATES[to]/RATES[from]).toFixed(4)} {to}</p>
          </div>

          <div className="text-xs text-slate-400 text-center italic">
             * Rates are approximate and for demonstration only.
          </div>
       </div>
    </div>
  );
};