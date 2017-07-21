import {StyleSheet} from 'react-native';

const css = StyleSheet.flatten
const styles = StyleSheet.create({
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
  fullHeight: {
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

export {styles, css}
