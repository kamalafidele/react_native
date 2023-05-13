import { View, Button, Alert } from  "react-native";

const Buttons = () => {
    return (
        <View>
            <Button title="Click me" onPress={(e) => Alert.alert('Alert', 'This is an alert', [ { text: 'Yes'}, { text: 'No' }])}/>
        </View>
    )
}

export default Buttons;