// @flow
import React from 'react';
import { StyleSheet } from 'react-native'
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  StyleProvider,
  Text,
  Title,
  getTheme
} from "native-base";

import lang from "lang/main"

type SocialLink = {
  name: string,
  user: string,
  url: string,
  logo: string,
  color: color,
}

const fontAwesome = {
  iconFamily: 'FontAwesome'
}

export default class SocialScreen extends React.Component {
  social: Array<SocialLink>;

  render() {
    const socialLinks = [
      {
        name: "Medium",
        user: "@nahuelhds",
        url: "https://medium.com/@nahuelhds",
        logo: 'medium',
        color: 'seagreen',
      },
      {
        name: "Github",
        user: "@nahuelhds",
        url: "https://github.com/nahuelhds",
        logo: 'github',
        color: 'black',
      },
      {
        name: "LinkedIn",
        user: "/nahuelhds",
        url: "https://www.linkedin.com/in/nahuelhds/",
        logo: 'linkedin',
        color: 'royalblue',
      },
      {
        name: "Blog",
        user: "nahuelhds.github.io",
        url: "https://nahuelhds.github.io",
        logo: 'rss',
        color: 'orangered',
      },
      {
        name: "Twitter",
        user: "@nahuelhds",
        url: "https://twitter.com/nahuelhds",
        logo: 'twitter',
        color: 'dodgerblue',
      },
      {
        name: "Facebook",
        user: "/nahuelhds",
        url: "https://facebook.com/nahuelhds",
        logo: 'facebook',
        color: 'royalblue',
      }
    ]

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
          <List>
            {socialLinks.map((link: SocialLink) =>
              <ListItem icon key={link.name}>
                <Left>
                  <StyleProvider style={getTheme(fontAwesome)}>
                    <Icon name={link.logo} style={css([{ color: link.color }, styles.logo])}/>
                  </StyleProvider>
                </Left>
                <Body>
                  <Text>{link.name}</Text>
                </Body>
                <Right>
                  <Text>{link.user}</Text>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>)}
          </List>
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
  logo:{
    fontSize: 24
  }
})
