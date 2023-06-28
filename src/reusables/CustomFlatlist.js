import {FlatList, StyleSheet} from 'react-native';
import React from 'react';

const CustomFlatlist = ({listData, listRenderItem}) => {
  return (
    <FlatList
      data={listData}
      renderItem={listRenderItem}
      keyExtractor={item => item.id}
      style={styles.list}
    />
  );
};

export default CustomFlatlist;

const styles = StyleSheet.create({
  list: {marginHorizontal: 10, paddingBottom: 20},
});
