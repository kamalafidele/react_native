import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function AppText({ children, color = colors.PRIMARY }) {
    return ( <Text style={[styles.text, { color }]}>{children}</Text>);
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
});

export default AppText;