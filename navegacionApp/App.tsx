import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigator/StackNavigator';
//import {MenuLateralBasico} from './src/navigator/menuLateralBasico';
import {MenuLateral} from './src/navigator/menuLateral';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/*  <MenuLateralBasico />*/}
      {/*<MenuLateral />*/}
    </NavigationContainer>
  );
};

export default App;
