import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import Routes, { StackNavigate } from "./routes";
import { useState } from "react";

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  return (
    <NavigationContainer>
      {!isAuthenticated ? <StackNavigate onLogin={handleLogin} /> : <Routes />}
    </NavigationContainer>
  );
}
