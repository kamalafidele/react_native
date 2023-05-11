import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device'

Notifications.setNotificationHandler({
    handleNotification:  async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: true,
    }),
  });

function TestNotificationScreen(props) {
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
        <View>
            <AppButton title={'Test Notification'} color="SECONDARY" onPress={async () => await schedulePushNotification() }/>
        </View>
    );
}

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

export default TestNotificationScreen;