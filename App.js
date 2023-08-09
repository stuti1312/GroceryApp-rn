import {Provider} from 'react-redux';
import AppNavigator from './src/components/AppNavigator';
import {store} from './src/redux/store';
import {Alert} from 'react-native';
import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  //for permission request popup(allow/deny)
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);

  //for getting foreground notification
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    getDeviceToken();
  }, []);

  // required for generating push notification
  const getDeviceToken = async () => {
    const token = await messaging().getToken();
    console.log('token', token);
  };
  
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
