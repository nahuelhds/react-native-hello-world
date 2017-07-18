import React from "react";
import {AppRegistry, Image, StatusBar} from "react-native";
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
} from "native-base";

const routes = [
  {
    title: "Home",
    icon: "home",
    route: "Home"
  }, {
    title: "About me",
    icon: "person",
    route: "AboutMe"
  }, {
    title: "Contact",
    icon: "mail",
    route: "Contact"
  }
];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={{
            height: 200,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Thumbnail large source={{
              uri: "http://angular.github.io/react-native-renderer/assets/react.png"
            }}/>
            <Text>The Hello World App</Text>
          </View>
          <List dataArray={routes} renderRow={(item, arg, index) => {
            let attr = [];
            // Si es el ultimo, lo indicamos de dicho modo
            if(parseInt(index) + 1 == routes.length){
              attr["last"] = true
            }
            return (
              <ListItem {...attr} icon button onPress={() => this.props.navigation.navigate(item.route)}>
                <Left>
                  <Icon name={item.icon}/>
                </Left>
                <Body>
                  <Text>{item.title}</Text>
                </Body>
              </ListItem>
            );
          }}>
          </List>
          <List>
            <Separator bordered />
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
    );
  }
}
