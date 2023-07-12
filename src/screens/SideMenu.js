import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import Profile from './tabs/Profile';
import About from './drawer/About';
import Help from './Help';
import Colors from '../constants/Colors';

const Drawer = createDrawerNavigator();
const SideMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="dashboard"
        component={Dashboard}
        options={{headerShown: false, title: 'Dasboard'}}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerStyle: {backgroundColor: Colors.SKYBLUE},
          headerTintColor: Colors.WHITE,
          headerTitleStyle: {color: Colors.WHITE},
        }}
      />
      <Drawer.Screen
        name="about"
        component={About}
        options={{
          title: 'About',
          headerStyle: {backgroundColor: Colors.SKYBLUE},
          headerTintColor: Colors.WHITE,
          headerTitleStyle: {color: Colors.WHITE},
        }}
      />
      <Drawer.Screen
        name="help"
        component={Help}
        options={{
          title: 'Help & feedback',
          headerStyle: {backgroundColor: Colors.SKYBLUE},
          headerTintColor: Colors.WHITE,
          headerTitleStyle: {color: Colors.WHITE},
        }}
      />
    </Drawer.Navigator>
  );
};

export default SideMenu;
