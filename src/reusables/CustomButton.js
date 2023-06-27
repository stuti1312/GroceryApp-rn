import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, onClick, bgColor, textColor}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={[styles.btn, {backgroundColor: bgColor}]}>
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    width: Dimensions.get('window').width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});
