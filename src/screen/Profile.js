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
  Text,
  Thumbnail,
  Title,
  View
} from "native-base";

import lang from "lang/main"

export default class ProfileScreen extends React.Component {
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
        <View style={css([styles.flex, styles.vcenter])}>
          <View style={css([styles.hcenter])} padder>
            <Thumbnail large source={require("img/nahuelhds.jpeg")} />
          </View>
          <View style={css([styles.hcenter])}>
            <View padder>
              <Text style={css([styles.small, styles.textMuted])}>{lang.t('aboutme.title')}</Text>
            </View>
            <Text style={css(styles.heading, styles.textCenter)}>{lang.t('author.nickname')}</Text>
            <View style={css([styles.hcenter])} padder>
              <Text style={css([styles.lead])}>
                {lang.t('author.role')}
              </Text>
              <Text style={css([styles.lead])}>
                @ {lang.t('author.company')}
              </Text>
            </View>
          </View>
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
