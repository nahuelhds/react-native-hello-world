import I18n from 'ex-react-native-i18n';

I18n.fallbacks = true

// I18n.add = function (namespace, terms){
//   for(var lang in terms){
//     this.translations[lang][namespace] = terms[lang]
//   }
// }

I18n.translations = {
  en: {
    "app":{
      "name": "The Hello World App",
    },
    "author": {
      "nickname": "nahuelhds",
      "role": "Agile developer / Craftperson",
      "company": "CristalMedia"
    },
    "Home": 'Home',
    "About me": 'About me',
    "Begin": "Begin",
    "Credits": "Credits",
    "Profile": "Profile",
    "Skills": "Skills",
    "homescreen": {
      "description": "This app was developed for learning about React Native and its libraries"
    },
    "aboutme": {
      "title": "This is me..."
    }
  },
  es: {
    "app": {
      "name": "The Hello World App",
    },
    "author": {
      "nickname": "nahuelhds",
      "role": "Agile developer / Craftperson",
      "company": "CristalMedia"
    },
    "Home": 'Home',
    "About me": 'Acerca de mí',
    "Begin": "Comenzar",
    "Credits": "Créditos",
    "Profile": "Perfil",
    "Skills": "Habilidades",
    "homescreen": {
      "description": "Esta aplicación fue desarrollada con el objetivo de aprender React Native y sus librerías"
    },
    "aboutme": {
      "title": "Este soy yo..."
    }
  }
}

export default I18n;
