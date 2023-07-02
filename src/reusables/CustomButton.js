import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, onClick, btnTextStyle, btnStyle}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onClick();
      }}
      style={[styles.btn, btnStyle]}>
      <Text style={[styles.title, btnTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
  },
  title: {
    fontWeight: '500',
  },
});
