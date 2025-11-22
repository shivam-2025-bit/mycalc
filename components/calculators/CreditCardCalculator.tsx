import React, { useState } from 'react';

export const CreditCardCalculator: React.FC = () => {
  const [balance, setBalance] = useState(5000);
  const [apr, setApr] = useState(18.9);
  const [payment, setPayment] = useState(150);

  // r = interest rate per period (monthly)
  const r = apr / 100 / 12;
  
  let months = 0;
  let totalInterest = 0;
  let isPayable = true;

  // Check if payment covers interest
  if (balance * r >= payment) {
     isPayable = false;
  } else {
     // N = -log(1 - (r * P) / M) / log(1 + r)
     const n = -Math.log(1 - (r * balance) / payment) / Math.log(1 + r);
     months = Math.ceil(n);
     totalInterest = (months * payment) - balance;
     // Edge case correction if exact formula overshoots slightly on last payment
     if (totalInterest < 0) totalInterest = 0; 
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
       <div className="space-y-5">
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Card Balance</label>
             <div className="relative"><span className="absolute left-3 top-2 text-slate-400">$</span>
             <input type="number" value={balance} onChange={e => setBalance(Number(e.target.value))} className="w-full pl-6 p-2 border rounded" /></div>
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Interest Rate (APR %)</label>
             <input type="number" value={apr} onChange={e => setApr(Number(e.target.value))} className="w-full p-2 border rounded" />
          </div>
          <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Monthly Payment</label>
             <div className="relative"><span className="absolute left-3 top-2 text-slate-400">$</span>
             <input type="number" value={payment} onChange={e => setPayment(Number(e.target.value))} className="w-full pl-6 p-2 border rounded" /></div>
          </div>
       </div>

       <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col justify-center">
          {!isPayable ? (
             <div className="text-red-600 text-center">
                <i className="fa-solid fa-triangle-exclamation text-3xl mb-2"></i>
                <p className="font-bold">Payment too low</p>
                <p className="text-sm mt-1">Your monthly payment is less than the interest accruing. You will never pay off this debt at this rate.</p>
             </div>
          ) : (
             <div className="space-y-6 text-center">
                <div>
                   <p className="text-slate-500 text-sm">Time to Payoff</p>
                   <p className="text-3xl font-bold text-violet-600">{Math.floor(months / 12)} Years, {months % 12} Months</p>
                </div>
                <div className="border-t border-slate-200 pt-4">
                   <p className="text-slate-500 text-sm">Total Interest Paid</p>
                   <p className="text-xl font-semibold text-slate-800">${Math.round(totalInterest).toLocaleString()}</p>
                </div>
             </div>
          )}
       </div>
    </div>
  );
};