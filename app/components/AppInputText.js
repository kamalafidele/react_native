import React from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import defaultStyles from '../config/styles';

function AppInputText({ iconName, ...otherProps }) {
    return (
        <View style={styles.container}>
            { iconName && <MaterialCommunityIcons name={iconName} size={20} color={colors.MEDIUM} style={styles.icon} /> }
            <TextInput style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.GREY,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    }
});

export default AppInputText;