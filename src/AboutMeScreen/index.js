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

import Personal from "./Personal"
// import CarreerScreen from "./CarreerScreen";
// import SocialScreen from "./SocialScreen";

const routes = [{
  key: "Personal",
  icon: "bowtie",
  route: "Personal",
}, {
  key: "My Carreer",
  icon: "bowtie",
  route: "Carreer",
}, {
  key: "Social",
  icon: "bowtie",
  route: "Social",
}]

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
  tabBarComponent: props => (
    <Footer>
      <FooterTab>
        {routes.map((item) => <Button key={item.key} vertical active={props.navigationState.index === 0} onPress={() => props.navigation.navigate(item.route)}>
          <Icon name={item.icon}/>
          <Text>{item.key}</Text>
        </Button>)}
      </FooterTab>
    </Footer>
  )
})

export default AboutMeScreen;
