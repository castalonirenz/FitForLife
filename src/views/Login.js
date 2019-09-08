import React, { Component } from 'react';
import { View, Text, ScrollView, Image, NetInfo, StyleSheet, Dimensions, ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { Theme } from "../themes/Theme";
import { Touchable, Input } from "../components/index";
import { RFPercentage, RFPercentageValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons'
import { Formik, Field } from "formik";
// import { actionLogin } from "../Redux/actions/index";
import * as Yup from "yup";
import { connect } from "react-redux"
import { CheckBox } from 'native-base';
// import { setArticles, ArticlesLoad, } from "../Redux/actions/articlesData";
// import OfflineContainer from "../components/OfflineNotice";
const Dimension = Dimensions.get('window').width
// import DeviceInfo from 'react-native-device-info';

// const deviceInfo = {
//   DeviceID: DeviceInfo.getUniqueID(),
//   Model: DeviceInfo.getModel(),
//   Brand: DeviceInfo.getBrand(),
//   Platform: Platform.OS,
//   Serial: "none"
// }

class Login extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    remember: false
  }

  initialValues = {
    email: "",
    password: ""
  };

  

  _onLogin = (values) => {
    //     uuid
    //     model
    //     brand
    //     platform
    //     serial

    // this.props.onLogin(values, this.state.remember, deviceInfo)
    this.props.navigation.navigate('LoginSuccess')

  }

  componentDidMount() {
    this.props.navigation.navigate('LoginSuccess')
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
    // if (this.props.loadingStatus === true) {
    //   loadingIndicator = <ActivityIndicator size="large" color="#D04A02" />
    // }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <Text>Template</Text>
        {/* <OfflineContainer /> */}
        <Image source={require('../assets/icon/logo.jpg')} resizeMode="contain" style={{ height: RFPercentage(7.0), width: RFPercentage(7), alignSelf: "flex-end", marginRight: 20, marginTop: 10 }} />
        <ScrollView style={{ width: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <Formik
            initialValues={this.initialValues}
            onSubmit={this._onLogin}
            validationSchema={
              Yup.object().shape({
                email: Yup.string()
                  .email("Email is Invalid")
                  .required("Please enter your email"),
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
                      InputStyle={[styles.inputs]}
                      onChangeText={handleChange("email")}
                      value={values.email}
                      name="email"
                      placeholder="Email address" />
                  </View>
                  <View style={{ alignItems: "center" }}>
                    <Text style={[Theme.NormalText, { color: "red" }]}>
                      {errors.email && touched.email ? errors.email : null}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center", marginTop: 30, }}>
                    <View style={{ height: RFPercentage(7.0), width: RFPercentage(7), justifyContent: "center", paddingLeft: 20 }}>
                      <Icon name={Platform.OS === "ios" ? "md-lock" : "ios-lock"} size={RFPercentage(5.0)} color="#000" />
                    </View>
                    <Input
                      //onEndEditing={handleSubmit}
                      returnKeyType="go"
                      InputStyle={[styles.inputs]}
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

                  <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
                    <CheckBox checked={this.state.remember} color="#FFB600" onPress={() => this.setState({ remember: !this.state.remember ? true : false })} />
                    <Text style={[Theme.NormalText, { marginLeft: 15 }]}>Keep me signed in</Text>
                  </View>



                  {/* {loadingIndicator} */}

                  <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginTop: 30 }}>
                    <View style={{ width: "45%", marginRight: 20 }}>
                      <Touchable TouchablePress={handleSubmit}
                        TextStyle={{ fontSize: RFPercentage(2.0) }}>
                        Login
                     </Touchable>
                    </View>

                    <View style={{ width: "45%", alignItems: "center" }}>
                      <Touchable TouchablePress={() => this.props.navigation.navigate('Register')}
                        TouchableStyle={{ backgroundColor: "#000" }}
                        TextStyle={{ fontSize: RFPercentage(2.0) }}>
                        Register
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
// const mapStateToProps = state => {
//   return {
//     onLoginStatus: state.userCredentials.loginStatus,
//     loadingStatus: state.loadingStatus.loadingStatus,
//     KeepSignedIn: state.userCredentials
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: (credentials, remember, deviceInfo) => dispatch(actionLogin(credentials,remember, deviceInfo)),
//     articlesData: () => dispatch(ArticlesLoad()),

//   }
// }

export default connect(null, null)(Login)
