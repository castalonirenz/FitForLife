import { TextInput, View } from "react-native";
import { Theme } from "../themes/Theme";
import React from 'react'
export const Input = props =>(
    <TextInput
    {...props}
    style={[Theme.Input,props.InputStyle]}
    />
)