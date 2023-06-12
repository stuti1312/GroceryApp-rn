import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../reusables/Header';

const SideMenu = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={require('../assests/icons/menu.png')}
        onClickLeftIcon={() => console.log('left clicked')}
        rightIcon={require('../assests/icons/cart.png')}
        onClickRightIcon={() => console.log('right clicked')}
        title="Grocery App"
      />
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {flex: 1},
});
