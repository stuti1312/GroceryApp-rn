import {ActivityIndicator, Image} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';

const CustomImage = ({imageSrc, imageStyle}) => {
  if (imageSrc) {
    return <Image source={imageSrc} style={imageStyle} />;
  } else {
    <ActivityIndicator size={'large'} color={Colors.BLACK} />;
  }
};

export default CustomImage;
