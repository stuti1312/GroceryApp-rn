import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import CustomHeader from '../../reusables/CustomHeader';
import CustomFlatlist from '../../reusables/CustomFlatlist';
import CustomImage from '../../reusables/CustomImage';

const Wishlist = ({navigation}) => {
  const wishlistItems = useSelector(state => state.wishlist);
  const [addedItems, setaddedItems] = useState([]);
  useEffect(() => {
    setaddedItems(wishlistItems.data);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
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
    <View>
      <CustomHeader
        leftIcon={require('../../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        title={'Wistlist Items'}
      />
      {addedItems.length > 0 ? (
        <CustomFlatlist listData={addedItems} listRenderItem={renderItem} />
      ) : (
        <View style={styles.noItems}>
          <Text style={styles.noItemText}>No Items</Text>
        </View>
      )}
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  listItems: {
    width: Dimensions.get('window').width,
    height: 100,
    backgroundColor: Colors.WHITE,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    margin: 10,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  itemDetails: {padding: 10},
  name: {fontSize: 18, fontWeight: '600'},
  price: {fontSize: 18, fontWeight: '600', color: Colors.GREEN, marginTop: 10},
  noItemText: {fontSize: 16, fontWeight: '600', color: Colors.BLACK},
  noItems: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
