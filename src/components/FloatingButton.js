import { Fab, Button } from "native-base";
import React from 'react'
import { Image, Text } from "react-native";
import { Theme } from "../themes/Theme";
import RF from 'react-native-responsive-fontsize'
export const FloatingButton = props => (
    <Fab
        active={props.active}
        direction="up"
        style={{ backgroundColor: '#D04A02' }}
        position="bottomLeft"
        onPress={props.ActionButton}>

        <Image style={{ height: RF(5), width: RF(5), tintColor:"#fff" }} source={require('../assets/icon/fontSize.png')} />
        <Button onPress={props.decrease} style={{ backgroundColor: '#EB8C00' }}>
            <Image style={{ height: RF(4), width: RF(4), tintColor:"#fff" }} source={require('../assets/icon/FontMinus.png')} />
          
        </Button>

        <Button onPress={props.increase} style={{ backgroundColor: '#FFB600' }}>
            <Image style={{ height: RF(4), width: RF(4), tintColor:"#fff" }} source={require('../assets/icon/FontAdd.png')} />
            
        </Button> 


    </Fab>
)