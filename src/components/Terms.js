import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity, WebView, Dimensions } from 'react-native';
import { Theme } from "../themes/Theme";
import RF from 'react-native-responsive-fontsize'
import { Toast } from "native-base";
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height - 100
export const TermsModal = props => (
  <Modal
    presentationStyle="overFullScreen"
    animationType="fade"
    transparent={false}
    visible={props.isVisible}
    onRequestClose={props.onClose}>

    <View style={{ overflow: 'hidden', flex: 1, padding: 20, }}>
      <WebView
        onError={() => Toast.show({
          text: 'Cannot load terms & conditons, please try again.',
          type: 'danger',
          duration: 5000,
          textStyle: {
            fontSize: RF(2.0)
          },
          position: "top"
        })}
        startInLoadingState={true}
        scalesPageToFit={true}
        source={{ uri: "https://www.pwc.com/ph/en/about-us/ph-transparency-notice.html" }}
      />
      <TouchableOpacity
        style={{ backgroundColor: "#EB8C00", alignItems: "center", justifyContent: "center", marginTop: 20, height: RF(5) }}
        onPress={props.onClose}>
        <Text style={[Theme.NormalTextm, { color: "#fff" }]}>I agree</Text>
      </TouchableOpacity>
    </View>
  </Modal>
)

