import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../src/pages/Home";
import Detalhes from "../src/pages/Detalhes";
import Sobre from "../src/pages/Sobre";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detalhes" component={Detalhes} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
};

export default Routes;
