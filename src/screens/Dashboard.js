import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>YOU HAVE --- $ MORE</Text>
      <Text style={styles.title}>BUDGET BUDDY</Text>
      <Text style={styles.subtitle}>Lets plan and save</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default Dashboard;
