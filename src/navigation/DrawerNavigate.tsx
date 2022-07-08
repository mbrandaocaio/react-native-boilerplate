import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Home from '../screens/Home';
import Main from '../screens/Main';

const Drawer = createDrawerNavigator();

const DrawerNavigate = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen component={Main} name="Main" />
      <Drawer.Screen component={Home} name="Home" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigate;
