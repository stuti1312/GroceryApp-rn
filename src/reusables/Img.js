import {Image} from 'react-native';
import React from 'react';

const Img = ({imageSrc, imageStyle}) => {
  return <Image source={imageSrc} style={imageStyle} />;
};

export default Img;
