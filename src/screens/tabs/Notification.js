import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../reusables/CustomHeader';

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
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;
