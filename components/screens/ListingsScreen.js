import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListItem from '../ListItem';
import ListItemSeparator from '../ListItemSeparator';
import Card from '../Card';

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: 'https://img.freepik.com/premium-photo/woman-happy-red_1303-8698.jpg',
    },
    {
        id: 2,
        title: 'Couch in great condition',
        price: 500,
        image: 'https://cdn.thewirecutter.com/wp-content/media/2022/05/sofa-buying-guide-2048px-67.jpg',
    },
]
function ListingsScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
            data={listings}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Card title={item.title} subtitle={'$' + item.price} imagePath={item.image}/>}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    }
})
export default ListingsScreen;