import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DrawerNavigate from '../navigation/DrawerNavigate';
import StackNavigate from '../navigation/StackNavigate';


export const Routes = () => {
  return (
    <NavigationContainer>
      <DrawerNavigate />
      {/* <StackNavigate />  */}
    </NavigationContainer>
  );
};
