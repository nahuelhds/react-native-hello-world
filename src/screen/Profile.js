// @flow
import React from 'react';
import { Image, StyleSheet } from 'react-native'
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail,
  Title
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
        <Content padder>
          <Card>
            <CardItem header>
              <Left style={css(styles.flex2)}>
                <Body>
                  <Text style={css(styles.heading)}>{lang.t('author.nickname')}</Text>
                  <Text>{lang.t('author.role')}</Text>
                  <Text note>@ {lang.t('author.company')}</Text>
                </Body>
              </Left>
              <Right style={css(styles.flex)}>
                <Thumbnail large source={require("img/nahuelhds.jpeg")} />
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                style={{ height: 100, width: null, flex: 1 }}
                source={require('img/aboutme.jpg')}
              />
            </CardItem>
            <CardItem>
              <Text>{lang.t('aboutme.description')}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const css = StyleSheet.flatten
const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  flex2: {
    flex: 2
  },
  heading: {
    fontSize: 32
  }
})
