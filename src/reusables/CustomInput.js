import {TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({
  placeholderText,
  inputStyle,
  inputValue,
  onInputChange,
}) => {
  return (
    <TextInput
      placeholder={placeholderText}
      style={inputStyle}
      value={inputValue}
      onChangeText={() => {
        onInputChange();
      }}
    />
  );
};

export default CustomInput;
