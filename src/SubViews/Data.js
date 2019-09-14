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
        if(header === "exercise"){
            tempArr = this.props.ExerciseList
        }
        else if(header ==="nutrition"){
            tempArr = this.props.NutritionList
        }
        
        this.setState({ dataList: dataList, header: header })

    }
  
    componentDidUpdate(){
      console.log('not updating')
    }

    _addData = (val) => {

        if(this.state.header === "exercise"){
 
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
                                        onPress: () => console.log('Cancel Pressed'),
                                        style: 'cancel',
                                    },
                                    { text: 'Yes', onPress: () => {
                                        tempArr.splice(k, 1)
                                        this.props.AddExercise(tempArr)
                                        this.forceUpdate()
                                    } },
                                ],
                                { cancelable: false },
                            );
                        }

                    })
                }
                else {
                    tempArr.push(val)
                    this.props.AddExercise(tempArr)
                    this.forceUpdate()
                }
              
      
        }
        else if(this.state.header === "nutrition"){
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
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel',
                                },
                                {
                                    text: 'Yes', onPress: () => {
                                        tempArr.splice(k, 1)
                                        this.props.AddNutrition(tempArr)
                                        this.forceUpdate()
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
                this.props.AddNutrition(tempArr)
                this.forceUpdate()
            }
        }
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent Press={() => this.props.navigation.goBack()}
                    headerText={this.state.dataList.type}
                    ImageStyle={[Theme.iconSize, { tintColor: "#fff" }]}
                    ImageSource={require('../assets/icon/back.png')} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        {this.state.dataList.data.map((items, key) => (
                            < View
                                // onPress={props.exerciseSelected.bind(null, items)}
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
                                    style={{ width: "100%", height: 200 }}
                                    source={items.image} />
                                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", padding: 10, alignItems: "center" }}>
                                    <Text style={[Theme.HeaderText, { fontWeight: "bold" }]}>{items.name}</Text>
                                    <TouchableOpacity onPress={this._addData.bind(null, items)}>
                                        <Icon 
                                            color={tempArr.some(data => data.name === items.name) ? 'red' : '#3bcaef'}
                                          //  color="blue"
                                          //  name="ios-add-circle"
                                            name={tempArr.some(data => data.name === items.name) ? 'ios-remove-circle' : 'ios-add-circle'}
                                         size={Theme.iconSize.height} />
                                    </TouchableOpacity>
                                </View>
                                {items.procedure.map((procedure, i) => (
                                    <View style={{ marginTop: 20, alignSelf: "flex-start" }}>
                                        <Text>{procedure}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
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
