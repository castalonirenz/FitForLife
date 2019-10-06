import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import { HeaderComponent, Data } from "../components/index";
import { exercise } from "../utils/exercise";
import { Theme } from '../themes/Theme';
const { width, height } = Dimensions.get("screen")
class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            list: []
        };
    }

    async componentDidMount() {
        let tempArr = []
        const { navigation } = this.props
        const key = navigation.getParam('key', null)
        const screen = navigation.getParam('screen', null)
        if(screen === "menu"){
            // this.setState({list: exercise})
            exercise.map((i, k) => {

                i.data.map((data, i) => {

        
                        tempArr.push(data)
                    
                })
            })
            this.setState({ list: tempArr })
        
        }
     //   let a = exercise.findIndex(x => x.key === key)
       else{
            exercise.map((i, k) => {

                i.data.map((data, i) => {

                    if (data.key === key) {
                        tempArr.push(data)
                    }
                })
            })
            this.setState({ list: tempArr })
       }

        // let final = exercise.splice(a, 1)
        // this.setState({ key: key, list: final })
    }

    _selectedData = (header, data) => {
        // 

        this.props.navigation.navigate('SpecificExercise', {
            list: data,
            header: header
        })
    }

    render() {
        const { navigation } = this.props
        const screen = navigation.getParam('screen', null)
        let display
            if(screen === "menu"){
                display = 
                    <Data
                        parentStyle={{ backgrondColor: "red" }}
                        data={exercise}
                        itemSelected={this._selectedData.bind(this, 'exercise')} />
            }
            else{
                display =
                     this.state.list.map((items, key) => (
                            
                            <View
                                style={{width:"100%",  alignItems:"center", marginTop: key > 0 ? 20 : 0}} 
                                key={key}>
                                <Image
                                    resizeMode="stretch"
                                    style={{ width: width * .78, height: height / 3, backgroundColor:"#c5c5c5", borderRadius: 10 }}
                                    source={items.image} />

                                <View style={[Theme.shadow,{  width:"80%", alignItems:"center", padding: 10, marginTop: 20, borderRadius: 10}]}>
                                    <Text style={[Theme.HeaderText]}>{items.name}</Text>
                                    {items.procedure.map((data, k) => (
                                        
                                            <Text style={[Theme.NormalText, {marginTop: 10}]}>{data}</Text>
                                      
                                    ))}
                                </View> 
                            </View>
                        ))

            }


        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent
                Press={() => this.props.navigation.goBack()}
                    headerText="FIT FOR LIFE"
                    ImageStyle={[Theme.iconSize, { tintColor: "#fff" }]}
                    ImageSource={require('../assets/icon/back.png')}
                />
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    style={{ width: "100%",  }}>

                    <View style={{ flex: 1, width: "100%", alignItems: "center", marginBottom: 20, marginTop: 10}}>
                        {display}

                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default Exercise;
