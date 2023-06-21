import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../components/Profile';
import About from '../components/About';
import Dashboard from './Dashboard';

const Drawer = createDrawerNavigator();
const SideMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="about" component={About} />
    </Drawer.Navigator>
  );
};

export default SideMenu;
