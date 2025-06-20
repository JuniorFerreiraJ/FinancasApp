import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Transaction } from '../../App';
import { colors } from '../styles/colors';

type AddIncomeScreenProps = {
  navigation: any;
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
};

const AddIncomeScreen = ({ navigation, addTransaction }: AddIncomeScreenProps) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSave = () => {
    const numericAmount = parseFloat(amount);
    if (!description || isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert('Erro', 'Por favor, preencha a descrição e um valor válido.');
      return;
    }

    addTransaction({
      description,
      amount: numericAmount,
      type: 'income',
    });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Renda</Text>
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        placeholderTextColor="#999"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: colors.card,
    borderRadius: 10,
    padding: 16,
    fontSize: 18,
    marginBottom: 20,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },
  button: {
    backgroundColor: colors.income,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.card,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddIncomeScreen; 