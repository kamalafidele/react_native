import { View, Image, StyleSheet, TouchableNativeFeedback } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewImageScreen = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.buttons}>
                <View style = {styles.closeButton}>
                    <MaterialCommunityIcons name="close" color={'white'} size={35}/>
                </View>
                <View style = {styles.deleteButton}>
                    <MaterialCommunityIcons name="delete" color={'red'} size={35}/>
                </View>
            </View>
            <View style = {{ flex: 4 }}>
                <Image source={require("../../assets/THANK_YOU.jpg")} resizeMode="contain"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    buttons: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 5, 
    },
    closeButton: {
    },
    deleteButton: {
    }
})
export default ViewImageScreen;