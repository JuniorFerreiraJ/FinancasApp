import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ListRenderItem } from 'react-native';
import { Transaction } from '../../App';
import Card from '../components/Card';
import { colors } from '../styles/colors';

type HomeScreenProps = {
  navigation: any;
  balance: number;
  transactions: Transaction[];
};

const HomeScreen = ({ navigation, balance, transactions }: HomeScreenProps) => {

  const renderItem: ListRenderItem<Transaction> = ({ item }) => (
    <Card style={styles.transactionItem}>
      <Text style={styles.descriptionText}>{item.description}</Text>
      <Text style={item.type === 'income' ? styles.incomeText : styles.expenseText}>
        R$ {item.type === 'income' ? item.amount.toFixed(2) : (item.amount * -1).toFixed(2)}
      </Text>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Card style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo Atual</Text>
        <Text style={styles.balance}>R$ {balance.toFixed(2)}</Text>
      </Card>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddIncome')}>
          <Text style={styles.buttonText}>+ Renda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.expenseButton]} onPress={() => navigation.navigate('AddExpense')}>
          <Text style={styles.buttonText}>- Despesa</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.historyTitle}>Histórico</Text>

      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  balanceCard: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: colors.primary,
  },
  balanceLabel: {
    fontSize: 18,
    color: colors.card,
    opacity: 0.9,
  },
  balance: {
    fontSize: 42,
    fontWeight: 'bold',
    color: colors.card,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.income,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  expenseButton: {
    backgroundColor: colors.expense,
  },
  buttonText: {
    color: colors.card,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '500',
  },
  incomeText: {
    color: colors.income,
    fontWeight: 'bold',
    fontSize: 16,
  },
  expenseText: {
    color: colors.expense,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen; 