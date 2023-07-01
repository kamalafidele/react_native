import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './app/navigation/AuthNavigator';
import navigationThem from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import jwtDecode from 'jwt-decode';


export default function App() {
  const { height, width, scale } = Dimensions.get('screen');
  const orientation = useDeviceOrientation();
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) return;

    const decoded = jwtDecode(token);
    setUser(decoded.user);
  }

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <NavigationContainer theme={navigationThem}>
      { user ? <AppNavigator/> : <AuthNavigator/> }
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

