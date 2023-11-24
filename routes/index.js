import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/pages/Home";
import Detalhes from "../src/pages/Detalhes";
import Signin from "../src/pages/Signin";
import Signup from "../src/pages/Signup";
import Sobre from "../src/pages/Sobre";
import NovaMusica from "../src/pages/NovaMusica";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigate = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="NovaMusica"
        component={NovaMusica}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="music-note-plus"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="users" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={TabNavigate}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Sobre" component={TabNavigate} />
      <Stack.Screen name="NovaMusica" component={TabNavigate} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
  );
};

export const StackNavigate = ({ onLogin }) => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen name="Signin" options={{ headerShown: false }}>
        {(props) => <Signin {...props} onLogin={onLogin} />}
      </Stack.Screen>
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={Routes} />
      <Stack.Screen name="NovaMusica" component={NovaMusica} />
    </Stack.Navigator>
  );
};

export default Routes;
