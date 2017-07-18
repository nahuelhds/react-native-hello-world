import {Dimensions, StyleSheet} from 'react-native';

const {height: screenHeight} = Dimensions.get('window')
const styles = StyleSheet.create({
  bgLight: {
    backgroundColor: 'cornflowerblue'
  },
  bg: {
    backgroundColor: 'steelblue'
  },
  bgDark: {
    backgroundColor: 'darkslateblue'
  },
  fullScreen: {
    flex: 1,
    height: screenHeight
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-end',
    zIndex: 1
  },
  avatar: {
    marginBottom: -40
  },
  content: {
    flex: 3
  },
  subtitle: {
    fontSize: 16,
    marginTop: 60,
    marginBottom: 10,
    textAlign: 'center'
  },
  title: {
    // fontFamily: 'Roboto',
    fontSize: 32,
    justifyContent: 'center',
    marginBottom: 15,
    textAlign: 'center'
  },
  textContainer: {
    flex: 1
  },
  leadBlock: {
    flex: 2
  },
  lead: {
    fontSize: 20
  },
  textCenter: {
    textAlign: 'center'
  },
  small: {
    fontSize: 14
  },
  valign: {
    flex: 1,
    justifyContent: 'center'
  }
})

const css = StyleSheet.flatten

export {styles, css}
