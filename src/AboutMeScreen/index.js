import React from "react"
import {TabNavigator} from "react-navigation"
import {Button, Text, Icon, Footer, FooterTab} from "native-base"

import Personal from "./Personal"
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
  // }
}, {
  tabBarPosition: "bottom",
  tabBarComponent: props => {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active={props.navigationState.index === 0} onPress={() => props.navigation.navigate("Personal")}>
            <Icon name="bowtie"/>
            <Text>Lucy</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
})

export default AboutMeScreen;
