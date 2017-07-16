// @flow
import React, {Component} from 'react';
import Expo from 'expo';
import {Dimensions, StyleSheet} from 'react-native';
import {
  Button,
  Container,
  Content,
  Text,
  Thumbnail,
  View
} from 'native-base';

export default class HelloWorld extends Component {

  // async componentWillMount() {
  //   await Expo.Font.loadAsync({'Roboto': require('native-base/Fonts/Roboto.ttf'), 'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf')});
  // }

  render() {
    return (
      <Container>
        <Content>
          <View style={css(styles.fullScreen)}>
            <View style={css(styles.header)}>
              <Thumbnail style={{
                marginBottom: -40
              }} large source={{
                uri: 'http://gravatar.com/avatar/41b64c5cb658355a506deba471262427'
              }}/>
            </View>
            <View style={css([styles.content])} padder>
              <Text style={css(styles.subtitle)}>The Hello World App</Text>
              <Text style={css(styles.title)}>nahuelhds</Text>
              <View style={css([{flex: 1}])}>
                <View style={css(styles.leadBlock)}>
                  <Text style={css([styles.lead, styles.textCenter])}>
                    Agile developer & Craftperson
                  </Text>
                  <Text style={css([styles.lead, styles.textCenter])}>
                    @ CristalMedia
                  </Text>
                </View>
                <View style={css([styles.valign])}>
                  <Text style={css([styles.textCenter, styles.small])}>Esta aplicación fue creada para conocer y aprender sobre React Native.</Text>
                </View>
              </View>
              <View>
                <Button full primary>
                  <Text>Ingresar</Text>
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

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
  content: {
    flex: 3
  },
  subtitle: {
    fontSize: 16,
    marginTop: 60,
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    // fontFamily: 'Roboto',
    fontSize: 32,
    justifyContent: 'center',
    marginBottom: 15,
    textAlign: 'center',
  },
  leadBlock: {
    flex: 2,
    textAlign: 'center'
  },
  lead:{
    fontSize: 20,
  },
  textCenter: {
    textAlign: 'center'
  },
  small: {
    fontSize: 14,
  },
  valign: {
    flex: 1,
    justifyContent: 'center'
  }
})

let css = (styles) => {
  return StyleSheet.flatten(styles)
}
