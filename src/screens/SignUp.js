import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomInput from '../reusables/CustomInput';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <CustomInput
        placeholderText={'Enter Full Name'}
        inputStyle={styles.input}
      />
      <CustomInput placeholderText={'Enter Email'} inputStyle={styles.input} />
      <CustomInput
        placeholderText={'Enter Mobile Number'}
        inputStyle={styles.input}
      />
      <CustomInput
        placeholderText={'Enter New Password'}
        inputStyle={styles.input}
      />
      <CustomInput
        placeholderText={'Confirm Password'}
        inputStyle={styles.input}
      />
      <CustomButton
        title={'SignUp'}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
        onClick={() => {}}
      />
      <Text
        style={styles.login}
        onPress={() => {
          navigation.navigate('login');
        }}>
        Login
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: Colors.WHITE},
  text: {
    color: Colors.BLACK,
    marginVertical: 40,
    fontSize: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: Colors.BLACK,
    borderRadius: 10,
    marginVertical: 10,
    paddingLeft: 10,
    alignSelf: 'center',
  },
  btnStyle: {
    backgroundColor: Colors.SKYBLUE,
    width: '100%',
  },
  btnTextStyle: {color: Colors.WHITE, fontSize: 18},
  login: {
    alignSelf: 'center',
    marginVertical: 10,
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});
