import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'react-native-firebase';
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this._getToken()
    this._getPermission()
    this.createNotificationListeners();
  }

  async createNotificationListeners() {
    /*
    * Triggered when a particular notification has been received in foreground
    * */
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body, data } = notification;
      this.showAlert(title, body, data, "foreground");
    });

    /*
    * If your app is in background, you can listen for when a notification is clicked / tapped / opened as follows:
    * */
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      this.showAlert(title, body, data);
    });

    /*
    * If your app is closed, you can check if it was opened by a notification being clicked / tapped / opened as follows:
    * */
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body, data } = notificationOpen.notification;
      console.log(title, body, data, "notification open")
      this.showAlert(title, body, data);
    }
    /*
    * Triggered for data only payload in foreground
    * */
    this.messageListener = firebase.messaging().onMessage((message) => {
      //process data message
      console.log(JSON.stringify(message));
    });
  }

  showAlert(title, body, data) {
    console.log(title, body, data, "this is me")
    Alert.alert(
      title, body,
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false },
    );
  }



  _getPermission = async () => {
    const enabled = await firebase.messaging().hasPermission();
    if (enabled) {
      // user has permissions
      console.log('have permission')
    } else {
      // user doesn't have permission
      console.log('dont have permission')
      try {
        await firebase.messaging().requestPermission();
        // User has authorised
      } catch (error) {
        // User has rejected permissions
      }
    }
  }

  _getToken = async () => {
    const fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      // alert(fcmToken)
      console.log(fcmToken, "device Token")
    } else {
      console.log("failed")
    }
  }

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}

export default HomeScreen;
