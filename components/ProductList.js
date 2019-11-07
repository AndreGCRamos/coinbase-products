import * as React from 'react';
import { Dimensions, Text, View, StyleSheet, Image, FlatList } from 'react-native';

import { getAllStats } from '../assets/scripts/ProductListApi';

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text style={styles.id}>{item.id}</Text>
      <Text>Open: {item.open}</Text>
      <Text>High: {item.high}</Text>
      <Text>Low: {item.low}</Text>
      <Text>Volume: {item.volume}</Text>
    </View>
  );
}

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: []
    };
  }

  componentDidMount() {
    getAllStats((stats) => {
      this.setState(prevState => ({ productList: [...prevState.productList, stats] }))
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.productList}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={product => product.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 30,
  },
  item: {
    marginBottom: 24,
    padding: 10,
    backgroundColor: 'rgb(255, 255, 255)',
  },
  id: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
