import api from "../../../service/api";
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";
import MusicaForm from "../../components/MusicaForm";

function NovaMusica({ navigation }) {
  const [musicas, setMusicas] = useState([]);

  const createPost = async (musica) => {
    try {
      const response = await axios.post(
        "https://6542c2c401b5e279de1f8b8f.mockapi.io/musicas/",
        musica
      );

      setMusicas((prevMusicas) => [response.data, ...prevMusicas]);

      alert("Música postada com sucesso!!");

      navigation.navigate("Home", {
        message: "Música postada com sucesso!",
        NovaMusica: response.data,
      });
    } catch (error) {
      console.error("Erro ao postar a música:", error);
      Alert.alert(
        "Erro",
        "Erro ao postar a música. Por favor, tente novamente."
      );
    }
  };

  return (
    <>
      <View style={styles.novaMusicaContainer}>
        <Text style={styles.title}>Adicionar Música</Text>
        <Text>Poste sua música!</Text>
        <MusicaForm
          musicaData={musicas}
          handleSubmit={createPost}
          btnText="Postar música"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  novaMusicaContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default NovaMusica;
