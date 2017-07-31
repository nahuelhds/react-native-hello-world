import React from 'react';
import { StyleSheet } from 'react-native'
import {
  Body,
  Button,
  Container,
  Header,
  Icon,
  Left,
  Right,
  Title,
  View
} from "native-base";

import lang from "lang/main"

export default class SkillsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left style={css(styles.flex)}>
            <Button transparent onPress={() => navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={css(styles.flex2)}>
            <Title>{lang.t('About me')}</Title>
          </Body>
          <Right style={css(styles.flex)}></Right>
        </Header>
        <View style={css([styles.flex, styles.hcenter, styles.vcenter])}>
          <Icon name="code"/>
        </View>
      </Container>
    );
  }
}

const css = StyleSheet.flatten
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flex2:{
    flex:2
  },
  hcenter: {
    alignItems: "center"
  },
  vcenter: {
    justifyContent: "center"
  },
  heading: {
    fontSize: 32
  },
  lead: {
    fontSize: 20
  },
  textCenter: {
    textAlign: 'center'
  },
  textMuted: {
    color: '#888'
  }
})
