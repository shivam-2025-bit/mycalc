import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const TaxBudgetCalculator: React.FC = () => {
  const [income, setIncome] = useState(4000); // Monthly net income

  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;

  const data = [
    { name: 'Needs (50%)', value: needs, color: '#3b82f6' },
    { name: 'Wants (30%)', value: wants, color: '#f43f5e' },
    { name: 'Savings (20%)', value: savings, color: '#22c55e' },
  ];

  const formatMoney = (val: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Monthly After-Tax Income</label>
        <div className="relative mb-6">
           <span className="absolute left-3 top-3 text-slate-400">$</span>
           <input 
             type="number" 
             value={income} 
             onChange={(e) => setIncome(Number(e.target.value))} 
             className="w-full pl-8 p-3 border border-slate-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 outline-none"
           />
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-blue-800">Needs</span>
              <span className="font-bold text-blue-800">{formatMoney(needs)}</span>
            </div>
            <p className="text-xs text-blue-600">Housing, groceries, utilities, insurance.</p>
          </div>
          <div className="p-4 bg-rose-50 rounded-lg border border-rose-100">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-rose-800">Wants</span>
              <span className="font-bold text-rose-800">{formatMoney(wants)}</span>
            </div>
            <p className="text-xs text-rose-600">Dining out, hobbies, entertainment.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border border-green-100">
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-green-800">Savings</span>
              <span className="font-bold text-green-800">{formatMoney(savings)}</span>
            </div>
            <p className="text-xs text-green-600">Emergency fund, retirement, debt repayment.</p>
          </div>
        </div>
      </div>

      <div className="h-64 md:h-80">
         <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(val: number) => formatMoney(val)} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
         </ResponsiveContainer>
      </div>
    </div>
  );
};