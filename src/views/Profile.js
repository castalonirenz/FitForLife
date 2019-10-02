import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions, Alert } from 'react-native';
import { Data, HeaderComponent } from "../components/index";
import { Theme } from "../themes/Theme";
import { connect } from 'react-redux'
import { logout } from "../redux/actions/Auth";
const { width } = Dimensions.get('screen')
let displayLogs
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _selectedData = (header, data) => {
        

        this.props.navigation.navigate('Preview', {
            data: data,
            header: header
        })
    }

    _logOut = () => {
        Alert.alert(
            'Logout',
            'Do you really want to logout?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'Yes', onPress: ()=> {
                    this.props.onLogout()
                    this.props.navigation.navigate('Auth')
                } },
            ],
            { cancelable: false },
        );
    }

    render() {
       
        if (this.props.logs.length !== 0) {
            displayLogs =
                this.props.logs.map((i, k) => (
                    <View
                        style={{
                            flexDirection: "row", width: "100%",
                            // backgroundColor: key ,
                            justifyContent: "space-around", padding: 10,
                        }}>
                        <Text style={[Theme.NormalText, {width: "30%",alignSelf:"center", textAlign:"center"}]}>{i.log_date}</Text>
                        <Text style={[Theme.NormalText, {width: "30%",alignSelf:"center", textAlign:"center"}]}>{i.log_in}</Text>
                        <Text style={[Theme.NormalText, {width: "30%",alignSelf:"center", textAlign:"center"}]}>{i.log_out === "" ? "empty" : i.log_out}</Text>
                    </View>
                ))

        }
        let nutritionEmpty = this.props.NutritionList.length == 0 ? <Text style={[Theme.HeaderText, { alignSelf: "center" }]}>Empty</Text> : null
        let exerciseEmpty = this.props.ExerciseList.length == 0 ? <Text style={[Theme.HeaderText, { alignSelf: "center" }]}>Empty</Text> : null
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent
                    headerText="FIT FOR LIFE"
                    iconName={"ios-log-out"}
                    iconColor="red"
                    iconPress={this._logOut}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{flexGrow: 1}}
                >
                    <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
                        <View style={{ padding: 20, flexDirection: "row" }}>
                            <Text style={[Theme.HeaderText, { fontSize: 30 }]}>
                                {this.props.credentials.cust_fname}
                            </Text>
                            <Text style={[Theme.HeaderText, { fontSize: 30, marginLeft: 5 }]}>
                                {this.props.credentials.cust_lname}
                            </Text>

                        </View>

                 
                        <View style={[Theme.shadow,{flex: 1,width:"90%", alignSelf:"center", padding: 10, backgroundColor:"#fff", marginBottom: 5, borderRadius: 5}]}>
                            <View style={{ flexDirection: "row", width: "100%", borderBottomWidth: 1, justifyContent: "space-around", padding: 10, }}>
                                <Text style={Theme.HeaderText}>log date</Text>
                                <Text style={Theme.HeaderText}>log in</Text>
                                <Text style={Theme.HeaderText}>log out</Text>
                            </View>
                            {displayLogs}
                        </View>

                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        credentials: state.Auth.credentials,
        logs: state.Auth.logs,
        ExerciseList: state.DataList.exercise,
        NutritionList: state.DataList.nutrition
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
