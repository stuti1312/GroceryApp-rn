import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../reusables/CustomHeader';
import CustomImage from '../reusables/CustomImage';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {addItemToWishlist} from '../redux/slices/WishlistSlice';
import {addToCart} from '../redux/slices/CartSlice';

const ProductDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const itemData = route?.params?.data;
  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        rightIcon={require('../assests/icons/cart.png')}
        onClickRightIcon={() => {
          navigation.navigate('cart');
        }}
        title={'Product deatils'}
        isCart={true}
      />
      <ScrollView style={{marginVertical: 10}}>
        <CustomImage
          imageSrc={{uri: itemData?.image}}
          imageStyle={styles.bannerImage}
        />
        <Text style={styles.name}>{itemData?.title}</Text>
        <Text style={styles.desc}>{itemData?.description}</Text>
        <View style={styles.qtyPrice}>
          <Text style={styles.price}>${itemData?.price}</Text>
          <View style={styles.qtyContainer}>
            <TouchableOpacity
              style={styles.operators}
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}>
              <Text style={styles.operands}>-</Text>
            </TouchableOpacity>
            <Text style={[styles.quantity, styles.operands]}>{quantity}</Text>
            <TouchableOpacity
              style={styles.operators}
              onPress={() => {
                setQuantity(quantity + 1);
              }}>
              <Text style={styles.operands}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={styles.wishlistBtn}
          onPress={() => {
            dispatch(addItemToWishlist(itemData));
          }}>
          <CustomImage
            imageSrc={require('../assests/icons/wishlist.png')}
            imageStyle={styles.wishlistIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.wishlistBtn, {top: 155}]}
          onPress={() => {
            onShare(itemData);
          }}>
          <CustomImage
            imageSrc={require('../assests/icons/share.png')}
            imageStyle={styles.wishlistIcon}
          />
        </TouchableOpacity>
        <CustomButton
          title={'Add to Cart'}
          bgColor={Colors.SKYBLUE}
          textColor={Colors.WHITE}
          onClick={() => {
            dispatch(addToCart({...itemData, qty: quantity}));
          }}
        />
      </ScrollView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  bannerImage: {
    height: 300,
    width: '90%',
    resizeMode: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.BLACK,
    marginLeft: 20,
    marginTop: 20,
  },
  desc: {fontSize: 16, marginTop: 10, marginHorizontal: 20},
  price: {
    fontSize: 20,
    fontWeight: '800',
    color: 'green',
    marginTop: 10,
    marginLeft: 20,
  },
  qtyPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  qtyContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  operators: {
    height: 30,
    width: '20%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.BLACK,
    alignItems: 'center',
  },
  operands: {fontSize: 18, fontWeight: '600', color: Colors.BLACK},
  quantity: {marginHorizontal: 5},
  wishlistBtn: {
    position: 'absolute',
    top: 100,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    width: 45,
    borderRadius: 45 / 2,
    backgroundColor: 'lightgrey',
  },
  wishlistIcon: {height: 25, width: 25},
});
