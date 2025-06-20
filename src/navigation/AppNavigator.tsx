import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import AddIncomeScreen from '../screens/AddIncomeScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import { Transaction } from '../../App';
import { colors } from '../styles/colors';

const Stack = createNativeStackNavigator();

type AppNavigatorProps = {
  balance: number;
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
};

const AppNavigator = ({ balance, transactions, addTransaction }: AppNavigatorProps) => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.card,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Home" options={{ title: 'Minhas Finanças' }}>
          {(props) => <HomeScreen {...props} balance={balance} transactions={transactions} />}
        </Stack.Screen>
        <Stack.Screen name="AddIncome" options={{ title: 'Adicionar Renda' }}>
          {(props) => <AddIncomeScreen {...props} addTransaction={addTransaction} />}
        </Stack.Screen>
        <Stack.Screen name="AddExpense" options={{ title: 'Adicionar Despesa' }}>
         {(props) => <AddExpenseScreen {...props} addTransaction={addTransaction} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 