import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Main from '../screens/Main';

const Stack = createNativeStackNavigator();

const StackNavigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Main} name="Main" />
      <Stack.Screen component={Home} name="Home" />
    </Stack.Navigator>
  );
};

export default StackNavigate;
