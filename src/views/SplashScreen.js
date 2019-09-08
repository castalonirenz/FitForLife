import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions, Animated, Platform } from 'react-native';
// import RF from 'react-native-responsive-fontsize'
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
const ScreenDimension = Dimensions.get('window').width
import { connect } from "react-redux";
class SplashScreen extends Component {
  static navigationOptions = {
    header: null
  }
  constructor(props) {
    super(props);
    this.state = {
    };
    this.springValue = new Animated.Value(0.3)
  }

  componentDidMount() {
    // this.props.onLoad()
    // console.log('mounted')
    // this.blabla()
    this.props.navigation.navigate('Login')
  }

  blabla = () =>{
    // setTimeout(function(){
    //   this.props.navigation.navigate('Login')
    //   // console.log('counting')
    // },2000)
  }

  async componentDidUpdate() {
    // let load = await this.props.loadingStatus
    // if (load === false) {
    //   // this.props.KeepSignedIn.remember ? this.props.navigation.navigate('Auth') : this.props.navigation.navigate('Login')
    //   this.props.navigation.navigate('Login')
    // }

  }

  render() {
    let loadingIndicator
    // if (this.props.loadingStatus === true) {
      loadingIndicator = <ActivityIndicator size="large" color="#D04A02" />
    // }
    return (
      <View style={{backgroundColor: "#FFF", alignItems:"center", flex: 1}}>
        <Image
          resizeMode="contain"
          style={{ height: RFPercentage(15), marginTop: "31%" }}
          source={require('../assets/icon/logo.jpg')} />
        <Text allowFontScaling={false} style={{ marginTop: "7.5%",fontSize:RFPercentage(3), fontFamily: Platform.OS === "ios" ? "Georgia" : "Merriweather-Regular" }}>App Name</Text>
        {loadingIndicator}

      </View>
    );
  }
}

// const mapStateToprops = state => {
//   return {
//     loadingStatus: state.loadingStatus.loadingStatus,
//     KeepSignedIn: state.userCredentials
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onLoad: () => dispatch(ArticlesLoad())
//   }
// }
export default SplashScreen
