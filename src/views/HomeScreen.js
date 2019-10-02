import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import firebase from 'react-native-firebase';
import { HeaderComponent, Data } from '../components/index'
import { Theme } from '../themes/Theme';
import { connect } from "react-redux";
import { exercise, nutrition } from "../utils/data";
import { workout } from "../utils/workout";
const { width } = Dimensions.get('screen')
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
  }

  componentDidMount(){
    
  }

  _selectedData = (header, data) => {
    // 
   
    this.props.navigation.navigate('Data', {
      list: data,
      header: header
    })
  }

  _viewSavedExercise = (data) => {
    
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 ,width:"100%"}}>
        <HeaderComponent
          headerText="FIT FOR LIFE"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={{ flex: 1 , width: "100%", marginTop: 20}}>
           
            <ScrollView
              snapToInterval={width}
              decelerationRate="fast"
              snapToAlignment={'center'}
              showsHorizontalScrollIndicator={false}
              horizontal={false}>

              <View style={{ padding: 20, paddingTop: 0}}>
                <Data
                  parentStyle={{  backgrondColor: "red" }}
                  data={workout}
                  itemSelected={this._selectedData.bind(this,'exercise')} />
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
    ExerciseList: state.DataList.exercise,
    Credentials: state.Auth.credentials
  }
}


export default connect(mapStateToProps, null)(HomeScreen);
