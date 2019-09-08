/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/configureStore';
import { StackNavContainer } from "./src/navigators/StackNav";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { AuthNavContainer, HomeNavContainer } from "./src/navigators/StackNav";


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SwitchNavContainer />
      </PersistGate>
    </Provider>
  );
};

const SwitchNav = createSwitchNavigator({
    Auth: AuthNavContainer,
    LoginSuccess: HomeNavContainer
})

const SwitchNavContainer = createAppContainer(SwitchNav)

export default App;
