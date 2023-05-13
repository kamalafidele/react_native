import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WelcomeScreen1 from "../components/screens/WelcomeScreen1";
import LoginScreen from "../components/screens/LoginScreen";
import RegisterScreen from "../components/screens/RegisterScree";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen1}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
    </Stack.Navigator>
);

export default AuthNavigator;
