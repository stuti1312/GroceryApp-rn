import {
  Dimensions,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import CustomHeader from '../reusables/CustomHeader';
import CustomImage from '../reusables/CustomImage';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';
import {addItemToWishlist} from '../redux/slices/WishlistSlice';
import {addToCart} from '../redux/slices/CartSlice';
import LoginModal from '../reusables/LoginModal';

const ProductDetails = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const itemData = route?.params?.data;
  const onShare = async data => {
    await Share.share({
      message: `Please check this out! ${'\n'}${data.title} ${'\n'}${
        data.image
      }`,
    });
  };
  const checkLoginStatus = async () => {
    let isUserLoggedIn = false;
    const loginStatus = await AsyncStorage.getItem('IS_USER_LOGGED_IN');
    if (loginStatus == null) {
      isUserLoggedIn = false;
    } else {
      isUserLoggedIn = true;
    }
    return isUserLoggedIn;
  };
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
      <ScrollView style={styles.scrollviewMargin}>
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
            checkLoginStatus()
              ? dispatch(addItemToWishlist(itemData))
              : setModalVisible(true);
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
          btnTextStyle={styles.btnTextStyle}
          btnStyle={styles.btnStyle}
          onClick={() => {
            checkLoginStatus()
              ? dispatch(addToCart({...itemData, qty: quantity}))
              : setModalVisible(true);
          }}
        />
      </ScrollView>
      <LoginModal
        isVisible={modalVisible}
        onClickCancel={() => {
          setModalVisible(false);
        }}
        onClickLogin={() => {
          setModalVisible(false);
          navigation.navigate('login');
        }}
        onClickSignup={() => {
          setModalVisible(false);
          navigation.navigate('signup');
        }}
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
    color: Colors.GREEN,
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
    backgroundColor: Colors.LIGHT_GREY,
  },
  wishlistIcon: {height: 25, width: 25},
  scrollviewMargin: {marginVertical: 10},
  btnStyle: {
    backgroundColor: Colors.SKYBLUE,
    width: Dimensions.get('window').width - 40,
  },
  btnTextStyle: {color: Colors.WHITE, fontSize: 20},
});
