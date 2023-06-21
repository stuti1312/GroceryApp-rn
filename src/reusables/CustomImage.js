import {Image} from 'react-native';
import React from 'react';

const CustomImage = ({imageSrc, imageStyle}) => {
  return <Image source={imageSrc} style={imageStyle} />;
};

export default CustomImage;
