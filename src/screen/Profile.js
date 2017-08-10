// @flow
import React from 'react';
import { Image, StyleSheet } from 'react-native'
import {
  Body,
  Card,
  CardItem,
  Container,
  Content,
  H1,
  Left,
  Right,
  Text,
  Thumbnail,
} from 'native-base';

import DrawerHeader from 'component/DrawerHeader';

import lang from 'lang/main'

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container>
        <DrawerHeader
          title={lang.t('About me')}
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        ></DrawerHeader>
        <Content padder>
          <Card>
            <CardItem header>
              <Left style={css(styles.flex2)}>
                <Body>
                  <H1>{lang.t('author.nickname')}</H1>
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
  }
})
