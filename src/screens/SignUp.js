import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import CustomInput from '../reusables/CustomInput';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const addUser = () => {
    firestore()
      .collection('Users')
      .add({
        name: name,
        email: email,
        mobile: mobile,
        password: password,
      })
      .then(() => {
        navigation.navigate('login');
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <CustomInput
        placeholderText={'Enter Full Name'}
        inputStyle={styles.input}
        inputValue={name}
        onInputChange={input => setName(input)}
      />
      <CustomInput
        placeholderText={'Enter Email'}
        inputStyle={styles.input}
        inputValue={email}
        onInputChange={input => setEmail(input)}
      />
      <CustomInput
        placeholderText={'Enter Mobile Number'}
        inputStyle={styles.input}
        inputValue={mobile}
        onInputChange={input => setMobile(input)}
      />
      <CustomInput
        placeholderText={'Enter New Password'}
        inputStyle={styles.input}
        inputValue={password}
        onInputChange={input => setPassword(input)}
      />
      <CustomInput
        placeholderText={'Confirm Password'}
        inputStyle={styles.input}
        inputValue={confirmPassword}
        onInputChange={input => setConfirmPassword(input)}
      />
      <CustomButton
        title={'SignUp'}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
        onClick={() => {
          addUser();
        }}
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
