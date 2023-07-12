import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomHeader from '../../reusables/CustomHeader';
import Colors from '../../constants/Colors';

const Notification = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        leftIcon={require('../../assests/icons/backArrow.png')}
        onClickLeftIcon={() => {
          navigation.goBack();
        }}
        title={'Notifications'}
      />
      <View style={styles.noItems}>
        <Text style={styles.noItemText}>No Notifications</Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  noItemText: {fontSize: 16, fontWeight: '600', color: Colors.BLACK},
  noItems: {
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
