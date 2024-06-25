import { Expense } from "../types/Expenses";

  
  export const fetchExpenses = async (): Promise<Expense[]> => {
    const API_URL = 'https://expenses-backend-mu.vercel.app/expenses';
    const USERNAME = import.meta.env.VITE_USERNAME;
    
    if (!USERNAME) {
      throw new Error('USERNAME environment variable is not set');
    }
  
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Username: USERNAME
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json() as Expense[];
    } catch (error) {
      console.error('Error fetching expenses:', error);
      throw error;
    }
  };