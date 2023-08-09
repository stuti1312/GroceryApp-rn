import {Provider} from 'react-redux';
import AppNavigator from './src/components/AppNavigator';
import {store} from './src/redux/store';
import React, {useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';

const App = () => {
  //for permission request popup(allow/deny)
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }, []);

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
