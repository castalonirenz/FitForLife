
import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { Theme } from "../themes/Theme";
import { exercise } from "../utils/exercise";
export const Exercise = props => {
    
    let exerciseComponent = exercise.map((items, index) => (
 
        <TouchableOpacity
                style={[Theme.shadow,
                 { backgroundColor: "#fff", alignItems: "center", borderRadius: 10, marginLeft: 10, marginTop: 10, padding: 10 }]}>
                <Image
                    resizeMode="contain"
                    style={{ width: 150, height: 150 }}
                    source={items.image} />
                <Text style={Theme.HeaderText}>{items.type}</Text>
            </TouchableOpacity>
    ))
    return (
        <View style={{flex: 1, flexDirection:"row", flexWrap: 'wrap', padding: 10, justifyContent:"center"}}>
            {exerciseComponent}
        </View>
    )
}