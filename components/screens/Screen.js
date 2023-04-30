import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

function Screen({ children }) {
    return (
        <SafeAreaView style={styles.container}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
});

export default Screen;