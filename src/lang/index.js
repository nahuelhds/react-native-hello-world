import I18n from 'ex-react-native-i18n';

I18n.fallbacks = true

I18n.translations = {
  en: {
    "app":{
      "name": "The Hello World App",
      "author": "nahuelhds"
    },
    "Home": 'Home',
    "About me": 'About me',
    "Begin": "Begin",
    "Credits": "Credits",
    "homescreen": {
      "role": "Agile developer / Craftperson",
      "atCristalMedia": "@ CristalMedia",
      "description": "This app was developed for learning about React Native and its libraries"
    }
  },
  es: {
    "app": {
      "name": "The Hello World App",
      "author": "nahuelhds"
    },
    "Home": 'Home',
    "About me": 'Acerca de mí',
    "Begin": "Comenzar",
    "Credits": "Créditos",
    "homescreen": {
      "role": "Agile developer / Craftperson",
      "atCristalMedia": "@ CristalMedia",
      "description": "Esta aplicación fue desarrollada con el objetivo de aprender React Native y sus librerías"
    }
  }
}

export default I18n;
