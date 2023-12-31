import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addProducts} from '../../redux/slices/ProductSlice';
import CustomImage from '../../reusables/CustomImage';
import CustomHeader from '../../reusables/CustomHeader';
import Colors from '../../constants/Colors';
import CustomFlatlist from '../../reusables/CustomFlatlist';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const dispatch = useDispatch();
  const getProducts = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setIsLoading(false);
        json.map(item => {
          item.qty = 1;
        });
        dispatch(addProducts(json));
      });
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
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
        isCart={true}
      />
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator color={Colors.BLACK} size={'large'} />
        </View>
      ) : (
        <CustomFlatlist listData={products} listRenderItem={renderItem} />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
  listItems: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 10,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  itemDetails: {padding: 10},
  name: {fontSize: 18, fontWeight: '600'},
  price: {fontSize: 18, fontWeight: '600', color: Colors.GREEN, marginTop: 10},
  loader: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
