// @flow
import React from 'react'
import { NavigationActions } from 'react-navigation'
import {
  Linking,
  StyleSheet,
  WebView,
} from 'react-native'

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base'

import lang from 'lang/main'

export default class WebViewScreen extends React.Component {
  static navigationOptions = {
    // Hide tabs if we're coming from tabNav
    tabBarVisible: false,
  }

  render() {
    const { dispatch } = this.props.navigation;
    const backAction = NavigationActions.back()
    return (
      <Container>
        <Header>
          <Left style={css(styles.flex)}>
            <Button transparent onPress={() => dispatch(backAction)}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={css(styles.flex2)}>
            <Title>{lang.t('About me')}</Title>
          </Body>
          <Right style={css(styles.flex)}>
            <Button transparent onPress={() => Linking.openURL('https://google.com')}>
              <Icon name="share" />
            </Button>
          </Right>
        </Header>
        <Content>
          <WebView />
        </Content>
      </Container>
    )
  }
}

const css = StyleSheet.flatten
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flex2: {
    flex: 2
  }
})
