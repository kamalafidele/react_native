import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import colors from '../../config/colors';

function Screen({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            { children }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.LIGHT,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});

export default Screen;