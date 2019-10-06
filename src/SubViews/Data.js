import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderComponent } from "../components/index";
import { Theme } from '../themes/Theme';
const { width } = Dimensions.get('screen')
import { addNewExercise, addNewNutrition } from "../redux/actions/AddData";
import { connect } from "react-redux";
let tempArr = []
class SelectedExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        tempArr = this.props.ExerciseList
        const { navigation } = this.props
        const header = navigation.getParam('header', null)
        const dataList = navigation.getParam('list', [])
        console.log(dataList, "--> value?")
        // if (header === "exercise") {
        //     tempArr = this.props.ExerciseList
        // }
        // else if (header === "nutrition") {
        //     tempArr = this.props.NutritionList
        // }

        this.setState({ dataList: dataList, header: header })

    }

    componentDidUpdate() {

    }

    _addData = (val) => {

        if (this.state.header === "exercise") {
            if (Array.isArray(tempArr)) {
                if (tempArr.some(data => data.name === val.name)) {

                    tempArr.map((i, k) => {
                        if (i.name === val.name) {
                            // tempArr.splice(k, 1)
                            Alert.alert(
                                'Warning',
                                'Do you want to delete this saved exercise?',
                                [
                                    {
                                        text: 'No',
                                        onPress: () => '',
                                        style: 'cancel',
                                    },
                                    {
                                        text: 'Yes', onPress: () => {
                                            tempArr.splice(k, 1)
                                            this.props.AddExercise([...tempArr])
                                            // this.forceUpdate()
                                        }
                                    },
                                ],
                                { cancelable: false },
                            );
                        }

                    })
                }
                else {
                    tempArr.push(val)
                    this.props.AddExercise([...tempArr])

                }
            }
            else {

                tempArr.push(val)
                this.props.AddExercise(...tempArr)
            }


        }
        else if (this.state.header === "nutrition") {

            if (tempArr.some(data => data.name === val.name)) {

                tempArr.map((i, k) => {
                    if (i.name === val.name) {
                        // tempArr.splice(k, 1)
                        Alert.alert(
                            'Warning',
                            'Do you want to delete this saved nutrition guide?',
                            [
                                {
                                    text: 'No',
                                    onPress: () => '',
                                    style: 'cancel',
                                },
                                {
                                    text: 'Yes', onPress: () => {
                                        tempArr.splice(k, 1)
                                        this.props.AddNutrition([...tempArr])

                                    }
                                },
                            ],
                            { cancelable: false },
                        );
                    }

                })
            }
            else {
                tempArr.push(val)
                this.props.AddNutrition([...tempArr])

            }
        }
    }

    _goToDiet = (key) => {
        this.props.navigation.navigate('Diet', {
            key: key
        })
    }

    _goToExercise = (key) => {
        this.props.navigation.navigate('Exercise', {
            key: key
        })
    }


    render() {
        
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent Press={() => this.props.navigation.goBack()}
                    headerText={this.state.dataList.type}
                    ImageStyle={[Theme.iconSize, { tintColor: "#fff" }]}
                    ImageSource={require('../assets/icon/back.png')} />
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, alignItems: "center", marginBottom: 10 }}>

                        <View
                            style={
                                [Theme.shadow,
                                {
                                    width: width - 50,
                                    padding: 10,
                                    // marginLeft: index >= 1 ? 10 : 0,
                                    backgroundColor: "#fff", alignItems: "center", borderRadius: 10, marginTop: 10
                                }]} >
                            <Image
                                resizeMode="stretch"
                                style={{ width: "100%", height: 200, backgroundColor: "#c5c5c5" }}
                                source={this.state.dataList.image} />
                            <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center" }}>
                                <Text style={[Theme.HeaderText, { fontWeight: "bold" }]}>{this.state.dataList.type}</Text>
                                {/* <Text>{this.state.dataList.meal_plan.name}</Text> */}
                            </View>
                            {this.state.dataList.details.map((items, key) => (

                                <View
                                    style={[Theme.shadow, { width: "100%", marginTop: 10, borderRadius: 5, padding: 10 }]}
                                    key={key}>
                                    <Text style={Theme.NormalText}>{items.name}</Text>
                                    <View style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
                                        <Text>{items.meal_plan.name}</Text>

                                        <TouchableOpacity
                                            onPress={this._goToDiet.bind(null, items.meal_plan.key)}
                                            style={{ marginLeft: 10, }}>
                                            <Icon name="ios-restaurant" size={25} color="#3bcaef" />
                                        </TouchableOpacity>
                                    </View>

                                    {/* <Text>{items.type}</Text> */}
                                    <View>
                                        {items.details.map((details, i) => (
                                            <View key={i}>
                                                <Text style={Theme.NormalText}>{details}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            ))}
                            {this.state.dataList.data.map((items, key) => (
                                <View
                                    style={[Theme.shadow, { width: "100%", marginTop: 10, borderRadius: 5, padding: 10 }]}
                                    key={key}>
                                    <Text style={Theme.NormalText}>{items.name}</Text>
                                    {/* <Text>{items.type}</Text> */}
                                    <View>
                                        {items.exercise.map((exercise, i) => (
                                            <View
                                                key={i}
                                                style={{ width: "100%" }}>
                                                <View
                                                    style={{ flexDirection: "row", alignItems: "center", width: "100%", justifyContent: "space-between" }}
                                                >
                                                    <Text style={[Theme.NormalText, {fontWeight:"bold"}]}>{exercise.name}</Text>
                                                    <TouchableOpacity
                                                        onPress={this._goToExercise.bind(null, exercise.key)}
                                                        style={{ marginLeft: 10, }}>
                                                        <Icon name="ios-information-circle" size={20} color="#3bcaef" />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{flexDirection:"row", width:"100%"}}>
                                                    <Text style={Theme.NormalText}>SET: {exercise.set}</Text>
                                                    <Text style={[Theme.NormalText, {marginLeft: 10}]}>REPS: {exercise.reps}</Text>
                                                </View>
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        ExerciseList: state.DataList.exercise,
        NutritionList: state.DataList.nutrition
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddExercise: (val) => dispatch(addNewExercise(val)),
        AddNutrition: (val) => dispatch(addNewNutrition(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedExercise)
