import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AppNavigator from '../components/AppNavigator';

const SocialLogin = () => {
  const [userDetails, setuserDetails] = useSt-ate([]);
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      const credential = auth.GoogleAuthProvider.credential(
        userInfo.idToken,
        userInfo.accessToken,
      );
      await auth().signInWithCredential(credential);
      setuserDetails({userInfo});
      Alert.alert('Google Login', 'Successfully logged in with google', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            console.log('login successful');
            return <AppNavigator />;
          },
        },
      ]);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('// user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('// operation (e.g. sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('// play services not available or outdated');
      } else {
        console.log('// some other error happened');
      }
    }
  };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.signOut();
  //     setuserDetails({user: null}); // Remember to remove the user from your app's state as well
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <GoogleSigninButton
      size={GoogleSigninButton.Size.Wide}
      color={GoogleSigninButton.Color.Dark}
      onPress={signIn}
    />
  );
};

export default SocialLogin;
