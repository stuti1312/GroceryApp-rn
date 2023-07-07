import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomImage from '../reusables/CustomImage';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';

const OrderPlaced = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomImage
        imageSrc={require('../assests/icons/check.png')}
        imageStyle={styles.icon}
      />
      <Text style={styles.text}>Order Placed Successfully!</Text>
      <CustomButton
        title={'Return to Home Page'}
        btnStyle={styles.btn}
        btnTextStyle={styles.btnText}
        onClick={() => {
          navigation.navigate('sideMenu');
        }}
      />
    </View>
  );
};

export default OrderPlaced;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  icon: {width: 100, height: 100, marginVertical: 10},
  text: {fontSize: 26, fontWeight: 'bold'},
  btn: {
    backgroundColor: Colors.SKYBLUE,
    borderRadius: 10,
    paddingHorizontal: 25,
  },
  btnText: {color: Colors.WHITE, fontSize: 16},
});
