// @flow
import React from "react"

import {
  TabNavigator
} from "react-navigation"

import {
  Button,
  Text,
  Icon,
  Footer,
  FooterTab,
} from "native-base"

import lang from "lang/main"

import ProfileScreen from 'screen/Profile'
import SocialScreen from 'screen/Social'

const AboutMeRouter = TabNavigator({
  Profile: {
    screen: ProfileScreen
  },
  Social: {
    screen: SocialScreen
  }
}, {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      const routes = [
        {
          title: lang.t('Profile'),
          icon: "person",
          route: "Profile",
        }, {
          title: lang.t('Social'),
          icon: "people",
          route: "Social",
        }
      ]
      let i: number = 0
      return (
        <Footer>
          <FooterTab>
            {routes.map((item) =>
              <Button
                key={item.title}
                vertical
                active={props.navigationState.index === i++}
                onPress={() => props.navigation.navigate(item.route)}>
                <Icon name={item.icon} />
                <Text>{item.title}</Text>
              </Button>)}
          </FooterTab>
        </Footer>
      )
    }
  })

export default AboutMeRouter
