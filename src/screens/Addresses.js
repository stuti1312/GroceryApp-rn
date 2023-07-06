import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../reusables/CustomHeader';
import Colors from '../constants/Colors';
import CustomButton from '../reusables/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import CustomFlatlist from '../reusables/CustomFlatlist';
import CustomImage from '../reusables/CustomImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {deleteAddress} from '../redux/slices/AddressSlice';

const Addresses = ({navigation}) => {
  const newAddress = useSelector(state => state.address.data);
  const dispatch = useDispatch();

  const defaultAddress = async item => {
    await AsyncStorage.setItem(
      'MY_ADDRESS',
      `${item.streetName},${item.cityName},${item.stateName},${item.pincodeNo},${item.addressType}`,
    );
    navigation.goBack();
  };
  const removeAddress = async item => {
    await AsyncStorage.removeItem('MY_ADDRESS');
    navigation.goBack();
  };
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          defaultAddress(item);
        }}
        key={index}
        style={styles.listItems}>
        <View style={styles.radio}>
          <CustomImage
            imageSrc={require('../assests/icons/radio_fill.png')}
            imageStyle={styles.icon}
          />
        </View>
        <View style={styles.address}>
          <Text style={styles.addressDetails}>Street: {item.streetName}</Text>
          <Text style={styles.addressDetails}>City: {item.cityName}</Text>
          <Text style={styles.addressDetails}>State: {item.stateName}</Text>
          <Text style={styles.addressDetails}>Pincode: {item.pincodeNo}</Text>
        </View>
        <View style={styles.type}>
          <Text style={styles.addressType}>{item.addressType}</Text>
          <TouchableOpacity
            onPress={() => {
              dispatch(deleteAddress(item.id));
              removeAddress();
            }}>
            <CustomImage
              imageSrc={require('../assests/icons/delete.png')}
              imageStyle={[styles.icon, styles.deleteEditIcon]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('addAddress', {btnType: 'edit', data: item});
            }}>
            <CustomImage
              imageSrc={require('../assests/icons/edit.png')}
              imageStyle={[styles.icon, styles.deleteEditIcon]}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        title={'Addresses'}
        leftIcon={require('../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
      <CustomFlatlist
        listData={newAddress}
        listRenderItem={renderItem}
        isCheckout={true}
      />
      <CustomButton
        btnStyle={styles.btn}
        title={'+'}
        btnTextStyle={styles.add}
        onClick={() => {
          navigation.navigate('addAddress', {btnType: 'new'});
        }}
      />
    </View>
  );
};

export default Addresses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.SKYBLUE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
  add: {fontSize: 30, color: Colors.WHITE, alignSelf: 'center'},
  listItems: {
    width: '100%',
    backgroundColor: Colors.WHITE,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.DARK_GREY,
    borderRadius: 10,
  },
  radio: {width: '5%'},
  icon: {width: 20, height: 20},
  address: {width: '65%'},
  addressDetails: {color: Colors.BLACK, fontSize: 18},
  type: {
    width: '20%',
  },
  addressType: {
    color: Colors.BLACK,
    fontSize: 15,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'flex-end',
    backgroundColor: Colors.SKYBLUE,
    borderRadius: 10,
  },
  deleteEditIcon: {marginTop: 5, alignSelf: 'flex-end'},
});
