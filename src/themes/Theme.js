import { StyleSheet } from "react-native";
import { RFPercentage, RFPercentageValue } from "react-native-responsive-fontsize"
import { Platform, PixelRatio, Dimensions } from "react-native";
let width = Dimensions.get('window').width
let height = Dimensions.get('window').height
import React from 'react'
export const Theme = StyleSheet.create({
    Container: {
        flex: 1,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"

    },
    HeaderStyle: {
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "row",
        padding: 10,
        height: RFPercentage(7.0)

    },
    Button: {
        width: "100%",
        backgroundColor: "#3bcaef",
        alignItems: "center",
        justifyContent: 'center',
        height: RFPercentage(6.0)
    },
    Input: {
        width: "80%",
        backgroundColor: "transparent",
        height:60,
        alignItems: "center",
        textAlign: "center",
        fontSize: 14,
        fontFamily: Platform.OS === "ios" ? "arial" : "Roboto",
 
    },
    Header: {
        backgroundColor: "pink",
        width: "100%",
        justifyContent: "flex-end"
    },
    HeaderText: {
        fontSize: RFPercentage(2.0),
        color: "#000",
        fontFamily: Platform.OS === "ios" ? "Georgia" : "Merriweather-Light"

    },
    NormalText: {
        fontSize: RFPercentage(1.6),
        color: "#000",
        fontFamily: Platform.OS === "ios" ? "arial" : "Roboto",
    },
    wrapper: {
        flex: 1,
        height: RFPercentage(30),
        backgroundColor: "#c5c5c5"
    },
    bottomTab: {
        width: width / 3,
        alignItems: "center",
        justifyContent: "center",
    },
    changePassInput: {
        backgroundColor: "#fff",
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    iconSize:{
        height: 30,
        width: 30
    }
})

export const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: RFPercentage(1.6),
        height: RFPercentage(5),
        borderWidth: 1,
        width: "95%",
        marginTop: 5,
        textAlign: "center",
        color: "black",
        borderRadius: 10
    },
    inputAndroid: {
        fontSize: RFPercentage(1.6),
        height: RFPercentage(5),
        borderWidth: 1,
        width: "95%",
        marginTop: 5,
        textAlign: "center",
        color: "black",
        borderRadius: 10
    },
})