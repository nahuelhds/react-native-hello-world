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
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base'

type WebPage = {
  title: string,
  url: string,
}

export default class WebViewScreen extends React.Component {
  static navigationOptions = {
    // Hide tabs if we're coming from tabNav
    tabBarVisible: false,
  }

  render() {
    const { dispatch, state } = this.props.navigation;
    const page: WebPage = state.params
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
            <Title>{page.title}</Title>
          </Body>
          <Right style={css(styles.flex)}>
            <Button transparent onPress={() => Linking.openURL(page.url)}>
              <Icon name="redo" />
            </Button>
          </Right>
        </Header>
        <WebView startInLoadingState source={{ uri: page.url }} style={{flex:1}} />
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
