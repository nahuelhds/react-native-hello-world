import React from "react";
import {DrawerNavigator} from "react-navigation";

import HomeScreen from "./HomeScreen";
import AboutMeScreen from "../AboutMeScreen/index";
// import Profile from "./ProfileScreen/index";
import Sidebar from "./Sidebar";

const routes = {
  Home: {
    screen: HomeScreen,
    title: "Home",
    icon: "home",
    route: "Home",
  },
  AboutMe: {
    screen: AboutMeScreen,
    title: "About me",
    icon: "person",
    route: "AboutMe",
  },
  // ContactScreen: {
  //   screen: ContactScreen,
  //   title: "Contact",
  //   icon: "mail",
  //   route: "ContactScreen"
  // },
}

export default DrawerNavigator(routes, {
  contentComponent: props => <Sidebar {...props}
    // Le envio las rutas de forma dinamica
    routes={Object.values(routes)}/>
});
