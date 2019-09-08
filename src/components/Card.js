import { TouchableOpacity, Text, View, Image, Platform, Dimensions } from "react-native";
import { Theme } from "../themes/Theme";
import React from 'react'
import RF from 'react-native-responsive-fontsize'
import Picture from "react-native-image-progress";
import ProgressState from 'react-native-progress/Bar';
import * as Progress from 'react-native-progress';
const { width, height } = Dimensions.get('window');
const cardSize = width - 50
let Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
export const Card = props => (
    <View style={props.CardStyle}>
        <Picture
            indicator={Progress.Circle}
            indicatorProps={{color:"#D04A02"}}
            style={props.ImageStyle}
            source={props.ImageSource} />
        <View style={[{ position: "absolute", bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', alignItems: 'center', paddingLeft: 5, paddingRight: 5, width:"100%", justifyContent: 'center', }, props.CinnerStyle]}>
            <Text style={[Theme.HeaderText, props.TextStyle, { fontFamily: Platform.OS === "ios" ? "Georgia" : "Merriweather-Regular", color:"#fff"}]} numberOfLines={1}>
                {Capitalize(props.children)}
            </Text>
        </View>
    </View>
)
