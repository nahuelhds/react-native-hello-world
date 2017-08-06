// @flow
import React from 'react';
import { Image } from 'react-native';
import Expo from 'expo';

import I18n from 'lang/main';
import MainRouter from 'router/Sidebar';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Expo.Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Expo.Font.loadAsync(font));
}

export default class TheHelloWordApp extends React.Component {
  state: {
    isReady: boolean
  };

  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this._loadAsync()
  }

  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />
    }
    return <MainRouter />
  }

  async _loadAsync() {
    // Fonts
    const fontAssets = cacheFonts([
      { FontAwesome: require('native-base/Fonts/FontAwesome.ttf') },
      { Ionicons: require('native-base/Fonts/Ionicons.ttf') },
      { Roboto: require('native-base/Fonts/Roboto.ttf') },
      { Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf') },
    ]);

    // Images cache
    const imageAssets = cacheImages([
      require('img/aboutme.jpg'),
      require('img/logo.png'),
      require('img/nahuelhds.jpeg'),
    ]);

    // I18n
    const langAssets = I18n.initAsync()

    await Promise.all([
      ...fontAssets,
      ...imageAssets,
      ...langAssets,
    ]);

    this.setState({ isReady: true });
  }
}
