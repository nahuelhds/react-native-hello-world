// @flow
import React from 'react';
//import { StyleSheet } from 'react-native'
import {
  Container,
  Content,
  H1,
  Icon
} from 'native-base';

import Theme from 'theme/variables/platform'

import DrawerHeader from 'component/DrawerHeader';
import lang from 'lang/main'

export default class ContactMeScreen extends React.Component{
  render(){
    return <Container>
      <DrawerHeader
        title={lang.t('Contact me')}
        onPress={() => this.props.navigation.navigate("DrawerOpen")}
      ></DrawerHeader>
      <Content padder contentContainerStyle={{ alignItems: 'center' }}>
        <Icon active name="help-buoy" style={{ fontSize: 100, color: Theme.brandInfo }}></Icon>
        <H1 style={{textAlign:'center'}}>¿Precisás una mano con tu desarrollo?</H1>
      </Content>
    </Container>
  }
}
