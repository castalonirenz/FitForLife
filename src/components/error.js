import { View, Text, StyleSheet, Platform } from "react-native";
import React from 'react'
import { Theme } from "../themes/Theme";
import Icon from 'react-native-vector-icons/Ionicons'
import RF from "react-native-responsive-fontsize";
export const Error = props =>(
    <View style={Theme.Container}>
        <Text style={[Theme.HeaderText, {color:"red", fontSize:RF(4)}]}>Something went wrong!</Text>
        <Text style={[Theme.HeaderText, {color:"red", fontSize:RF(2.5)}]}>Please try again later.</Text>
        <Icon name={Platform.OS === "ios" ? "ios-construct" : "md-construct"} size={RF(30)} color="#000"/>
    </View>
)