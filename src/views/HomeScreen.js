import React, { Component } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import firebase from 'react-native-firebase';
import { HeaderComponent, Data } from '../components/index'
import { Theme } from '../themes/Theme';
import { connect } from "react-redux";
import { exercise, nutrition } from "../utils/data";
import { workout } from "../utils/workout";
import { menuSelection } from "../utils/menu";
const { width, height } = Dimensions.get('screen')
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

  _navigate = (screen) => {
    
    this.props.navigation.navigate(screen,{
      screen: 'menu'
    })
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
          <View style={{ flex: 1 , width: "100%"}}>
           
            <ScrollView
              snapToInterval={width}
              decelerationRate="fast"
              snapToAlignment={'center'}
              showsHorizontalScrollIndicator={false}
              horizontal={false}>

              <View style={{ padding: 20, paddingTop: 0}}>
                {menuSelection.map((items, key) => (
                  <TouchableOpacity
                    onPress={this._navigate.bind(null, items.location)}
                    style={{ alignItems:"center", justifyContent:"center"}}
                    key={key}>
                    <ImageBackground
                        style={{width: width, height: height /3.8, alignItems:"center", justifyContent:"center", backgroundColor:"#c5c5c5"}}
                        source={items.image}
                        >
                      <Text style={[Theme.NormalText, { color: "#fff", fontSize: height / 20 }]}>{items.text}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
                {/* <Data
                  parentStyle={{  backgrondColor: "red" }}
                  data={workout}
                  itemSelected={this._selectedData.bind(this,'exercise')} /> */}
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
