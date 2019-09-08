import { View, StyleSheet, Platform, TouchableOpacity, Text, Image, ScrollView, } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import Picture from "react-native-image-progress";
import Icon from 'react-native-vector-icons/Ionicons'
import { Theme } from '../themes/Theme'
import RF from 'react-native-responsive-fontsize'
import {withNavigation} from 'react-navigation'

export const SideBar = props => (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ width: "100%", backgroundColor: "#fff", flex: 1, alignItems: "center" }}>

            <View style={{ alignItems: "center", marginTop: 50, marginBottom: 30, justifyContent: "center" }}>
                {/* <Image
                    style={{ height: RF(15), width: RF(15), borderRadius: RF(15) / 2, backgroundColor: "#c5c5c5" }}
                    source={props.ProfilePic} /> */}

                <Picture
                    indicator={Progress.Circle}
                    indicatorProps={{ color: "#D04A02" }}
                    imageStyle={{ borderRadius: RF(15) / 2, height:RF(15), width:RF(15) }}
                    source={props.ProfilePic}
                    style={{ height: RF(15.0), width: RF(15.0), borderRadius: RF(15)/2, backgroundColor: "#c5c5c5" }} />


                <Text allowFontScaling={false} style={[Theme.HeaderText, { marginTop: 15, textAlign: "center" }]}>{props.children}</Text>
            </View>

            <TouchableOpacity
                onPress={props.HomePress}
                style={[{ width: "100%", flexDirection: "row", padding: 20, borderBottomWidth: 1, marginRight: 10, alignItems: "center" }, props.HomeBackgroundStyle]}>
                <Icon name={Platform.OS === "ios" ? "ios-home" : "md-home"} size={RF(3)} color={props.HomeIconStyle} />
                <Text allowFontScaling={false} style={[Theme.HeaderText, { color: "#000", marginLeft: 20 }, props.HomeStyle]}>Home</Text>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={props.BookmarkPress}
                style={[{ width: "100%", flexDirection: "row", padding: 20, borderBottomWidth: 1, marginRight: 10, alignItems: "center" }, props.BookmarkBackgroundStyle]}>
                <Icon name={Platform.OS === "ios" ? "ios-thumbs-up" : "md-thumbs-up"} size={RF(3)} color={props.BookmarkIconStyle} />
                <Text allowFontScaling={false} style={[Theme.HeaderText, { color: "#000", marginLeft: 20 }, props.BookmarkStyle]}>Liked</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ width: "100%", flexDirection: "row", padding: 20, borderBottomWidth: 1, marginRight: 10, alignItems: "center" }, props.ProfileBackgroundStyle]}
                onPress={props.ProfilePress}>
                <Icon name={Platform.OS === "ios" ? "ios-person" : "md-person"} size={RF(3)} color={props.ProfileIconStyle} />
                <Text allowFontScaling={false} style={[Theme.HeaderText, { color: "#000", marginLeft: 20 }, props.ProfileStyle]}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[{ width: "100%", flexDirection: "row", padding: 20, borderBottomWidth: 1, marginRight: 10, alignItems: "center" }, props.AboutBackgroundStyle]}
                onPress={props.AboutPress}>
                <Icon name={Platform.OS === "ios" ? "ios-information-circle" : "md-information-circle"} size={RF(2.5)} color={props.AboutIconStyle} />
                {/* <Image source={require('../assets/icon/info.png')} resizeMode="contain" style={[{ height: RF(3), width: RF(3), tintColor: "gray" }, props.AboutIconStyle]} /> */}
                <Text allowFontScaling={false} style={[Theme.HeaderText, { color: "#000", marginLeft: 20 }, props.AboutStyle]}>About</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[{ width: "100%", flexDirection: "row", padding: 20, borderBottomWidth: 1, marginRight: 10, alignItems: "center", }, props.LogoutBackgroundStyle]}
                onPress={props.logoutPress}>
                {/* <Icon name={Platform.OS === "ios" ? "ios-information-circle" : "md-information-circle"} size={RF(2.5)} color={props.AboutIconStyle} /> */}
                <Image source={require('../assets/icon/logout.png')} resizeMode="contain" style={[{ height: RF(3), width: RF(3), tintColor: Platform.OS === "ios" ? "#000" : "gray" }, props.AboutIconStyle]} />
                <Text allowFontScaling={false} style={[Theme.HeaderText, { color: "#000", marginLeft: 13}, props.logoutStyle]}>Logout</Text>
            </TouchableOpacity>


        </View>
    </ScrollView>
)