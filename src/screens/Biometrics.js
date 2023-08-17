import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

const Biometrics = () => {
  const [bomb, setBomb] = useState('');
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: true,
  });
  rnBiometrics.isSensorAvailable().then(resultObject => {
    const {available, biometryType} = resultObject;
    if (available && biometryType === BiometryTypes.TouchID) {
      console.log('TouchID is supported');
    } else if (available && biometryType === BiometryTypes.FaceID) {
      console.log('FaceID is supported');
    } else if (available && biometryType === BiometryTypes.Biometrics) {
      console.log('Biometrics is supported');
    } else {
      console.log('Biometrics not supported');
    }
  });

  rnBiometrics
    .simplePrompt({
      promptMessage: 'Verify that its you.\nUse your fingerprint to continue.',
    //   fallbackPromptMessage: 'Use your fingerprint to continue.',
    //   cancelButtonText: 'CANCLE',
    })
    .then(resultObject => {
      const {success} = resultObject;
      if (success) {
        console.log('successful biometrics provided');
      } else {
        console.log('user cancelled biometric prompt');
      }
    })
    .catch(() => {
      console.log('biometrics failed');
    });

  return (
    <View>
      <Text>{bomb}</Text>
    </View>
  );
};

export default Biometrics;

const styles = StyleSheet.create({});
