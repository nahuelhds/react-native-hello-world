import React from "react";
import {DrawerNavigator} from "react-navigation";

import HomeScreen from "./HomeScreen/index";
import MainScreenNavigator from "./ChatScreen/index";
import Profile from "./ProfileScreen/index";
import SideBar from "./SideBar/index";

const Router = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Chat: {
    screen: MainScreenNavigator
  },
  Profile: {
    screen: Profile
  }
}, {
  contentComponent: props => <SideBar {...props}/>
});
export default Router;
