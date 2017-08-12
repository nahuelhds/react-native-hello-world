// @flow
import React from 'react';
import { StyleSheet } from 'react-native'
import {
  Container,
  Content,
  Text,
  H1,
  Icon,
  Form,
  Item,
  Label,
  Input,
  View,
} from 'native-base';

import Theme from 'theme/variables/platform'

import DrawerHeader from 'component/DrawerHeader';
import lang from 'lang/main'

export default class ContactMeScreen extends React.Component {
  render() {
    return <Container>
      <DrawerHeader
        title={lang.t('Contact me')}
        onPress={() => this.props.navigation.navigate("DrawerOpen")}
      ></DrawerHeader>
      <Content>
        <View style={{ alignItems: "center" }}>
          <Icon active name="help-buoy" style={{ fontSize: 100, color: Theme.brandInfo }}></Icon>
          <Text style={{ textAlign: 'center' }}>{lang.t('contactme.description')}</Text>
          <H1>{lang.t('contactme.title')}</H1>
        </View>
        <View>
          <Form>
            <Item floatingLabel>
              <Label>{lang.t('form.label.name')}</Label>
              <Input
                autoFocus="true"
                getRef={(component) => { this.textInput = component; }}
                onSubmitEditing={() => { this.emailInput._root.focus(); }}
              />
            </Item>
            <Item floatingLabel>
              <Label>{lang.t('form.label.email')}</Label>
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                getRef={(component) => { this.emailInput = component; }}
                onSubmitEditing={() => { this.messageInput._root.focus(); }}
              />
            </Item>
            <Item floatingLabel>
              <Label>{lang.t('form.label.message')}</Label>
              <Input
                multiline={true}
                style={css(styles.textArea)}
                getRef={(component) => { this.messageInput = component; }}
              />
            </Item>
          </Form>
        </View>
      </Content>
    </Container>
  }
}

const css = StyleSheet.flatten
const styles = StyleSheet.create({
  textArea: {
    marginTop: 20,
    marginBottom: 20,
  }
});
