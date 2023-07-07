import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';
import CustomImage from '../reusables/CustomImage';
import {
  addToCart,
  emptyCart,
  reduceItemQtyInCart,
  removeItemFromCart,
} from '../redux/slices/CartSlice';
import Colors from '../constants/Colors';
import CustomHeader from '../reusables/CustomHeader';
import CustomFlatlist from '../reusables/CustomFlatlist';
import CustomButton from '../reusables/CustomButton';
import {orderItem} from '../redux/slices/OrderSlice';

const Checkout = ({navigation}) => {
  const cartItems = useSelector(state => state.cart);
  const [addedItems, setaddedItems] = useState([]);
  const [selectedTab, setselectedTab] = useState(0);
  const [selectedAddress, setselectedAddress] = useState(
    'Please select address',
  );
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  useEffect(() => {
    setaddedItems(cartItems.data);
  }, [cartItems]);
  useEffect(() => {
    getSelectedAddress();
  }, [isFocused]);

  const getSelectedAddress = async () => {
    const value = await AsyncStorage.getItem('MY_ADDRESS');
    if (value !== null) {
      setselectedAddress(value);
    } else {
      setselectedAddress('Please select address');
    }
  };
  const getTotal = () => {
    let total = 0;
    addedItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(1);
  };
  const payment = [
    {mode: 'Credit Crad', index: 0},
    {mode: 'Debit Crad', index: 1},
    {mode: 'UPI', index: 2},
    {mode: 'Cash On Delivery', index: 3},
  ];
  const orderPlace = paymentId => {
    const data = {
      items: addedItems,
      amount: getTotal(),
      address: selectedAddress,
      paymentID: paymentId,
      paymentStatus: selectedTab == 3 ? 'Pending' : 'Success',
    };
    dispatch(orderItem(data));
    dispatch(emptyCart());
    navigation.navigate('orderPlaced');
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
    <View style={styles.container}>
      <ScrollView>
        <CustomHeader
          title={'Checkout'}
          leftIcon={require('../assests/icons/backArrow.png')}
          onClickLeftIcon={() => {
            navigation.goBack();
          }}
        />
        <Text style={styles.title}>Added Items</Text>
        <CustomFlatlist
          listData={addedItems}
          listRenderItem={renderItem}
          isCheckout={true}
        />
        <View style={styles.total}>
          <Text style={styles.title}>Total:</Text>
          <Text style={styles.title}>${getTotal()}</Text>
        </View>
        <Text style={styles.title}>Select Payment Mode</Text>
        {payment.map(item => (
          <TouchableOpacity
            style={styles.payment}
            onPress={() => {
              setselectedTab(item.index);
            }}
            key={item.index}>
            <CustomImage
              imageSrc={
                selectedTab === item.index
                  ? require('../assests/icons/radio_fill.png')
                  : require('../assests/icons/radio.png')
              }
              imageStyle={[
                styles.radio,
                {
                  tintColor:
                    selectedTab === item.index ? Colors.SKYBLUE : Colors.BLACK,
                },
              ]}
            />
            <Text style={styles.paymentMode}>{item.mode}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.addressHeading}>
          <Text style={styles.addressTitle}>Address</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('addresses');
            }}
            style={styles.edit}>
            <CustomImage
              imageSrc={require('../assests/icons/edit.png')}
              imageStyle={styles.editBtn}
            />
            <Text style={styles.editText}>Edit Address</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.address}>{selectedAddress}</Text>
        <CustomButton
          title={'Pay & Order'}
          btnStyle={styles.btn}
          btnTextStyle={styles.btnText}
          onClick={() => {
            var options = {
              description: 'Credits towards consultation',
              image: 'https://i.imgur.com/3g7nmJC.png',
              currency: 'INR',
              key: 'rzp_test_hWGIu2oanYQkXG',
              amount: getTotal() * 100,
              name: 'Vinnii Singhal',
              prefill: {
                email: '13vinnii25@gmail.com',
                contact: '7987372460',
                name: 'Razorpay Software',
              },
              theme: {color: '#3E8BFF'},
            };
            RazorpayCheckout.open(options)
              .then(data => {
                orderPlace(data.razorpay_payment_id);
              })
              .catch(error => {
                alert(`Error: ${error.code} | ${error.description}`);
              });
          }}
        />
      </ScrollView>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  title: {
    color: Colors.BLACK,
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 30,
  },
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
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.GREY,
    height: 70,
  },
  payment: {flexDirection: 'row', alignItems: 'center', marginTop: 20},
  radio: {width: 24, height: 24, marginHorizontal: 20},
  paymentMode: {fontSize: 16, color: Colors.BLACK},
  addressHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
  },
  addressTitle: {
    color: Colors.BLACK,
    fontSize: 18,
    width: '70%',
  },
  address: {
    fontSize: 16,
    color: Colors.DARK_GREY,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  btn: {backgroundColor: Colors.GREEN, width: '90%', margin: 20},
  btnText: {color: Colors.WHITE},
  edit: {flexDirection: 'row', alignItems: 'center', width: '30%'},
  editBtn: {
    width: 15,
    height: 15,
    tintColor: Colors.SKYBLUE,
    marginRight: 5,
    alignSelf: 'center',
  },
  editText: {
    fontSize: 16,
    color: Colors.SKYBLUE,
    textDecorationLine: 'underline',
    alignSelf: 'center',
  },
});
