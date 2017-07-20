import React from "react";
import {
  Button,
  Text,
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  Item,
  Label
} from "native-base";

export default class NineChat extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Jade Chat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Item floatingLabel style={{ marginTop: 20 }}>
            <Label>Jade Chat</Label>
            <Input />
          </Item>
          <Button
            rounded
            info
            style={{ marginTop: 20, alignSelf: "center" }}
            onPress={() => navigate("Profile")}
          >
            <Text>Goto Jade Profile</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
