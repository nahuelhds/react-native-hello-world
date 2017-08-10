import React from 'react'
import { StyleSheet } from 'react-native'
import {
  Body,
  Button,
  Header,
  Icon,
  Left,
  Right,
  Title,
} from 'native-base'

export default class DrawerHeader extends React.Component {
  render() {
    return (
      <Header>
        <Left style={css(styles.flex)}>
          <Button transparent onPress={this.props.onPress}>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body style={css(styles.flex2)}>
          <Title>{this.props.title}</Title>
        </Body>
        <Right style={css(styles.flex)}></Right>
      </Header>
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
