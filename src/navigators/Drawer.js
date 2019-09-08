import { createDrawerNavigator, DrawerItems, createAppContainer, NavigationActions } from "react-navigation";
import React, { Component } from 'react'
import * as Progress from 'react-native-progress';
import Picture from "react-native-image-progress";
import { ScrollView, SafeAreaView, View, Text, TouchableOpacity, Alert, Image, Platform } from 'react-native'
import RF from 'react-native-responsive-fontsize'
import { Theme } from '../../themes/Theme'
import { connect } from "react-redux"
import { userURL } from "../../Redux/config";
import Icon from 'react-native-vector-icons/Ionicons'
import { actionLogout, } from "../../Redux/actions/index";
import {HomeNavContainer} from "../navigators/StackNav";
const navigateAction = NavigationActions.navigate({
    routeName: 'Login'
})

// const mapStateToProps = state => {
//     return {
//         onCredentials: state.userCredentials.credentials
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onLogout: () => dispatch(actionLogout())
//     }
// }

const ConnetUser = connect(mapStateToProps, mapDispatchToProps)

//  export default connect(mapStateToProps, null)(CustomDrawerComponent)

const _onLogout = (logout, navigate) => {
    Alert.alert(
        'Logout',
        'Do you really want to logout?',
        [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'Yes', onPress: handleLogout.bind(null, logout, navigate) },
        ],
        { cancelable: false },
    );

}

const handleLogout = async (logout, navigate) => {
    await logout()
    navigate('Login')

    //this.props.navigation.dispatch(navigateAction)
}


const CustomDrawerComponent = props => (
    <SafeAreaView style={{ flex: 1 }}>
        {/* <View style={{ alignItems: "center", marginTop: 50, marginBottom: 30, justifyContent: "center" }}>
            <Picture
                indicator={Progress.Circle}
                indicatorProps={{ color: "#D04A02" }}
                imageStyle={{ borderRadius: RF(15) / 2, height: RF(15), width: RF(15) }}
                source={props.onCredentials.profile !== null ? { uri: userURL + props.onCredentials.profile } : require('../../assets/icon/user.png')}
                style={{ height: RF(15.0), width: RF(15.0), borderRadius: RF(15) / 2, backgroundColor: "#c5c5c5" }} />
            <Text allowFontScaling={false} style={[Theme.HeaderText, { marginTop: 15, textAlign: "center" }]}>{props.onCredentials.first_name}{'\n'}{props.onCredentials.last_name}{'\n'}{props.onCredentials.email}</Text>
        </View> */}

        <ScrollView>
            <DrawerItems
                {...props} />
            <View style={{flexDirection:"row"}}>
                {/* <View style={{width:25}}>

                </View> */}
                <TouchableOpacity
                    style={{ marginTop: 10, width: "100%", marginLeft: 20, justifyContent: "center", width: "100%" }}
                    onPress={_onLogout.bind(null, props.onLogout, props.navigation.navigate)}>
                    {/* <Image source={require('../../assets/icon/logout.png')} resizeMode="contain" style={[{ height: RF(4), width: RF(4), tintColor: Platform.OS === "ios" ? "#000" : "gray" }]} /> */}
                    <Text style={[Theme.HeaderText, { fontSize: RF(2.0) }]}>Logout</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    </SafeAreaView>
);

const drawerItems = ConnetUser(CustomDrawerComponent)


const Drawer = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavContainer,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="ios-home" size={RF(4)} color={tintColor} />
            }
        },
        Liked: {
            screen: HomeNavContainer,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="ios-thumbs-up" size={RF(4)} color={tintColor} />
            }
        },
        Profile: {
            screen: HomeNavContainer,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="ios-person" size={RF(4)} color={tintColor} />
            }
        },
        About: {
            screen: HomeNavContainer,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="ios-information-circle-outline" size={RF(4)} color={tintColor} />
            }
        }
    },
    {

        contentComponent: drawerItems,
        contentOptions: {
            activeTintColor: "#fff",
            inactiveTintColor: "#000",
            activeBackgroundColor: "#d04a02",
            inactiveBackgroundColor: "#fff",
            labelStyle: {
                fontSize: RF(2.0),
                fontWeight: "normal",
                fontFamily: Platform.OS === "ios" ? "Georgia" : "Merriweather-Light"
            },
            itemsContainerStyle: {
                marginVertical: 0,
            },
            iconContainerStyle: {
                width: RF(5)

            }

        }

    }

);

export const DrawerContainer = createAppContainer(Drawer);

