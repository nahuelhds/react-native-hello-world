import React, {Component} from "react";
import Expo from "expo";

import RobotoFont from "native-base/Fonts/Roboto.ttf";
import RobotoMediumFont from "native-base/Fonts/Roboto_medium.ttf";
import IoniconsFont from "native-base/Fonts/Ionicons.ttf";

import Router from "./src/Router";

export default class TheHelloWordApp extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({RobotoFont, RobotoMediumFont, IoniconsFont});
    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading/>;
    }
    return <Router/>;
  }
}
