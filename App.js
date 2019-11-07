import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ProductList from './components/ProductList'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Coinbase product stats</Text>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: 'rgb(200,200,200)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
