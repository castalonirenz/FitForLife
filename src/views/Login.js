import React, { Component } from 'react';
import { View, Text, ScrollView, Image, NetInfo, StyleSheet, Dimensions, ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { Theme } from "../themes/Theme";
import { Touchable, Input } from "../components/index";
import { RFPercentage, RFPercentageValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons'
import { Formik, Field } from "formik";
import { Auth } from "../redux/actions/Auth";
import * as Yup from "yup";
import { connect } from "react-redux"
const Dimension = Dimensions.get('window').width

class Login extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    remember: false,
    loadingIndicator: false
  }

  initialValues = {
    username: "",
    password: ""
  };

  

  _onLogin = (values) => {
    //     uuid
    //     model
    //     brand
    //     platform
    //     serial
    this.setState({loadingIndicator: true})
    this.props.onLogin(values)
    .then(response => {
      if(response === "success"){
        this.props.navigation.navigate('LoginSuccess')
        this.setState({loadingIndicator: false})
      }
      else{
        alert('invalid credentials')
        this.setState({loadingIndicator: false})
      }
    })
    // this.props.navigation.navigate('LoginSuccess')

  }

  componentDidMount() {
    // this.props.navigation.navigate('LoginSuccess')
    // this.props.KeepSignedIn.remember ? this.props.onLogin(this.props.KeepSignedIn.credentials, this.props.KeepSignedIn.remember, DeviceInfo) : null
  }

  componentDidUpdate() {
    // if (this.props.onLoginStatus === true) {
    //   this.props.navigation.navigate('Drawer')
    //   this.props.articlesData()
    // }
  }
  render() {
    let logo
    let connectionStatus
    let loadingIndicator
    if (this.state.loadingIndicator === true) {
      loadingIndicator = <ActivityIndicator size="large" color="#3bcaef" />
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <OfflineContainer /> */}
        <Image source={require('../assets/icon/logo.jpg')} resizeMode="contain" style={{ height: RFPercentage(7.0), width: RFPercentage(7), alignSelf: "flex-end", marginRight: 20, marginTop: 10 }} />
        <ScrollView style={{ width: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <Formik
            initialValues={this.initialValues}
            onSubmit={this._onLogin}
            validationSchema={
              Yup.object().shape({
                username: Yup.string()
                  .required("Please enter your username"),
                password: Yup.string()
                  .required("Please enter your password"),
              })}
            render={({
              values,
              handleSubmit,
              handleChange,
              errors,
              touched,
              resetForm
            }) => (
                <KeyboardAvoidingView behavior="padding" behavior="padding" enabled style={{ flex: 1, width: "100%", marginTop: "40%" }}>


                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ height: RFPercentage(7.0), width: RFPercentage(7), justifyContent: "center", paddingLeft: 15 }}>
                      {/* <Icon name={Platform.OS === "ios" ? "md-mail" : "ios-mail"} size={RFPercentage(5.0)} color="#000" /> */}
                      <Image source={require('../assets/icon/email.png')} resizeMode="contain" style={{ height: RFPercentage(5.0), width: RFPercentage(5) }} />
                    </View>
                    <Input
                      keyboardType="email-address"
                      placeholderTextColor={"gray"}
                      InputStyle={[Theme.shadow,styles.inputs, {elevation: 1}]}
                      onChangeText={handleChange("username")}
                      value={values.username}
                      name="username"
                      placeholder="Username" />
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={[Theme.NormalText, { color: "red" }]}>
                      {errors.username && touched.username ? errors.username : null}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30, }}>
                    <View style={{ height: RFPercentage(7.0), width: RFPercentage(7), justifyContent: "center", paddingLeft: 20 }}>
                      <Icon name={Platform.OS === "ios" ? "md-lock" : "ios-lock"} size={RFPercentage(5.0)} color="#000" />
                    </View>
                    <Input
                      //onEndEditing={handleSubmit}
                      returnKeyType="go"
                      InputStyle={[Theme.shadow,styles.inputs, {elevation: 1}]}
                      onChangeText={handleChange("password")}
                      placeholderTextColor={"gray"}
                      secureTextEntry={true}
                      value={values.password}
                      name="password"
                      placeholder="Password" />

                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={[Theme.NormalText, { color: "red" }]}>
                      {errors.password && touched.password ? errors.password : null}
                    </Text>
                  </View>


                  {loadingIndicator}

                  <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginTop: 30 }}>
                    <View style={{ width: "45%", marginRight: 20 }}>
                      <Touchable 
                        TouchableStyle={{borderRadius: 5}}
                        TouchablePress={handleSubmit}
                          // TouchablePress={()=>this.props.navigation.navigate('Home')}
                        TextStyle={{ fontSize: RFPercentage(2.0) }}>
                        Login
                     </Touchable>
                     
                    </View>

                  
                  </View>



                </KeyboardAvoidingView>
              )} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  inputs: {
    width: "80%", color: "#000", textAlign: null, padding: 10
  }
})


const mapDispatchToProps = dispatch => {
  return {
    onLogin: (credentials) => dispatch(Auth(credentials)),

  }
}

export default connect(null, mapDispatchToProps)(Login)
