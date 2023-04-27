import React, { Component } from "react";

import SplashScreen from "react-native-splash-screen";

import "expo-asset";

import { enableMapSet } from "immer";

import { SafeAreaView, Text } from "react-native";

import AppNavigator from "./components/AppNavigator/AppNavigator";

import * as Sentry from '@sentry/react-native';

Sentry.init({ 
  dsn: 'https://5cb6fe6bfafc489abce4a774b6bc2f43@o4505085442260992.ingest.sentry.io/4505085443178496', 
});


// if (!__DEV__) ErrorUtils.setGlobalHandler(errorUtilsGlobalHandler);

enableMapSet();

console.disableYellowBox = false;
export default class App extends Component {
  state = {
    isReady: false,
  };

  async componentDidMount() {
    try {
      await this.tasksBeforeAppRender();
    } catch (e) {
      console.log(e);
    }

    SplashScreen.hide();
  }

  tasksBeforeAppRender = async () => {
    this.setState({ isReady: true });
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <AppNavigator />
      </SafeAreaView>
    );
  }
}
