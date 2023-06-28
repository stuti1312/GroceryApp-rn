import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CustomHeader from '../../reusables/CustomHeader';
import CustomImage from '../../reusables/CustomImage';
import CustomFlatlist from '../../reusables/CustomFlatlist';
import Colors from '../../constants/Colors';

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const products = useSelector(state => state);
  const [oldData, setOldData] = useState(products.product.data);
  const [searchedItemList, setsearchedItemList] = useState(oldData);
  const filteredData = text => {
    let newData = oldData.filter(item => {
      return item.title.toLowerCase().match(text.toLowerCase());
    });
    setsearchedItemList(newData);
  };
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
      <CustomHeader title={'Search Items'} />
      <View style={styles.searchbar}>
        <TextInput
          placeholder="Search your item here"
          style={styles.input}
          value={search}
          onChangeText={val => {
            setSearch(val);
            filteredData(val);
          }}
        />
        {search !== '' && (
          <TouchableOpacity
            onPress={() => {
              setSearch('');
              filteredData('');
            }}>
            <CustomImage
              imageSrc={require('../../assests/icons/cancel.png')}
              imageStyle={styles.icon}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity>
          <CustomImage
            imageSrc={require('../../assests/icons/search_fill.png')}
            imageStyle={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <CustomFlatlist listData={searchedItemList} listRenderItem={renderItem} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  searchbar: {
    margin: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
  },
  input: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'center',
    tintColor: Colors.BLACK,
  },
  list: {marginHorizontal: 10, paddingBottom: 20},
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
