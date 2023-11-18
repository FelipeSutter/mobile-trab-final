import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

const api = axios.create({
  baseURL: "https://6542c2c401b5e279de1f8b8f.mockapi.io/musicas/",
});

export default api;
