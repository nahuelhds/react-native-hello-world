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

import Personal from 'screen/AboutMe'
// import CarreerScreen from "./CarreerScreen";
// import SocialScreen from "./SocialScreen";


const AboutMeScreen = TabNavigator({
  Personal: {
    screen: Personal
  },
  // JadeChat: {
  //   screen: JadeChat
  // },
  // NineChat: {
  //   screen: NineChat
  // },
}, {
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      const routes = [
        {
          title: "Me",
          icon: "person",
          route: "Personal",
        }, {
          title: "Carreer",
          icon: "code",
          route: "Carreer",
        }
      ]
      return (
        <Footer>
          <FooterTab>
            {routes.map((item) =>
              <Button
                key={item.title}
                vertical
                active={props.navigationState.index === 0}
                onPress={() => props.navigation.navigate(item.route)}>
                <Icon name={item.icon} />
                <Text>{item.title}</Text>
              </Button>)}
          </FooterTab>
        </Footer>
      )
    }
  })

export default AboutMeScreen;
