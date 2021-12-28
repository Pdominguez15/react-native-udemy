import React from 'react';
import {SafeAreaView} from 'react-native';
import {ContadorScreen} from './src/screens/ContadorScreen';

export const App = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ContadorScreen />
      </SafeAreaView>
    </>
  );
};
