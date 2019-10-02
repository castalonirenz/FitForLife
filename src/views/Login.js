import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Alert, StyleSheet, Dimensions, ActivityIndicator, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { Theme } from "../themes/Theme";
import { Touchable, Input, ModalPass } from "../components/index";
import { RFPercentage, RFPercentageValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons'
import { Formik, Field } from "formik";
import { Auth } from "../redux/actions/Auth";
import * as Yup from "yup";
import axios from 'axios'
import { connect } from "react-redux"
import { apiUrl } from '../utils/url';
const Dimension = Dimensions.get('window').width

class Login extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    remember: false,
    loadingIndicator: false,
    showChangePass: false
  }

  initialValues = {
    username: "",
    password: ""
  };



  _onLogin = (values) => {

    this.setState({ loadingIndicator: true })
    this.props.onLogin(values)
      .then(response => {
        console.log(response)
        if (response === "success") {
          this.props.navigation.navigate('LoginSuccess')
          this.setState({ loadingIndicator: false })
        }
        else if (response === 'change') {
          this.setState({ showChangePass: true })
        }
        else if (response === "fail") {
          Alert.alert(
            'Log in failed',
            'Please check your credentials',
            [
              {
                text: 'OK',
                onPress: () => this.setState({ loadingIndicator: false })
              },
            ],
            { cancelable: false },
          );
          this.setState({ loadingIndicator: false })
        }
        else if (response === "expired") {
          Alert.alert(
            'Log in failed',
            'Account already expired, please renew your account. Proceed to the frontdesk',
            [
              {
                text: 'OK',
                onPress: () => this.setState({ loadingIndicator: false })
              },
            ],
            { cancelable: false },
          );
          this.setState({ loadingIndicator: false })
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

  _changePass = () => {
    if (this.state.old === undefined || this.state.old === "") {
      alert('password is required')
    }
    if (this.state.new === undefined || this.state.new === "") {
      alert('new password is required')
    }
    if (this.state.confirm === undefined || this.state.confirm === "") {
      alert('confirmation password is required')
    }
  else{
      axios.post(apiUrl + 'api/changePass', {
        username: this.props.credentials.length !== 0 ? this.props.credentials.cust_username : null,
        password: this.state.old,
        new_password: this.state.new,
        confirm_password: this.state.confirm
      })
        .then((response => {
          console.log(response)
          if (response.data.success) {
         
            Alert.alert(
              'Hoooooray!',
              response.data.message,
              [
                {
                  text: 'OK',
                  onPress: () => {
                    this.setState({ showChangePass: false })
                    this.props.navigation.navigate('LoginSuccess')
                  }
                },
              ],
              { cancelable: false },
            );
          }
          else if(response.data.success === false)
            // console.log(response.data.message)
            alert(response.data.message)
        }))
        .catch(err => {
          console.log(err)
        })
  }
  }
  render() {
    console.log(this.props.credentials)
    let logo
    let connectionStatus
    let loadingIndicator
    if (this.state.loadingIndicator === true) {
      loadingIndicator = <ActivityIndicator size="large" color="#3bcaef" />
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* <OfflineContainer /> */}
        <ModalPass
          // onChangUsername={(val) => this.setState({ username: val })}
          onChangeOld={(val) => this.setState({ old: val })}
          onChangeNew={(val) => this.setState({ new: val })}
          onChangeConfirm={(val) => this.setState({ confirm: val })}
          Change={this._changePass}
          visible={this.state.showChangePass}
          onRequestClose={() => this.setState({ showChangePass: false })}
        />
        <Image source={require('../assets/icon/logo.jpg')} resizeMode="contain" style={{ height: RFPercentage(7.0), width: RFPercentage(7), alignSelf: "flex-end", marginRight: 20, marginTop: 10 }} />
        <ScrollView style={{ width: "100%" }} contentContainerStyle={{ flexGrow: 1 }}>
          <Image source={require('../assets/icon/gymlogo.jpg')} 
          resizeMode="stretch" 
          style={{ height: RFPercentage(25.0), width: RFPercentage(40),  borderRadius: 10,alignSelf:"center", marginTop: 20 }} />

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
                <KeyboardAvoidingView behavior="padding" behavior="padding" enabled style={{ flex: 1, width: "100%", marginTop: 20 }}>


                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View style={{ height: RFPercentage(7.0), width: RFPercentage(7), justifyContent: "center", paddingLeft: 15 }}>
                      {/* <Icon name={Platform.OS === "ios" ? "md-mail" : "ios-mail"} size={RFPercentage(5.0)} color="#000" /> */}
                      <Image source={require('../assets/icon/email.png')} resizeMode="contain" style={{ height: RFPercentage(5.0), width: RFPercentage(5) }} />
                    </View>
                    <Input
                      keyboardType="email-address"
                      placeholderTextColor={"gray"}
                      InputStyle={[Theme.shadow, styles.inputs, { elevation: 1 }]}
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
                      InputStyle={[Theme.shadow, styles.inputs, { elevation: 1 }]}
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
                        TouchableStyle={{ borderRadius: 5 }}
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

const mapStateToProps = state => {
  return{
    credentials: state.Auth.credentials
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onLogin: (credentials) => dispatch(Auth(credentials)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
