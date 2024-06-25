export interface Expense {
    id: number;
    merchant: string;
    amount: number;
    description: string;
    date: string;
    category: 'training' | 'travel' | 'meal';
    status: string;
  }
  