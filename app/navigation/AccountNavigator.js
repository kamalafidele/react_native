import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../components/screens/AccountScreen";
import MessagesScreen from "../components/screens/MessagesScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="AccountDetails" component={AccountScreen}/>
        <Stack.Screen name="Messages" component={MessagesScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator;
