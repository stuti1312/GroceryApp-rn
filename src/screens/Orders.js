import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import CustomImage from '../reusables/CustomImage';
import CustomHeader from '../reusables/CustomHeader';
import CustomFlatlist from '../reusables/CustomFlatlist';
import Colors from '../constants/Colors';

const Orders = ({navigation}) => {
  const orderedItems = useSelector(state => state.order.data);
  const renderItem = ({item}) => {
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
        leftIcon={require('../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        title="Your Orders"
      />
      <CustomFlatlist listData={orderedItems} listRenderItem={renderItem} />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
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
  price: {fontSize: 18, fontWeight: '600', color: Colors.GREEN, marginTop: 10},
  loader: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
