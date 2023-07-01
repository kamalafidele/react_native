import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem';
import colors from '../../config/colors';
import Icon from '../Icon';
import ListItemSeparator from '../ListItemSeparator';
import Screen from './Screen';
import AuthContext from '../../auth/context';

const menuItems = [
    {
        id: 1,
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.PRIMARY,
        },
        targetScreen: 'Feed'
    },
    {
        id: 2,
        title: 'My Messages',
        icon: {
            name: 'email',
            backgroundColor: colors.PRIMARY,
        },
        targetScreen: 'Messages',
    },
]
function AccountScreen({ navigation }) {
    const { user, setUser } = useContext(AuthContext);
    return (
        <Screen>
        <View style={styles.screen}>
        <View style={styles.container}>
            <ListItem 
            title={ user.firstName + ' ' + user.lastName } 
            subtitle={ user.email } 
            imagePath={{ uri: 'https://people.com/thmb/HGNKjq-sOMsmp8fY-DYG3BqUPaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(919x524:921x526)/bella-ramsey-1-e41e96a038c644e89efbe0a568817dec.jpg'}}
            />
        </View>
        <View style={styles.container}>
            <FlatList
            data={menuItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <ListItem title={item.title} IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>} onPress={() => navigation.navigate(item.targetScreen)}/>
            )}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </View>
        <View style={styles.container}>
            <ListItem title={'Log out'} onPress={() => setUser(null) } IconComponent={<Icon name={'logout'} backgroundColor={colors.SECONDARY}/>}/>
        </View>
        </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.LIGHT,
    },
    container: {
        marginVertical: 10
    }
})
export default AccountScreen;