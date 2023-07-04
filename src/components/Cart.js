import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CustomImage from '../reusables/CustomImage';
import CustomHeader from '../reusables/CustomHeader';
import CustomFlatlist from '../reusables/CustomFlatlist';
import Colors from '../constants/Colors';
import {
  addToCart,
  reduceItemQtyInCart,
  removeItemFromCart,
} from '../redux/slices/CartSlice';
import CheckoutTab from '../reusables/CheckoutTab';

const Cart = ({navigation}) => {
  const cartItems = useSelector(state => state.cart);
  const [addedItems, setaddedItems] = useState([]);
  useEffect(() => {
    setaddedItems(cartItems.data);
  }, [cartItems]);
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    addedItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(1);
  };
  const renderItem = ({item, index}) => {
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
            {item?.title?.length > 30
              ? item?.title?.substring(0, 25) + '...'
              : item?.title}
          </Text>
          <Text>
            {item?.description?.length > 40
              ? item?.description?.substring(0, 35) + '...'
              : item?.description}
          </Text>
          <View style={styles.qtyPrice}>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.qtyContainer}>
              <TouchableOpacity
                style={styles.operators}
                onPress={() => {
                  if (item.qty > 1) {
                    dispatch(reduceItemQtyInCart(item));
                  } else {
                    dispatch(removeItemFromCart(index));
                  }
                }}>
                <Text style={styles.operands}>-</Text>
              </TouchableOpacity>
              <Text style={[styles.quantity, styles.operands]}>{item.qty}</Text>
              <TouchableOpacity
                style={styles.operators}
                onPress={() => {
                  dispatch(addToCart({...item, qty: item.qty}));
                }}>
                <Text style={styles.operands}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View styles={styles.container}>
      <CustomHeader
        title={'Cart Items'}
        leftIcon={require('../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      {addedItems.length > 0 ? (
        <>
          <CustomFlatlist listData={addedItems} listRenderItem={renderItem} />
          <CheckoutTab
            total={getTotal()}
            items={addedItems.length}
            navigation={navigation}
          />
        </>
      ) : (
        <View style={styles.noItems}>
          <Text style={styles.operands}>No items in cart</Text>
        </View>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {flex: 1,},
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
  qtyPrice: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {fontSize: 18, fontWeight: '600', color: Colors.GREEN},
  qtyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  operators: {
    height: 25,
    width: '20%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.BLACK,
    alignItems: 'center',
  },
  operands: {fontSize: 16, fontWeight: '600', color: Colors.BLACK},
  quantity: {marginHorizontal: 5},
  noItems: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
