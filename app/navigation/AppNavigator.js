import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from "../components/screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
        name="Feed" 
        component={FeedNavigator}
        options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color}/>, headerShown: false }}
        />
        <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color}/>, headerShown: false }}
        />
    </Tab.Navigator>
)

export default AppNavigator;