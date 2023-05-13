import React, { useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';


import ListItemSeparator from '../ListItemSeparator';
import Card from '../Card';
import Screen from './Screen';
import listingsApi from '../../api/listings';
import AppText from '../AppText';
import AppButton from '../AppButton';

function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadListings();
    }, []);

    const loadListings = async () => {
        setLoading(true);
        const response = await listingsApi.getListings();
        setLoading(false);

        if (!response.ok) return setError(true);
        
        setError(false);
        setListings(response.data);
    }

    return (
        <Screen>
        <View style={styles.container}>
            { error && <>
            <AppText>Couldn't retrieve the listings</AppText>
            <AppButton title='Retry' onPress={loadListings}/>
            </> }

            <ActivityIndicator animating={loading} size={'large'}/>
            <FlatList
            data={listings}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
            <Card title={item.title} subtitle={'$' + item.price} imagePath={item.image} onPress={() => navigation.navigate('ListingDetails', item)}/>
            )}
            ItemSeparatorComponent={ListItemSeparator}
            />
        </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10
    }
})
export default ListingsScreen;