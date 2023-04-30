import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

const Card = ({ title, subtitle, imagePath }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imagePath, width: '100%', height: 200 }} resizeMode="cover"/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        backgroundColor: colors.WHITE,
        borderRadius: 10,
        margin: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 22,
        fontWeight: '400',
        paddingHorizontal: 20
    },
    subtitle: {
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.SECONDARY
    }
});

export default Card;