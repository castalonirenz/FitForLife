import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import { HeaderComponent } from "../components/index";
import { nutrition } from "../utils/nutritionv2";
import { Theme } from '../themes/Theme';
const { width, height } = Dimensions.get("screen")
class Diet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 0,
            list: []
        };
    }

    async componentDidMount() {
        const { navigation } = this.props
        const key = navigation.getParam('key', null)
        let a = nutrition.findIndex(x => x.key === key)
        let final = nutrition.splice(a, 1)
        this.setState({ key: key, list: final })
    }

    render() {
        
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
                        {this.state.list.map((items, key) => (
                            <View
                                style={{width:"100%",  alignItems:"center"}} 
                                key={key}>
                                <Image
                                    resizeMode="contain"
                                    style={{ width: width * .8, height: height / 5 }}
                                    source={items.image} />

                                <View style={{  width:"100%", alignItems:"center"}}>
                                    {items.data.map((data, k) => (
                                        <View style={[Theme.shadow,{ marginTop: 20, padding: 10, width:"80%", borderRadius: 10}]}>
                                            <Text style={[Theme.HeaderText, {fontWeight:"bold"}]}>{data.name}</Text>
                                            <View>
                                                {data.procedure.map((procedure, key) => (
                                                    <Text>{procedure}</Text>
                                                ))}
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        ))}

                    </View>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

export default Diet;
