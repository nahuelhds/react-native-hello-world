// @flow
import React from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'
import {
  Button,
  Text,
  H1,
  View
} from 'native-base'

import lang from 'lang/main'

const screen = class HomeScreen extends React.Component {
  render() {
    return (
      <View style={css([styles.flex, styles.vcenter])}>
        <View style={css([styles.flex2, styles.hcenter, styles.vend])}>
          <Image source={require("img/logo.png")} />
          <H1>{lang.t('app.name')}</H1>
        </View>
        <View style={css([styles.flex, styles.vend])}>
          <View padder>
            <Text style={css([styles.textCenter, styles.small])}>
              {lang.t('homescreen.description')}
            </Text>
          </View>
          <Button full primary onPress={() => this.props.navigation.navigate('DrawerOpen')}>
            <Text>{lang.t('Begin')}</Text>
          </Button>
        </View>
      </View>
    )
  }
}

const css = StyleSheet.flatten
const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  hcenter: {
    alignItems: "center"
  },
  vcenter: {
    justifyContent: "center"
  },
  vend: {
    justifyContent: 'flex-end'
  },
  textCenter: {
    textAlign: 'center'
  },
  small: {
    fontSize: 14
  }
})

export default screen
