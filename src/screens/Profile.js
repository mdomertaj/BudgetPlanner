import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Profile = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [income, setIncome] = useState('');
  const [expectedSaving, setExpectedSaving] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>FIRST NAME</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
      <Text style={styles.label}>LAST NAME</Text>
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
      <Text style={styles.label}>INCOME</Text>
      <TextInput style={styles.input} value={income} onChangeText={setIncome} keyboardType="numeric" />
      <Text style={styles.label}>EXPECTED SAVING</Text>
      <TextInput style={styles.input} value={expectedSaving} onChangeText={setExpectedSaving} keyboardType="numeric" />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

export default Profile;
