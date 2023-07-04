import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

const CustomFlatlist = ({listData, listRenderItem, isCheckout = false}) => {
  return (
    <FlatList
      data={listData}
      renderItem={listRenderItem}
      keyExtractor={item => item.id}
      style={isCheckout ? styles.listCheckout : styles.list}
    />
  );
};

export default CustomFlatlist;

const styles = StyleSheet.create({
  list: {marginHorizontal: 10, marginBottom: 70, height: '80.5%'},
  listCheckout: {marginHorizontal: 10, height: '80.5%'},
});
