import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import CustomInput from '../reusables/CustomInput';
import CustomButton from '../reusables/CustomButton';
import Colors from '../constants/Colors';

const Login = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginUser = () => {
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then(output => {
        if (password == output.docs[0]._data.password) {
          navigation.navigate('dashboard');
        } else {
          Alert.alert('Email or password is wrong! Please enter right credentials!');
        }
      });
  };
  return (
    <View style={styles.container}>
      {route?.params?.is_LoggedOut && (
        <View style={styles.logoutMsg}>
          <Text style={styles.logout}>You are logged out!</Text>
          <Text>Please login again to continue shopping!</Text>
        </View>
      )}
      <Text style={styles.text}>Login</Text>
      <CustomInput
        placeholderText={'Enter Email'}
        inputStyle={styles.input}
        inputValue={email}
        onInputChange={input => setEmail(input)}
      />
      <CustomInput
        placeholderText={'Enter Password'}
        inputStyle={styles.input}
        inputValue={password}
        onInputChange={input => setPassword(input)}
      />
      <CustomButton
        title={'Login'}
        btnStyle={styles.btnStyle}
        btnTextStyle={styles.btnTextStyle}
        onClick={() => {
          loginUser();
        }}
      />
      <Text
        style={styles.login}
        onPress={() => {
          navigation.navigate('signup');
        }}>
        SignUp
      </Text>
    </View>
  );
};

export default Login;

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
  logoutMsg: {justifyContent: 'center', alignItems: 'center'},
  logout: {fontSize: 30},
});
