/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import AppNavigator from './src/navigation/AppNavigator';

// Define the type for a single transaction
export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
};

const App = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', description: 'Salário', amount: 3000, type: 'income' },
    { id: '2', description: 'Aluguel', amount: -1200, type: 'expense' },
    { id: '3', description: 'Supermercado', amount: -300, type: 'expense' },
  ]);

  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      id: Date.now().toString(),
      ...transaction,
    };
    setTransactions(prevTransactions => [newTransaction, ...prevTransactions]);
  };

  return <AppNavigator 
            balance={balance} 
            transactions={transactions} 
            addTransaction={addTransaction} 
         />;
};

export default App;
