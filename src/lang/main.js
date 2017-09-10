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
    "email": {
      "subject": "React Native Hello World - New contact",
      "title": "{{name}} has just contatcted within the app",
      "description": `His/her email is {{email}} and he/she left the following message: "{{message}}"`
    },
    "form": {
      "label": {
        "name": "What's your name?",
        "email": "What's your email address?",
        "message": "What can I do for you?",
      },
      "helpText": "Complete the fields to enable the submission",
      "send": "Send",
      "sending": "Sending...",
      "toast": "¡Thanks for reaching to me!\nI'll contact you as soon as I can.",
      "sentError": "Do'h! Something wrong happened!\n{{error}}",
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
    "email": {
      "subject": "React Native Hello World - Nuevo contacto",
      "title": "{{name}} se ha contactado por mediante la app",
      "description": `Su correo de contacto es {{email}} y dejó el siguiente mensaje: "{{message}}"`
    },
    "form": {
      "label": {
        "name": "¿Cómo te llamás?",
        "email": "¿Cuál es tu correo electrónico?",
        "message": "¿En qué puedo ayudarte?",
      },
      "helpText": "Completá los campos para habilitar el envío",
      "send": "Enviar",
      "sending": "Enviando...",
      "toast": "¡Gracias por tu mensaje!\nMe contactaré a la brevedad",
      "sentError": "¡Ups! ¡Ha ocurrido un problema!\n{{error}}",
    },
    "Where to find me": "Dónde encontrarme"
  }
}

export default I18n;
