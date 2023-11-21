import { View, Text, TouchableOpacity } from "react-native";
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

const TabNavigate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Sobre" component={Sobre} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigate} />
      <Stack.Screen name="Sobre" component={TabNavigate} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
};

export const StackNavigate = ({ onLogin }) => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        options={{ headerShown: false }}
        component={() => <Signin onLogin={onLogin} />}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Routes} />
    </Stack.Navigator>
  );
};

export default Routes;
