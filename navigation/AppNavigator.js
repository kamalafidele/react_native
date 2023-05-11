import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ListingsScreen from "../components/screens/ListingsScreen";
import AccountScreen from "../components/screens/AccountScreen";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
        name="Listings" 
        component={ListingsScreen}
        options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/> }}
        />
        <Tab.Screen 
        name="Account" 
        component={AccountScreen}
        options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color}/>}}
        />
    </Tab.Navigator>
)

export default AppNavigator;