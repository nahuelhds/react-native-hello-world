import I18n from 'ex-react-native-i18n';

I18n.fallbacks = true

// I18n.add = function (namespace, terms){
//   for(var lang in terms){
//     this.translations[lang][namespace] = terms[lang]
//   }
// }

I18n.translations = {
  en: {
    "app": {
      "name": "The Hello World App",
    },
    "author": {
      "nickname": "nahuelhds",
      "role": "Agile developer",
      "company": "CristalMedia"
    },
    "Home": 'Home',
    "About me": 'About me',
    "Begin": "Begin",
    "Contact me": 'Contact me',
    "Credits": "Credits",
    "Profile": "Profile",
    "Skills": "Skills",
    "Social": "Social",
    "homescreen": {
      "description": "This app was developed for learning about React Native and its libraries"
    },
    "aboutme": {
      "title": "This is me...",
      "description": "Meticulous. Perfectionist. In constant learning of edge technologies and project management strategies. I do my best for improving communication in my teams, with the focus on maximizing productivity and cohesion; minimizing time and costs."
    },
    "contactme": {
      "title": "I wanna help!",
      "description": "Need a hand with your project?"
    },
    "form": {
      "label": {
        "name": "What's your name?",
        "email": "What's your email address?",
        "message": "What can I do for you?",
      },
    },
    "Where to find me": "Where to find me"
  },
  es: {
    "app": {
      "name": "The Hello World App",
    },
    "author": {
      "nickname": "nahuelhds",
      "role": "Agile developer",
      "company": "CristalMedia"
    },
    "Home": 'Home',
    "About me": 'Acerca de mí',
    "Begin": "Comenzar",
    "Credits": "Créditos",
    "Contact me": "Contactarme",
    "Profile": "Perfil",
    "Skills": "Habilidades",
    "Social": "Social",
    "homescreen": {
      "description": "Esta aplicación fue desarrollada con el objetivo de aprender React Native y sus librerías"
    },
    "aboutme": {
      "title": "Este soy yo...",
      "description": "Meticuloso. Perfeccionista. En el aprendizaje constante de tecnologías de punta y estrategias de gestión de proyectos. Hago todo lo posible para mejorar la comunicación en mis equipos, con el foco en la maximización de la productividad y la cohesión; minimizando tiempo y costes."
    },
    "contactme": {
      "title": "¡Quiero ayudarte!",
      "description": "¿Precisás una mano con tu proyecto?"
    },
    "form": {
      "label": {
        "name": "¿Cómo te llamás?",
        "email": "¿Cuál es tu correo electrónico?",
        "message": "¿En qué puedo ayudarte?",
      },
    },
    "Where to find me": "Dónde encontrarme"
  }
}

export default I18n;
