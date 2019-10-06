import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { HeaderComponent, Data } from "../components/index";
import { Theme } from "../themes/Theme";
import { workout } from "../utils/workout";
class Workout extends Component {
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
      <SafeAreaView style={{flex: 1}}>
            <HeaderComponent Press={() => this.props.navigation.goBack()}
                headerText={"Workout"}
                ImageStyle={[Theme.iconSize, { tintColor: "#fff" }]}
                ImageSource={require('../assets/icon/back.png')} />
            <ScrollView>
                <Data
                  parentStyle={{  backgrondColor: "red" }}
                  data={workout}
                  itemSelected={this._selectedData.bind(this,'exercise')} />
            </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Workout;
