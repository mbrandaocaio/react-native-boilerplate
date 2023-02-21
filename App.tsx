import React from 'react';
import OneSignal from 'react-native-onesignal';
import {Routes} from './src/routes';

OneSignal.setAppId('id do one signal');

const App = () => {
  return <Routes />;
};

export default App;
