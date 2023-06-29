import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomHeader from '../reusables/CustomHeader';
import CustomImage from '../reusables/CustomImage';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {addItemToWishlist} from '../redux/slices/WishlistSlice';

const ProductDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
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
      />
      <CustomImage
        imageSrc={{uri: route?.params?.data?.image}}
        imageStyle={styles.bannerImage}
      />
      <Text style={styles.name}>{route?.params?.data?.title}</Text>
      <Text style={styles.desc}>{route?.params?.data?.description}</Text>
      <Text style={styles.price}>${route?.params?.data?.price}</Text>
      <TouchableOpacity
        style={styles.wishlistBtn}
        onPress={() => {
          dispatch(addItemToWishlist(route?.params?.data));
        }}>
        <CustomImage
          imageSrc={require('../assests/icons/wishlist.png')}
          imageStyle={styles.wishlistIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.wishlistBtn, {top: 155}]}
        onPress={() => {}}>
        <CustomImage
          imageSrc={require('../assests/icons/share.png')}
          imageStyle={styles.wishlistIcon}
        />
      </TouchableOpacity>
      <CustomButton
        title={'Add to Cart'}
        bgColor={Colors.SKYBLUE}
        textColor={Colors.WHITE}
        onClick={() => {}}
      />
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
