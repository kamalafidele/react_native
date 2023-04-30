import {
  View,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  Platform,
} from "react-native";
import { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device'

import AppButton from "../AppButton";

Notifications.setNotificationHandler({
  handleNotification:  async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: true,
  }),
});

const WelcomeScreen1 = () => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  
  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);


  return (
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
        {/* <AppButton title={'Login'} onPress={async () => await schedulePushNotification() }/> */}
        <AppButton title={'Test Notification'} color="SECONDARY" onPress={async () => await schedulePushNotification() }/>
        {/* <AppButton title={'Register'} color="SECONDARY" onPress={ async () => await schedulePushNotification() }/> */}
      </View>
    </ImageBackground>
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

async function schedulePushNotification() {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Mbonera",
      body: 'Hi Kamara, Your National Identity Card has been found!!',
    },
    trigger: { 
      seconds: 2,
      channelId: 'default',
    },
  });
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
      enableVibrate: true,
      showBadge: true,
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    const PROJECT_ID = 'b1ef0d25-232a-4667-ae3e-5f545cd35adc';
    token = (await Notifications.getExpoPushTokenAsync({ projectId: PROJECT_ID })).data;
    console.log(token);
  } 
  // else {
  //   alert('Must use physical device for Push Notifications');
  // }

  return token;
}



export default WelcomeScreen1;
