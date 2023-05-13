const { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback } = require("react-native")
import colors from '../config/colors';

const AppButton = ({ title, onPress, color = 'PRIMARY' }) => {
    return  (
        <TouchableOpacity style = {[styles.button, { backgroundColor: colors[color] }]} onPress={onPress}>
            <Text style = {styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles =  StyleSheet.create({
    button: {
        backgroundColor: colors.PRIMARY,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        color: colors.WHITE,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
});

export default AppButton;