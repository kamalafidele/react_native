import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListingsScreen from "../components/screens/ListingsScreen";
import ListingDetailsScreen from "../components/screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{ presentation: "transparentModal" }} >
        <Stack.Screen name="Listings" component={ListingsScreen}/>
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigator;