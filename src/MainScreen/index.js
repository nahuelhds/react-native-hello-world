import React from "react";

import {
  Body,
  Container,
  Content,
  Icon,
  Left,
  List,
  ListItem,
  Separator,
  StyleSheet,
  Text,
  Thumbnail,
  View
} from "native-base";

import {DrawerNavigator} from "react-navigation";

import {styles, css} from "./styles";
import HomeScreen from "../HomeScreen/index";
import AboutMeScreen from "../AboutMeScreen/index";
// import Profile from "./ProfileScreen/index";

const routes = [
  {
    title: "Home",
    icon: "home",
    route: "Home"
  }, {
    title: "About me",
    icon: "person",
    route: "AboutMe"
  },
  // ContactScreen: {
  //   screen: ContactScreen,
  //   title: "Contact",
  //   icon: "mail",
  //   route: "ContactScreen"
  // },
];

const MainScreen = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  AboutMe: {
    screen: AboutMeScreen
  }
}, {
  contentComponent: (props) => {
    const renderRow = (item, arg, index) => {
      let attr = []
      // Si es el ultimo, lo indicamos de dicho modo
      if (parseInt(index) + 1 == routes.length) {
        attr["last"] = true
      }
      return (
        <ListItem {...attr} icon button onPress={() => props.navigation.navigate(item.route)}>
          <Left>
            <Icon name={item.icon}/>
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
            <Thumbnail large source={{
              uri: "http://angular.github.io/react-native-renderer/assets/react.png"
            }}/>
            <Text>The Hello World App</Text>
          </View>
          <List dataArray={routes} renderRow={renderRow}></List>
          <List>
            <Separator bordered/>
            <ListItem icon last>
              <Left>
                <Icon name="information-circle"/>
              </Left>
              <Body>
                <Text>Credits</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
})

export default MainScreen
