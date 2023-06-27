import {View, StyleSheet, FlatList, Text, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../reusables/CustomHeader';
import Colors from '../constants/Colors';
import CustomImage from '../reusables/CustomImage';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.listItems}>
        <CustomImage
          imageSrc={{uri: item.image}}
          imageStyle={styles.productImage}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.name}>
            {item.title.length > 30
              ? item.title.substring(0, 25) + '...'
              : item.title}
          </Text>
          <Text>
            {item.description.length > 40
              ? item.description.substring(0, 35) + '...'
              : item.description}
          </Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../assests/icons/menu.png')}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        rightIcon={require('../assests/icons/cart.png')}
        onClickRightIcon={() => {
          navigation.navigate('cart');
        }}
        title="Grocery App"
      />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        style={styles.list}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
  list: {marginHorizontal: 10},
  listItems: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {width: 100, height: 100, margin: 10, alignSelf: 'center'},
  itemDetails: {padding: 10},
  name: {fontSize: 18, fontWeight: '600'},
  price: {fontSize: 18, fontWeight: '600', color: 'green', marginTop: 10},
});
