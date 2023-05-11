import { StyleSheet, Text, SafeAreaView, Image, Button, Platform, StatusBar, View, Dimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';
import { NavigationContainer } from '@react-navigation/native';

import Touchables from './components/Touchables';
import Buttons from './components/Buttons';
import FlexBox from './components/FlexBoxes';
import WelcomeScreen1 from './components/screens/WelcomeScreen1';
import ViewImageScreen from './components/screens/ViewImageScreen';
import Card from './components/Card';
import colors from './config/colors';
import ListingDetailsScreen from './components/screens/ListingDetailsScreen'
import MessagesScreen from './components/screens/MessagesScreen';
import Icon from './components/Icon';
import ListItem from './components/ListItem';
import AccountScreen from './components/screens/AccountScreen';
import ListingsScreen from './components/screens/ListingsScreen';
import AppInputText from './components/AppInputText';
import Switches from './components/Switches';
import AppPicker from './components/AppPicker';
import data from './config/data';
import { useState } from 'react';
import LoginScreen from './components/screens/LoginScreen';
import ImagePickers from './components/ImagePickers';
import AuthNavigator from './navigation/AuthNavigator';
import navigationThem from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';


export default function App() {
  const [country, setCountry] = useState();
  
  const { height, width, scale } = Dimensions.get('screen');
  const orientation = useDeviceOrientation();

  return (
    <NavigationContainer theme={navigationThem}>
       {/* <AuthNavigator/> */}
       <AppNavigator/>
    </NavigationContainer>
    // <SafeAreaView style={styles.container}>
    //   {/* <Button title='Click me'/>
    //   <View style={{ backgroundColor: 'dodgerblue', width: '100%', height: orientation === 'portrait' ? 70 : '100%', marginTop: 10 }}>

    //   </View> */}

    //   {/* <FlexBox/> */}
    //   {/* <Image source={require('./assets/icon.png')} style={styles.img}/> */}
    //   {/* <Touchables/> */}
    //   {/* <Buttons/> */}

    //   {/* <WelcomeScreen1/> */}
    //   {/* <ViewImageScreen/> */}
    //   {/* <Card title={"Red Jacket for sale"} subtitle={"$100"} imagePath={"https://img.freepik.com/premium-photo/woman-happy-red_1303-8698.jpg"}/>
    //   <Card title={"Couch in great condition"} subtitle={"$1200"} imagePath={"https://cdn.thewirecutter.com/wp-content/media/2022/05/sofa-buying-guide-2048px-67.jpg"}/> */}
    //   {/* <ListingDetailsScreen/> */}
    //   {/* <MessagesScreen/> */}
    //   {/* <AccountScreen/> */}
    //   {/* <ListingsScreen/> */}
    //   {/* <Switches/> */}
    //   {/* <AppPicker 
    //     selectedItem={country}
    //     onSelectItem={item => setCountry(item)}
    //     iconName={'apps'} 
    //     placeholder={'Country'} 
    //     items={data.countries}
    //   /> */}
    //   {/* <AppInputText iconName={'email'} placeholder='Username' /> */}
    //   {/* <LoginScreen/> */}
    //   {/* <ImagePickers/> */}

    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  img: {
    width: 200,
    height: 200,
  }
});
