import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "../views/HomeScreen";
import LoadingScreen from '../views/SplashScreen'
import LoginScreen from '../views/Login'
import DataScreen from '../SubViews/Data'
import PreviewScreen from '../views/PreviewExercise'
import DietScreen from '../SubViews/Diet'
import ExerciseScreen from '../SubViews/Exercise'
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
    Preview:{
        screen: PreviewScreen
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