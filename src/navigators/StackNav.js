import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "../views/HomeScreen";
import LoadingScreen from '../views/SplashScreen'
import LoginScreen from '../views/Login'
import DataScreen from '../SubViews/Data'
import PreviewScreen from '../views/PreviewExercise'
import DietScreen from '../SubViews/Diet'
import ExerciseScreen from '../SubViews/Exercise'
import WorkoutScreen from '../views/Workout'
import NutritonScreen from '../views/Diet'
import SpecificExerciseScreen from '../SubViews/SpecificExercise'
import { TabNavContainer } from "./TabNavigator";

const StackNav = createStackNavigator({
    Home:{
        screen: TabNavContainer
    },
    Data:{
        screen: DataScreen
    },
    Diet:{
        screen: DietScreen
    },
    Exercise:{
        screen: ExerciseScreen
    },
    SpecificExercise:{
        screen: SpecificExerciseScreen
    },
    Preview:{
        screen: PreviewScreen
    },
    Test:{
        screen: WorkoutScreen
    },
    Nutrition:{
        screen: NutritonScreen
    }
},{
    defaultNavigationOptions:{
        header: null
    }
})

export const HomeNavContainer = createAppContainer(StackNav)

const AuthNav = createStackNavigator({
    Splash:{
        screen: LoadingScreen
    },
    Login:{
        screen: LoginScreen
    },
    

},{
    defaultNavigationOptions:{
        header: null
    }
})

export const AuthNavContainer = createAppContainer(AuthNav)