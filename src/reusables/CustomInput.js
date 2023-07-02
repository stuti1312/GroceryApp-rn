import {View, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({placeholderText, inputStyle}) => {
  return (
    <View>
      <TextInput placeholder={placeholderText} style={inputStyle} />
    </View>
  );
};

export default CustomInput;
