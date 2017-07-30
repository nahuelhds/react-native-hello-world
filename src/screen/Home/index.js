import React, { Component } from 'react'
import { Button, Text, Thumbnail, View } from 'native-base'

import lang from '../../I18n/index'
import { styles, css } from './styles'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={css(styles.fullHeight)}>
        <View style={css(styles.header)}>
          <Thumbnail style={css(styles.avatar)} large source={require('../../../assets/img/nahuelhds.jpeg')} />
        </View>
        <View style={css([styles.content])} padder>
          <Text style={css(styles.subtitle)}>{lang.t('app.name')}</Text>
          <Text style={css(styles.title)}>{lang.t('app.author')}</Text>
          <View style={css(styles.fullHeight)}>
            <View style={css(styles.leadBlock)}>
              <Text style={css([styles.lead, styles.textCenter])}>
                {lang.t('homescreen.role')}
              </Text>
              <Text style={css([styles.lead, styles.textCenter])}>
                {lang.t('homescreen.atCristalMedia')}
              </Text>
            </View>
            <View style={css([styles.valign])}>
              <Text style={css([styles.textCenter, styles.small])}>
                {lang.t('homescreen.description')}
              </Text>
            </View>
          </View>
        </View>
        <Button full primary onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Text>{lang.t('Begin')}</Text>
        </Button>
      </View>
    );
  }
}
