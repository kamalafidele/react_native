import { StyleSheet, Text, SafeAreaView, Image, Button, Platform, StatusBar, View, Dimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';

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

export default function App() {
  const { height, width, scale } = Dimensions.get('screen');
  const orientation = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <Button title='Click me'/>
      <View style={{ backgroundColor: 'dodgerblue', width: '100%', height: orientation === 'portrait' ? 70 : '100%', marginTop: 10 }}>

      </View> */}

      {/* <FlexBox/> */}
      {/* <Image source={require('./assets/icon.png')} style={styles.img}/> */}
      {/* <Touchables/> */}
      {/* <Buttons/> */}

      {/* <WelcomeScreen1/> */}
      {/* <ViewImageScreen/> */}
      {/* <Card title={"Red Jacket for sale"} subtitle={"$100"} imagePath={"https://img.freepik.com/premium-photo/woman-happy-red_1303-8698.jpg"}/>
      <Card title={"Couch in great condition"} subtitle={"$1200"} imagePath={"https://cdn.thewirecutter.com/wp-content/media/2022/05/sofa-buying-guide-2048px-67.jpg"}/> */}
      {/* <ListingDetailsScreen/> */}
      {/* <MessagesScreen/> */}
      <Icon name={'email'} size={40} iconColor='blue' backgroundColor='white'/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHT,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
  }
});
