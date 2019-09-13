import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import firebase from 'react-native-firebase';
import { HeaderComponent, Exercise } from '../components/index'
import { Theme } from '../themes/Theme';
import { addNewExercise } from "../redux/actions/AddToExercise";
import { connect } from "react-redux";
import { exercise } from "../utils/exercise";
const { width } = Dimensions.get('screen')
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    console.log(this.props.ExerciseList, "list of added exercise")
  }

  _selectedExercise = (data) => {
    this.props.navigation.navigate('Exercise', {
      list: data
    })
  }

  _viewSavedExercise = (data) => {
    console.log(data)
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
          <View style={{ flex: 1 , width: "100%",}}>
            <ScrollView
              snapToInterval={width}
              decelerationRate="fast"
              snapToAlignment={'center'}
              showsHorizontalScrollIndicator={false}
              horizontal={true}>

           <View style={{padding: 20}}>
            <Text style={Theme.HeaderText}>Available exercise in the gym</Text>
                <Exercise
                  parentStyle={{ flexDirection: 'row', backgrondColor: "red" }}
                  exercise={exercise}
                  exerciseSelected={this._selectedExercise} />
           </View>

            </ScrollView>


            {this.props.ExerciseList !== null ?
              <View style={{alignSelf:"center", width: "100%",}}>
                <Text style={Theme.HeaderText}>Your Saved Exercise</Text>
                <Exercise
                  parentStyle={{ flexDirection: 'column', backgrondColor: "red" }}
                  exercise={this.props.ExerciseList}
                  exerciseSelected={this._viewSavedExercise} />
              </View>
              :
             <View style={{alignSelf:"center"}}>
                <Text style={Theme.HeaderText}>Your saved exercise will show here</Text>
              </View>
            }





          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    ExerciseList: state.ExerciseList.exercise
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AddExercise: (val) => dispatch(addNewExercise(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
