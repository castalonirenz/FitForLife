
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
                onPress={props.itemSelected.bind(null, items)}
                style={[Theme.shadow,
                {
                    marginLeft: index >= 1 ? 10 : 0, height: height / 4, flexWrap:'wrap', padding: 10,
                    backgroundColor: "#fff", alignItems: "center", borderRadius: 10, marginTop: 10
                }]}>
                <Image
                    resizeMode="contain"
                    style={{ width: width / 2, height: 150 }}
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