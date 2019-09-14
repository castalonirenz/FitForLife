import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react'
import {View, Image} from 'react-native'
import {Theme} from '../themes/Theme'
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from "../views/HomeScreen";
import ProfileScreen from '../views/Profile'
const TabNav = createBottomTabNavigator({
    Workout: {

        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Feed",
            tabBarIcon: ({ tintColor }) => (
                // <Icon name={Platform.OS === "ios" ? "ios-home" : "md-home"} size={RFPercentage(3)} color={tintColor} />
                <View style={{alignItems:"center"}}>
                    <Image source={require('../assets/icon/home.png')} style={[Theme.iconSize, { tintColor: tintColor }]} />
                </View>
            )
        }
    },
    // Diet: {
    //     screen: HomeScreen,
    //     navigationOptions: {
    //         // tabBarLabel: "Notification",
    //         tabBarIcon: ({ tintColor }) => (
    //             <View style={{alignItems:"center"}}>
    //                 <Image source={require('../assets/icon/fork.png')} style={[Theme.iconSize, { tintColor: tintColor }]}/>
    //                 {/* <FontAwesomeIcon icon={faBell} size={RFPercentage(3)} color={tintColor} /> */}
                   
    //             </View>
    //             // <BadgedIcon type="ionicon" name="ios-notifications" />
    //         )
    //     }
    // }
    // ,
    qr: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => (
                <View style={{ alignItems: "center" }}>
                    <Image source={require('../assets/icon/qr-code.png')} style={[Theme.iconSize,{ tintColor: tintColor }]} />
                </View>
            )
        }
    }
    ,
    profile: {
        screen: ProfileScreen,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => (
                <View style={{ alignItems: "center" }}>
                    <Image source={require('../assets/icon/Image.png')} style={[Theme.iconSize,{ tintColor: tintColor }]} />
                </View>
            )
        }
    }
}, {
        tabBarOptions: {
            activeTintColor: "#3bcaef",
            showLabel: false
        }
    })

export const TabNavContainer = createAppContainer(TabNav)
