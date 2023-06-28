import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomImage from '../../reusables/CustomImage';
import CustomHeader from '../../reusables/CustomHeader';
import Colors from '../../constants/Colors';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setIsLoading(false);
      });
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.listItems}
        onPress={() => {
          navigation.navigate('productDetails', {data: item});
        }}>
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../../assests/icons/menu.png')}
        onClickLeftIcon={() => {
          navigation.openDrawer();
        }}
        rightIcon={require('../../assests/icons/cart.png')}
        onClickRightIcon={() => {
          navigation.navigate('cart');
        }}
        title="Grocery App"
      />
      {isLoading ? (
        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator color={Colors.BLACK} size={'large'} />
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
          style={styles.list}
        />
      )}
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
