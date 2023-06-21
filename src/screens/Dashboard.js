import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomHeader from '../reusables/CustomHeader';
import BottomTab from './BottomTab';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {flex: 1},
});
