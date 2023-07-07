import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SideMenu from '../screens/SideMenu';
import ProductDetails from '../screens/ProductDetails';
import Cart from './Cart';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Checkout from '../screens/Checkout';
import Addresses from '../screens/Addresses';
import AddAddress from '../screens/AddAddress';
import OrderPlaced from '../screens/OrderPlaced';

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
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="productDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addresses"
          component={Addresses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addAddress"
          component={AddAddress}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="orderPlaced"
          component={OrderPlaced}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
