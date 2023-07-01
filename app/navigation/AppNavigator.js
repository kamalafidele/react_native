import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import TestNotificationScreen from "../components/screens/TestNotificationScreen";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
        name="Notifications"
        component={TestNotificationScreen}
        options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="bell" size={size} color={color}/>}}/>
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