import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import { HeaderComponent, Data } from "../components/index";
import { Theme } from "../themes/Theme";
import { nutrition } from "../utils/nutritionv2";
const {width, height} = Dimensions.get('screen')
class Diet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    _selectedData = (header, data) => {
        // 

        this.props.navigation.navigate('Data', {
            list: data,
            header: header
        })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderComponent Press={() => this.props.navigation.goBack()}
                    headerText={"Diet"}
                    ImageStyle={[Theme.iconSize, { tintColor: "#fff" }]}
                    ImageSource={require('../assets/icon/back.png')} />
                <ScrollView>
                    {nutrition.map((items, key) => (
                        <View
                            style={{ width: "100%", alignItems: "center" }}
                            key={key}>
                            <Image
                                resizeMode="contain"
                                style={{ width: width * .8, height: height / 5 }}
                                source={items.image} />

                            <View style={{ width: "100%", alignItems: "center" }}>
                                {items.data.map((data, k) => (
                                    <View style={[Theme.shadow, { marginTop: 20, padding: 10, width: "80%", borderRadius: 10 }]}>
                                        <Text style={[Theme.HeaderText, { fontWeight: "bold" }]}>{data.name}</Text>
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
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Diet;
