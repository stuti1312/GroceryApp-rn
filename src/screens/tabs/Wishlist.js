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
    <View>
      <CustomHeader title={'Wistlist Items'} />
      <CustomFlatlist listData={addedItems} listRenderItem={renderItem} />
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
  productImage: {width: 100, height: 100, margin: 10, alignSelf: 'center'},
  itemDetails: {padding: 10},
  name: {fontSize: 18, fontWeight: '600'},
  price: {fontSize: 18, fontWeight: '600', color: 'green', marginTop: 10},
});
