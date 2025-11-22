export enum CalculatorId {
  LOAN_MORTGAGE = 'loan_mortgage',
  TAX_BUDGET = 'tax_budget',
  BUSINESS = 'business',
  RETIREMENT = 'retirement',
  INTEREST = 'interest',
  CURRENCY = 'currency',
  INSURANCE = 'insurance',
  PERSONAL = 'personal',
  INVESTMENT = 'investment',
  CREDIT_CARDS = 'credit_cards',
  REAL_ESTATE = 'real_estate'
}

export interface CalculatorCategory {
  id: CalculatorId;
  title: string;
  description: string;
  icon: string; // FontAwesome class string
  color: string; // Tailwind color class part (e.g., 'blue', 'green')
}
