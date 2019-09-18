import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Data, HeaderComponent } from "../components/index";
import { addNewExercise, addNewNutrition } from "../redux/actions/AddData";
import { Theme } from "../themes/Theme";
import { connect } from "react-redux";
let tempArr = []
let display
class PreviewExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      data: {}
    };
  }

  componentWillMount() {
    const { navigation } = this.props
    const data = navigation.getParam('data', null)
    const header = navigation.getParam('header', null)

    
    if (header === "exercise") {
      tempArr = this.props.ExerciseList
    }
    else if (header === "nutrition") {
      tempArr = this.props.NutritionList
    }
    this.setState({ header: header, data: data })
    // this.setState({ dataList: dataList, header: header })
  }

  _addOrRemove = (val) => {

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
                    onPress: () =>'' ,
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

  render() {
    if (this.state.data.procedure !== undefined) {
      if (this.state.data.procedure.length !== 0) {
        display = this.state.data.procedure.map((i, k) => (
          <View style={{ marginTop: 20, alignSelf: "flex-start" }}>
            <Text style={Theme.NormalText}>{i}</Text>
          </View>
        ))
      }
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HeaderComponent Press={() => this.props.navigation.goBack()}
          // headerText={this.state.dataList.type}
          ImageStyle={[Theme.iconSize, { tintColor: "#fff" }]}
          ImageSource={require('../assets/icon/back.png')} />
        <ScrollView>
          <View style={{ flex: 1, alignItems: "center", marginTop: 10 }}>
            <View style={[Theme.shadow, { width: "90%", backgroundColor: "#fff", padding: 10, borderRadius: 10 }]}>
              <Image
                resizeMode="stretch"
                style={{ width: "100%", height: 200 }}
                source={this.state.data.image} />
              <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                <Text style={[Theme.HeaderText, { alignSelf: "center", marginTop: 10 }]}>{this.state.data.name}</Text>
                <TouchableOpacity onPress={this._addOrRemove.bind(null, this.state.data)}>
                  <Icon
                    color={tempArr.some(data => data.name === this.state.data.name) ? 'red' : '#3bcaef'}
                    //    color="blue"
                    //    name="ios-add-circle"
                    name={tempArr.some(data => data.name === this.state.data.name) ? 'ios-remove-circle' : 'ios-add-circle'}
                    size={Theme.iconSize.height} />
                </TouchableOpacity>
              </View>

              {display}
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

export default connect(mapStateToProps, mapDispatchToProps)(PreviewExercise);
