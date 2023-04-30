import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Button, TouchableNativeFeedback, FlatList, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import ListItemSeparator from './ListItemSeparator';

function AppPicker({ iconName, placeholder, items, onSelectItem, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    const handleItemSelection = item => {
        onSelectItem(item);
        setModalVisible(false);
    }

    return (
        <>
        <TouchableNativeFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
            <View style={styles.details}>
               { iconName && <MaterialCommunityIcons name={iconName} size={20} color={colors.MEDIUM} style={styles.icon} /> }
               <Text>{ selectedItem ? selectedItem.label : placeholder }</Text>
            </View>
            <View>
                <MaterialCommunityIcons name={'chevron-down'} size={20} color={colors.MEDIUM} style={styles.icon} />
            </View>
        </View>
        </TouchableNativeFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
                <Text style={{ color: colors.SECONDARY, textAlign: 'center' }}>Close</Text>
            </TouchableNativeFeedback>
            <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemSelection(item)} style={styles.pickerItem}>
                <Text>{item.label}</Text>
            </TouchableOpacity>
            )}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.GREY,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginRight: 10,
    },
    pickerItem: {
        padding: 10,
    }
});

export default AppPicker;