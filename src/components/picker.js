
import React from 'react'
import { View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { pickerSelectStyles } from "../themes/Theme";

export const Picker = props => (

    <View style={{ flex: 1, width: "100%" }}>
        <RNPickerSelect
            {...props}
            placeholder={props.placeholder}
            items={props.items}
            placeholderTextColor="#000"
            onValueChange={props.onChange}
            style={{
                ...pickerSelectStyles
            }}
            value={props.value}
            useNativeAndroidPickerStyle={false}

        />
    </View>
)