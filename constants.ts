import { CalculatorCategory, CalculatorId } from './types';

export const CATEGORIES: CalculatorCategory[] = [
  {
    id: CalculatorId.LOAN_MORTGAGE,
    title: "Loan & Mortgage",
    description: "Calculate monthly payments, amortization schedules, and refinance savings.",
    icon: "fa-house-chimney",
    color: "blue"
  },
  {
    id: CalculatorId.RETIREMENT,
    title: "Retirement & Pension",
    description: "Plan your retirement savings and 401(k) growth over time.",
    icon: "fa-piggy-bank",
    color: "green"
  },
  {
    id: CalculatorId.INVESTMENT,
    title: "Investment & Savings",
    description: "Compound interest, CD rates, and investment return projections.",
    icon: "fa-chart-line",
    color: "emerald"
  },
  {
    id: CalculatorId.TAX_BUDGET,
    title: "Tax & Budget",
    description: "Income tax estimators, salary calculations, and budget planning tools.",
    icon: "fa-file-invoice-dollar",
    color: "red"
  },
  {
    id: CalculatorId.BUSINESS,
    title: "Business Financials",
    description: "ROI, profit margin, break-even analysis, and startup costs.",
    icon: "fa-briefcase",
    color: "slate"
  },
  {
    id: CalculatorId.INTEREST,
    title: "Interest Calculations",
    description: "Simple and compound interest calculators for various scenarios.",
    icon: "fa-percent",
    color: "orange"
  },
  {
    id: CalculatorId.CURRENCY,
    title: "Currency & Exchange",
    description: "Real-time currency conversion and exchange rate history.",
    icon: "fa-money-bill-transfer",
    color: "cyan"
  },
  {
    id: CalculatorId.INSURANCE,
    title: "Insurance",
    description: "Life, auto, and home insurance cost estimators and comparison.",
    icon: "fa-shield-heart",
    color: "rose"
  },
  {
    id: CalculatorId.PERSONAL,
    title: "Personal Finance",
    description: "Net worth, debt payoff strategies, and emergency fund calculators.",
    icon: "fa-wallet",
    color: "indigo"
  },
  {
    id: CalculatorId.CREDIT_CARDS,
    title: "Credit Cards",
    description: "Payoff timelines, balance transfer savings, and rewards value.",
    icon: "fa-credit-card",
    color: "violet"
  },
  {
    id: CalculatorId.REAL_ESTATE,
    title: "Real Estate Investing",
    description: "Cap rate, cash on cash return, and rental property analysis.",
    icon: "fa-building",
    color: "sky"
  }
];