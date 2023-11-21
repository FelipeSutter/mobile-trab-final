import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/pages/Home";
import Detalhes from "../src/pages/Detalhes";
import Signin from "../src/pages/Signin";
import Signup from "../src/pages/Signup";
import Sobre from "../src/pages/Sobre";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

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

export const StackNavigate = ({ onLogin }) => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        options={{ headerShown: false }}
        component={() => <Signin onLogin={onLogin} />}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
