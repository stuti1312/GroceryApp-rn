import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../constants/Colors';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hello and welcome to your grocery App, the place to find the best
        PRODUCTS for every taste and occasion. We aim to offer our customers a
        variety of the latest PRODUCTS.
        {'\n'}
        We've come a long way, so we know exactly which direction to take when
        supplying you with high quality yet budget-friendly products. We
        thoroughly check the quality of our goods, working only with reliable
        suppliers so that you only receive the best quality product. We believe
        in high quality and exceptional customer service.
        {'\n'}
        But most importantly, we believe shopping is a right, not a luxury, so
        we strive to deliver the best products at the most affordable prices,
        and ship them to you regardless of where you are located.
        {'\n'}
        We offer all of this while providing excellent customer service and
        friendly support.
        {'\n'}
        We always keep an eye on the latest trends in PRODUCTS and put our
        customers wishes first. That is why we have satisfied customers all over
        the world, and are thrilled to be a part of the PRODUCTS industry. The
        interests of our customers are always top priority for us, so we hope
        you will enjoy our products as much as we enjoy making them available to
        you.
      </Text>
    </View>
  );
};

export default About;
const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
  text: {
    color: Colors.BLACK,
    marginVertical: 20,
    fontSize: 15,
    letterSpacing:0.5,
  },
});
