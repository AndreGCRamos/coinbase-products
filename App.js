import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductList from './components/ProductList'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coinbase product stats</Text>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#8ae8cf',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  }
});
