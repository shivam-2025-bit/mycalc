import React, { useState } from 'react';
import { getFinancialInsight } from '../services/geminiService';

export const FinancialAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse('');
    
    try {
      const result = await getFinancialInsight(query);
      setResponse(result);
    } catch (e) {
      setResponse("Error fetching insight.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10 text-9xl transform translate-x-1/4 -translate-y-1/4">
        <i className="fa-solid fa-robot"></i>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center animate-pulse">
            <i className="fa-solid fa-sparkles text-white text-xs"></i>
          </div>
          <h3 className="font-bold text-lg">Ask FinCalc AI</h3>
        </div>

        <p className="text-slate-400 text-sm mb-4">
          Confused by a term? Ask me anything about finance.
        </p>

        <div className="space-y-3">
          <textarea 
            className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none h-24"
            placeholder="e.g., What is amortization?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></textarea>

          <button 
            onClick={handleAsk}
            disabled={loading || !query}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <><i className="fa-solid fa-circle-notch fa-spin"></i> Thinking...</>
            ) : (
              <>Get Answer <i className="fa-solid fa-paper-plane"></i></>
            )}
          </button>
        </div>

        {response && (
          <div className="mt-4 p-3 bg-slate-800/80 rounded-lg border border-slate-700">
            <p className="text-sm text-slate-200 leading-relaxed whitespace-pre-wrap">{response}</p>
            <div className="mt-2 text-[10px] text-slate-500 uppercase tracking-wider">AI Generated • Educational Only</div>
          </div>
        )}
      </div>
    </div>
  );
};