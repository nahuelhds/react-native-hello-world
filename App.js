// @flow
import React, { Component } from 'react';
import Expo from 'expo';

import I18n from 'lang/index';
import MainRouter from 'router/Sidebar';

export default class TheHelloWordApp extends Component {
  state: {
    isReady: boolean
  };

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    // Fuentes
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
    });
    await I18n.initAsync();
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <MainRouter />;
  }
}
