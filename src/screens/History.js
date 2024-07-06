import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Button } from 'react-native';

const History = ({ navigation }) => {
  const [month, setMonth] = useState('May');
  const [category, setCategory] = useState('Grocery');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>HISTORY</Text>
      <View style={styles.row}>
        <Text style={styles.label}>SELECT MONTH</Text>
        <Picker selectedValue={month} onValueChange={(itemValue) => setMonth(itemValue)} style={styles.picker}>
          <Picker.Item label="January" value="January" />
          <Picker.Item label="February" value="February" />
          <Picker.Item label="March" value="March" />
          <Picker.Item label="April" value="April" />
          <Picker.Item label="May" value="May" />
          <Picker.Item label="June" value="June" />
          <Picker.Item label="July" value="July" />
          <Picker.Item label="August" value="August" />
          <Picker.Item label="September" value="September" />
          <Picker.Item label="October" value="October" />
          <Picker.Item label="November" value="November" />
          <Picker.Item label="December" value="December" />
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>CATEGORY</Text>
        <Picker selectedValue={category} onValueChange={(itemValue) => setCategory(itemValue)} style={styles.picker}>
          <Picker.Item label="Grocery" value="Grocery" />
          <Picker.Item label="Rent" value="Rent" />
          <Picker.Item label="Utilities" value="Utilities" />
        </Picker>
      </View>
      <View style={styles.historyContainer}>
        <Text>{month}</Text>
        <Text>{category}</Text>
        <Text>00</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: 150,
  },
  historyContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

export default History;
