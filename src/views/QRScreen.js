import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { HeaderComponent, Data } from '../components/index'
import { connect } from "react-redux";
import { Theme } from '../themes/Theme';
const {height} = Dimensions.get('screen')
class QRScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    //   custid+fname+lname+username+regdate+expdate
    render() {
        let id = this.props.credentials.cust_id
        let firstname = this.props.credentials.cust_fname
        let lastname = this.props.credentials.cust_lname
        let username = this.props.credentials.cust_username
        let regdate = this.props.credentials.cust_regdate
        let expdate = this.props.credentials.cust_expdate
        let code = id + firstname + lastname + username + regdate + expdate
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent
                    headerText="FIT FOR LIFE"
                />
                <View style={{ alignSelf: "center", marginTop: 20 }}>
                    <QRCode
                        value={code}
                        size={height / 3}
                    />
                </View>
                <View style={{ flex: 1, alignSelf: "center", padding: 50, paddingTop: 10, alignItems:"center" }}>
                    <Text style={Theme.HeaderText}>
                        Note: Show this qr code to the front desk for log in and log out
                        </Text>
                </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        credentials: state.Auth.credentials
    }
}

export default connect(mapStateToProps, null)(QRScreen);
