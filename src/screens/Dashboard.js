import {View, StyleSheet} from 'react-native';
import React from 'react';
import BottomTab from './BottomTab';

const Dashboard = props => {
  return (
    <View style={styles.container}>
      <BottomTab {...props} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {flex: 1},
});
