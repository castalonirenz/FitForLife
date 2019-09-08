import { TouchableOpacity, Text } from "react-native";
import React from 'react'
import { Theme } from "../themes/Theme";
export const Touchable = props =>(
    <TouchableOpacity
        {...props}
        disabled={props.disabled}
        onPress={props.TouchablePress}
        style={[Theme.Button, props.TouchableStyle]}>
        <Text allowFontScaling={false} style={[Theme.NormalText,{color:"#fff"}, props.TextStyle]}>{props.children}</Text>
    </TouchableOpacity>
)