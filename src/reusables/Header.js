import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import Img from './Img';

const {width, height} = Dimensions.get('window');

const Header = ({
  title,
  leftIcon,
  rightIcon,
  onClickLeftIcon,
  onClickRightIcon,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onClickLeftIcon} style={styles.btn}>
        {/* <Img imgSrc={leftIcon} imgStyle={styles.icon} /> */}
        <Image source={leftIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onClickRightIcon} style={styles.btn}>
        {/* <Img imgSrc={rightIcon} imgStyle={styles.icon} /> */}
        <Image source={rightIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

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
