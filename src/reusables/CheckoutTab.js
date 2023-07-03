import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const CheckoutTab = ({total, items, navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <Text>{items + ' items'}</Text>
        <Text style={styles.total}>{'Total: ' + total}</Text>
      </View>
      <View style={styles.tabs}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('checkout');
          }}
          style={styles.checkoutBtn}>
          <Text style={styles.btn}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckoutTab;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabs: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutBtn: {
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SKYBLUE,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {fontSize: 18, fontWeight: '700'},
  btn: {color: Colors.WHITE},
});
