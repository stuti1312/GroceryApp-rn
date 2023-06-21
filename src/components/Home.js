import {View, StyleSheet} from 'react-native';
import React from 'react';
import CustomHeader from '../reusables/CustomHeader';

const Home = () => {
  return (
    <View style={styles.container}>
      <CustomHeader
        leftIcon={require('../assests/icons/menu.png')}
        onClickLeftIcon={() => console.log('left clicked')}
        rightIcon={require('../assests/icons/cart.png')}
        onClickRightIcon={() => console.log('right clicked')}
        title="Grocery App"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
});
