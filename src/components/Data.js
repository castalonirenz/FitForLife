
import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import { Theme } from "../themes/Theme";
const {width, height} = Dimensions.get('screen')
export const Data = props => {
    
    let data = props.data
    let dataComponent
    if(data.length !== 0 || data !== undefined){
         dataComponent = data.map((items, index) => (
            <TouchableOpacity
                key={index}
                onPress={props.itemSelected.bind(null, items)}
                style={[Theme.shadow,
                {
                    height: height / 3, padding: 10, width:"100%", 
                    backgroundColor: "#fff", alignItems: "center", borderRadius: 10, marginTop: 10
                }]}>
                <Image
                    resizeMode="contain"
                    style={{ width: width * .8, height: "90%" }}
                    source={items.image} />
                 <Text style={Theme.HeaderText}>{items.type}{items.name}</Text>
            </TouchableOpacity>
        ))
    }
    return (
        <View style={[{  padding: 10}, props.parentStyle,]}>
            {dataComponent}
        </View>
    )
}