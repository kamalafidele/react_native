import { useState } from 'react';
import { Dimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationThem from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';


export default function App() {
  const { height, width, scale } = Dimensions.get('screen');
  const orientation = useDeviceOrientation();

  return (
    <NavigationContainer theme={navigationThem}>
       {/* <AuthNavigator/> */}
       <AppNavigator/>
    </NavigationContainer>
  );
}

