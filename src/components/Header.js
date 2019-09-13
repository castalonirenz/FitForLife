import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TouchableWithoutFeedback, Platform, Image} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { Theme } from '../themes/Theme';
class Header extends Component{


    render(){
        return(
            <View style={[Theme.Shadow,{width:"100%", height:RFPercentage(7), backgroundColor:"#3bcaef", flexDirection:"row", alignItems:"center"}]}>
                <View 
                         style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", width:"100%", paddingLeft: 20, paddingRight: 20 }}>
                    <TouchableWithoutFeedback
                        // onPress={() => this.props.navigation.toggleDrawer()}
                        onPress={this.props.Press}
                        >
                        <Image 
                            source={this.props.ImageSource} 
                            style={this.props.ImageStyle}/>
                        {/* <Icon name="ios-menu" size={RFPercentage(4)} color="#fff"/> */}
                    </TouchableWithoutFeedback>
                    <Text style={[Theme.HeaderText, {color:"#fff"}]}>{this.props.headerText}</Text>
                   <TouchableOpacity onPress={this.props.NotificationPress}>
                        {/* <Icon name={Platform.OS === "ios" ? "ios-notifications" : "md-notifications"} size={RFPercentage(3)} color="#fff" /> */}
                   </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withNavigation(Header)
