import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { View, TouchableWithoutFeedback, Image, Text, Platform } from "react-native";
import { Theme } from "../themes/Theme";
import RF from 'react-native-responsive-fontsize'
export const Tab = props =>(

    <View style={{ width: "100%", flexDirection: "row", height: RF(6.5) }}>
    <TouchableWithoutFeedback
        onPress={props.tab1}>
        <View style={Theme.bottomTab}>
            <Image source={require('../assets/icon/photo.png')} style={{ tintColor: props.tab1Color, height: RF(3.5), width: RF(3.5) }} />
            <Text allowFontScaling={false} style={[Theme.NormalText]}>Authors</Text>
        </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback
        onPress={props.tab2}>
        <View style={[Theme.bottomTab]}>
            <Image source={require('../assets/icon/synopsis.png')} style={{ tintColor: props.tab2Color, height: RF(3.5), width: RF(3.5) }} />
            <Text allowFontScaling={false} style={[Theme.NormalText]}>Synopsis</Text>
        </View>
    </TouchableWithoutFeedback>

    <TouchableWithoutFeedback
        onPress={props.tab3}>
        <View style={[Theme.bottomTab]}>
            <Icon name={Platform.OS === "ios" ? "ios-link" : "md-link"} color={props.tab3Color} size={RF(4)} />
            {/* <Image source={require('../assets/icon/synopsis.png')} style={{tintColor:!this.state.tab3 ? "#7d7d7d" : "#D04A02", height:RF(4.0), width:RF(4)}}/> */}
            <Text allowFontScaling={false} style={[Theme.NormalText]}>Links</Text>
        </View>
    </TouchableWithoutFeedback>
</View>
)