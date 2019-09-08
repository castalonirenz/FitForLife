import { Modal, View, Text, TouchableOpacity, Image, Dimensions, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, StyleSheet } from "react-native";
import React from 'react'
import { Theme } from "../themes/Theme";
import RF from 'react-native-responsive-fontsize'
import { Input, Touchable } from "../components/index";
const width = Dimensions.get('screen').width
import Icon from "react-native-vector-icons/Ionicons";
const height = Dimensions.get('screen').height
import { Root } from "native-base";
import { Formik, Field } from "formik";
import * as Yup from "yup";
export const CustomModal = props => (
    <Modal
        presentationStyle="overFullScreen"
        animationType="fade"
        transparent={true}
        visible={props.isVisible}
        onRequestClose={props.onClose}>

        <View style={{ flex: 1, backgroundColor: 'rgba(50, 44, 52, 0.9)', alignItems: "center", justifyContent: 'center', }}>
            <View style={{ flexDirection: "row", alignItems: "center", width: width - 120, marginRight: 50, }}>
                <Image source={props.ImgSource} resizeMode="contain" style={{ height: RF(7), width: RF(7), tintColor: "#EB8C00" }} />
                <Text allowFontScaling={false} style={[Theme.HeaderText, { color: "#fff", marginLeft: 20 }]}>{props.children}</Text>
            </View>
            <TouchableOpacity
                style={{ backgroundColor: "#EB8C00", width: RF(20), height: RF(5), alignItems: "center", justifyContent: "center", marginTop: 20, position: "absolute", bottom: 230, right: 30, }}
                onPress={props.modalClose}>
                <Text allowFontScaling={false} style={[Theme.NormalText, { color: "#fff", }]}>OK</Text>
            </TouchableOpacity>
        </View>
    </Modal>

)

export const ModalPass = props => (

    <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        presentationStyle="overFullScreen"
        onRequestClose={props.onRequestClose}>
        <Root>
            <View style={{ backgroundColor: "rgba(0,0,0,0.8)", flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{ flex: 1, backgroundColor: "#fff", width: width, alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity onPress={props.Cancel} style={{ alignItems: "center", justifyContent: "center", alignSelf: "flex-start", marginLeft: 20 }}>
                        <Icon name="ios-close" color="#000" size={RF(6)} />
                        {/* <Touchable TouchablePress={props.Cancel} TouchableStyle={{ backgroundColor: "#e0301e" }}>
                            Cancel
                        </Touchable> */}
                    </TouchableOpacity>

                    <KeyboardAvoidingView behavior="padding" style={{ width: "90%", alignItems: "center" }}>
                        <Text style={Theme.HeaderText}>Change Password</Text>
                        <Input
                            onChangeText={props.onChangeOld} value={props.valueOld}
                            secureTextEntry={true} placeholder="Old password" InputStyle={props.oldPassStyle} />
                        <Text style={[Theme.NormalText, { color: "#e0301e" }]}>{props.currentPassError}</Text>
                        <Input
                            onChangeText={props.onChangeNew} value={props.valueNew}
                            secureTextEntry={true} placeholder="New password" InputStyle={props.newPassStyle} />
                        <Text style={[Theme.NormalText, { color: "#e0301e" }]}>{props.newPassError}</Text>
                        <Input
                            onChangeText={props.onChangeConfirm} value={props.valueConfirm}
                            secureTextEntry={true} placeholder="Confirm password" InputStyle={props.confirmPassStyle} />
                        <Text style={[Theme.NormalText, { color: "#e0301e" }]}>{props.confirmPassError}</Text>
                    </KeyboardAvoidingView>

                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginTop: 30, alignSelf: "flex-end" }}>

                        <View style={{ width: "30%", marginLeft: 10 }}>
                            <Touchable TouchablePress={props.Change}>
                                Submit
                        </Touchable>
                        </View>
                    </View>
                </View>
            </View>
        </Root>
    </Modal>
)

export const LoadingModal = props => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.loadingVisible}
        presentationStyle="overFullScreen"
        onRequestClose={props.onRequestClose}>
        <View style={{ backgroundColor: "rgba(0,0,0,0.8)", flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={[Theme.HeaderText, { color: "#fff" }]}>Please, wait....</Text>
            <ActivityIndicator size={"large"} color={"#D04a02"} style={{ marginTop: 10 }} />
        </View>
    </Modal>
)

export const MoreModal = props => (
    <Modal
        animationType="fade"
        transparent={true}
        visible={props.showMore}
        presentationStyle="overFullScreen"
        onRequestClose={props.onRequestClose}>
        <TouchableWithoutFeedback onPress={props.OutsidePress}>
            <View style={{ height: height, width: width, backgroundColor: "rgba(0,0,0,0)", zIndex: 0 }}>
                <View style={styles.containerStyle}>
                    <View style={{ width: "100%", }}>
                        <Touchable TouchablePress={props.EditPreference} TextStyle={{ color: "#000" }} TouchableStyle={{ backgroundColor: "#fff", alignItems: null }}>Update preferences</Touchable>
                    </View>

                    <View style={{ width: "100%", }}>
                        <Touchable  TouchablePress={props.EditProfile} TextStyle={{ color: "#000" }} TouchableStyle={{  backgroundColor: "#fff", alignItems: null }}>Edit profile</Touchable>
                    </View>

                    <View style={{ width: "100%" }}>
                        <Touchable TouchablePress={props.ChangePassword}
                            TextStyle={{ color: "#000" }}
                            TouchableStyle={{ backgroundColor: "#fff", alignItems: null }}>Change password</Touchable>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>

)

const styles = StyleSheet.create({
    containerStyle: {
        position: "absolute",
        top: 20,
        right: 10,
        padding: 20,
        elevation: 20,
        backgroundColor: "#fff",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: 'black',
        shadowOpacity: 0.2,
    }
})