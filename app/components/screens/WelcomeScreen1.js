import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";

import AppButton from "../AppButton";
import Screen from "./Screen";

const WelcomeScreen1 = ({ navigation }) => {

  return (
    <Screen>
    <ImageBackground
      blurRadius={5}
      style={styles.container}
      source={require("../../assets/house.jpg")}
    >
      <View style={styles.logoContainer}>
      <Image
          source={require("../../assets/logo_2.jpg")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>
          Sell What You Don't need
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={'Login'} onPress={() => navigation.navigate('Login') }/>
        <AppButton title={'Register'} onPress={() => navigation.navigate('Register')} color="SECONDARY"/>
      </View>
    </ImageBackground>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    // shadowColor: 'grey',
    // shadowOffset: { width: 10, height: 10 },
    // shadowOpacity: 1,
    // shadowRadius: 10,
    // backgroundColor: 'grey',
    // elevation: 10
  },
  buttonsContainer: {
    padding: 10,
    width: '100%',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20
  }
});

export default WelcomeScreen1;
