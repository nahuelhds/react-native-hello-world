import React, {Component} from "react";
import Expo from "expo";
import Router from "./src/Router";

export default class TheHelloWordApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    const fonts = {
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf')
    }
    await Expo.Font.loadAsync(fonts);
    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading/>;
    }
    return <Router/>;
  }
}
