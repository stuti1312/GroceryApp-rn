import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../reusables/CustomInput';
import Colors from '../constants/Colors';

const Help = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        We are here to help you, incase you have any query.{'\n'}Will try to
        respond as soon as possible
      </Text>
      <CustomInput
        placeholderText={'Please Enter your query/feedback'}
        inputStyle={styles.input}
      />
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {flex: 1, paddingHorizontal: 20},
  text: {
    color: Colors.BLACK,
    marginVertical: 20,
    fontSize: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 10,
    paddingLeft: 10,
    alignSelf: 'center',
  },
});
