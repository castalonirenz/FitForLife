import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "../views/HomeScreen";
import LoadingScreen from '../views/SplashScreen'
import LoginScreen from '../views/Login'
import ExerciseScreen from '../SubViews/SelectedExercise'
import { TabNavContainer } from "./TabNavigator";

const StackNav = createStackNavigator({
    Home:{
        screen: TabNavContainer
    },
    Exercise:{
        screen: ExerciseScreen
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