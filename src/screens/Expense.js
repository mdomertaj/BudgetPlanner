import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Make sure to install this package

const Expense = ({ navigation }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ENTER CATEGORY</Text>
      <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)} style={styles.picker}>
        <Picker.Item label="Select a category" value="" />
        <Picker.Item label="Grocery" value="grocery" />
        <Picker.Item label="Rent" value="rent" />
        <Picker.Item label="Utilities" value="utilities" />
        {/* Add more categories as needed */}
      </Picker>
      <Text style={styles.label}>AMOUNT</Text>
      <TextInput style={styles.input} value={amount} onChangeText={setAmount} keyboardType="numeric" />
      <Button title="SUBMIT" onPress={() => {/* Handle submission */}} />
      <View style={styles.chartContainer}>
        {/* Replace with your chart component */}
        <Text>Chart Placeholder</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="PROFILE" onPress={() => navigation.navigate('Profile')} />
        <Button title="EXPENSE" onPress={() => navigation.navigate('Expense')} />
        <Button title="HISTORY" onPress={() => navigation.navigate('History')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  chartContainer: {
    height: 200,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

export default Expense;
