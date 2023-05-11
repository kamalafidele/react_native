import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../../config/colors";
import ListItem from "../ListItem";
import Screen from "./Screen";

const ListingDetailsScreen = () => {
    return (
        <Screen>
        <View>
            <Image source={{ uri: 'https://img.freepik.com/premium-photo/woman-happy-red_1303-8698.jpg'}} style={styles.img}/>
            <View style={styles.detailsContainer}>
               <Text style={styles.title}>Red jacket for sale</Text>
               <Text style={styles.subtitle}>$100</Text>
               <View style={styles.userContainer}>
                  <ListItem title={'Bella Ramsey'} subtitle={'4 Listings'} imagePath={{uri: 'https://people.com/thmb/HGNKjq-sOMsmp8fY-DYG3BqUPaY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(919x524:921x526)/bella-ramsey-1-e41e96a038c644e89efbe0a568817dec.jpg'}}/>
               </View>
            </View>
        </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        paddingLeft: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '400'
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.SECONDARY
    },
    userContainer: {
        marginVertical: 30
    }
});
export default ListingDetailsScreen;