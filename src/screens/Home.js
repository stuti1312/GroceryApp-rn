import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideMenu from './SideMenu';

const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="sideMenu"
        component={SideMenu}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Home;
