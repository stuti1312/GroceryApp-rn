import {View, Text} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Search = () => {
  const products = useSelector(state => state);
  console.log('products', JSON.stringify(products.product.data));
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
