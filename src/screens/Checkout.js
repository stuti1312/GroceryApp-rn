import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import CustomHeader from '../reusables/CustomHeader';

const Checkout = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        title={'Checkout'}
        leftIcon={require('../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
