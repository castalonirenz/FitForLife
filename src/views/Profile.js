import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Data, HeaderComponent } from "../components/index";
import { Theme } from "../themes/Theme";
import {connect} from 'react-redux'
const { width } = Dimensions.get('screen')
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

    _selectedData = (header, data) => {
        console.log(header,data)
        
        // this.props.navigation.navigate('Data', {
        //     list: data,
        //     header: header
        // })
    }

  render() {
      let nutritionEmpty = this.props.NutritionList.length == 0 ? <Text style={[Theme.HeaderText, {alignSelf:"center"}]}>Empty</Text> : null
      let exerciseEmpty = this.props.ExerciseList.length == 0 ? <Text style={[Theme.HeaderText, { alignSelf: "center" }]}>Empty</Text> : null
    return (
      <SafeAreaView style={{flex: 1}}>
          <HeaderComponent
            headerText="FIT FOR LIFE"
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ flex: 1, width: "100%", marginTop: 20 }}>
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
    return{
        ExerciseList: state.DataList.exercise,
        NutritionList: state.DataList.nutrition
    }
}

export default connect(mapStateToProps, null)(Profile);
