
import React, { Component } from 'react'
import { View, Image, Text, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";
import { Theme } from "../themes/Theme";
import { exercise } from "../utils/exercise";
const {width} = Dimensions.get('screen')
export const Exercise = props => {
    
    let exercise = props.exercise
    let exerciseComponent
    if(exercise.length !== 0 || exercise !== undefined){
         exerciseComponent = props.exercise.map((items, index) => (
            console.log(items.type,''),
            <TouchableOpacity
                onPress={props.exerciseSelected.bind(null, items)}
                style={[Theme.shadow,
                {
                    marginLeft: index >= 1 ? 10 : 0,
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
            {exerciseComponent}
        </View>
    )
}