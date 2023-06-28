import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomImage from './CustomImage';
import Colors from '../constants/Colors';

const {width, height} = Dimensions.get('window');

const CustomHeader = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onClickLeftIcon} style={styles.btn}>
        <CustomImage imageSrc={leftIcon} imageStyle={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onClickRightIcon} style={styles.btn}>
        <CustomImage imageSrc={rightIcon} imageStyle={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    width: width,
    height: 60,
    backgroundColor: Colors.SKYBLUE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {color: Colors.WHITE, fontSize: 20},
  btn: {height: 40, width: 40, justifyContent: 'center', alignItems: 'center'},
  icon: {height: 30, width: 30, tintColor: Colors.WHITE},
});
