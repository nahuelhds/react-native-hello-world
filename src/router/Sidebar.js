// @flow
import React from "react"
import { StyleSheet } from "react-native"
import { DrawerNavigator } from "react-navigation"
import {
  Body,
  Container,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Separator,
  Text,
  Thumbnail,
  View
} from "native-base"

import lang from 'lang/main'
import HomeScreen from "screen/Home"
import AboutMeRouter from 'router/AboutMe'
import ContactMeScreen from "screen/ContactMe"
// import Profile from "./ProfileScreen/index";

const Sidebar = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  AboutMe: {
    screen: AboutMeRouter
  },
  ContactMe: {
    screen: ContactMeScreen
  }
}, {
    contentComponent: (props) => {
      const routes = [
        {
          title: lang.t("Home"),
          icon: "home",
          route: "Home"
        },
        {
          title: lang.t("About me"),
          icon: "person",
          route: "AboutMe"
        },
        {
          title: lang.t("Contact me"),
          icon: "mail",
          route: "ContactMe"
        }
      ];
      const renderRow = (item, arg, index) => {
        let attr = {}
        // Si es el ultimo, lo indicamos de dicho modo
        if (parseInt(index) + 1 == routes.length) {
          attr.last = true
        }
        return (
          <ListItem {...attr} icon button onPress={() => props.navigation.navigate(item.route)}>
            <Left>
              <Icon name={item.icon} />
            </Left>
            <Body>
              <Text>{item.title}</Text>
            </Body>
          </ListItem>
        )
      }
      return (
        <Container>
          <Content>
            <View style={css(styles.sidebar)}>
              <Thumbnail large source={require('img/logo.png')} />
              <Text>{lang.t('app.name')}</Text>
            </View>
            <List dataArray={routes} renderRow={renderRow}></List>
            <List>
              <Separator bordered />
              <ListItem icon last>
                <Left>
                  <Icon name="information-circle" />
                </Left>
                <Body>
                  <Text>{lang.t('Credits')}</Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        </Container>
      )
    }
  })

const styles = StyleSheet.create({
  sidebar: {
    height: 200,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center"
  }
})
const css = StyleSheet.flatten

export default Sidebar
