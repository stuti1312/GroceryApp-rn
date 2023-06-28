import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SideMenu from '../screens/SideMenu';
import Cart from './Cart';
import ProductDetails from '../screens/ProductDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="sideMenu"
          component={SideMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
