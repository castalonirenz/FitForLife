import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderComponent } from "../components/index";
import { Theme } from '../themes/Theme';
const {width} = Dimensions.get('screen')
export default class SelectedExercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        const { navigation } = this.props
        const exerciseList = navigation.getParam('list', [])
        this.setState({ exerciseList: exerciseList })

    }


    render() {
        console.log(this.state.exerciseList)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent Press={() => this.props.navigation.goBack()}
                    headerText={this.state.exerciseList.type + " Workout"}
                    ImageStyle={[Theme.iconSize, { tintColor: "#fff" }]}
                    ImageSource={require('../assets/icon/back.png')} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1 ,alignItems:"center"}}>
                        {this.state.exerciseList.data.map((items, key) => (
                            console.log(items),
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
                                <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between", padding: 10, alignItems:"center"}}>
                                    <Text style={[Theme.HeaderText, { fontWeight: "bold" }]}>{items.name}</Text>
                                    <TouchableOpacity>
                                        <Icon color="#3bcaef" name="ios-add-circle" size={Theme.iconSize.height} />
                                    </TouchableOpacity>
                                    </View>
                                {items.procedure.map((procedure, i) => (
                                    <View style={{ marginTop: 20, alignSelf:"flex-start" }}>
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
