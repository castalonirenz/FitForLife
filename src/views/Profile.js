import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Data, HeaderComponent } from "../components/index";
import { Theme } from "../themes/Theme";
import { connect } from 'react-redux'
import { logout } from "../redux/actions/Auth";
const { width } = Dimensions.get('screen')
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    _selectedData = (header, data) => {
        console.log(header, data)

        this.props.navigation.navigate('Preview', {
            data: data,
            header: header
        })
    }

    _logOut = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        console.log(this.props.credentials)
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
                >
                    <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
                        <View style={{ padding: 20, flexDirection:"row" }}>
                            <Text style={[Theme.HeaderText, { fontSize: 30 }]}>
                                {this.props.credentials.cust_fname}
                            </Text>
                            <Text style={[Theme.HeaderText, { fontSize: 30, marginLeft: 5 }]}>
                                {this.props.credentials.cust_lname}
                            </Text>
                           
                        </View>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={Theme.HeaderText}>Save Exercise</Text>
                        </View>
                        <ScrollView
                            snapToInterval={width}
                            decelerationRate="fast"
                            snapToAlignment={'center'}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>

                            <View style={{ padding: 20, paddingTop: 0 }}>
                                {exerciseEmpty}
                                <Data
                                    parentStyle={{ flexDirection: 'row', backgrondColor: "red" }}
                                    data={this.props.ExerciseList}
                                    itemSelected={this._selectedData.bind(this, 'exercise')} />
                            </View>

                        </ScrollView>
                        <View style={{ marginLeft: 20 }}>
                            <Text style={Theme.HeaderText}>Save Nutrition</Text>
                        </View>
                        <ScrollView
                            snapToInterval={width}
                            decelerationRate="fast"
                            snapToAlignment={'center'}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>

                            <View style={{ padding: 20, paddingTop: 0 }}>
                                {nutritionEmpty}
                                <Data
                                    parentStyle={{ flexDirection: 'row', backgrondColor: "red" }}
                                    data={this.props.NutritionList}
                                    itemSelected={this._selectedData.bind(this, 'nutrition')} />
                            </View>

                        </ScrollView>

                    </View>

                </ScrollView>

            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        credentials: state.Auth.credentials,
        ExerciseList: state.DataList.exercise,
        NutritionList: state.DataList.nutrition
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
