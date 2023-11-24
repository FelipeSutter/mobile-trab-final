import api from "../../../service/api";
import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import axios from "axios";
import MusicaForm from "../../components/MusicaForm";

function NovaMusica({ navigation }) {
  const [musicas, setMusicas] = useState([]);

  const createPost = async (musica, retryCount = 3) => {
    try {
      const response = await axios.post(
        "https://6542c2c401b5e279de1f8b8f.mockapi.io/musicas/",
        musica
      );

      setMusicas((prevMusicas) => [response.data, ...prevMusicas]);

      alert("Música postada com sucesso!!");

      navigation.navigate("Home", {
        message: "Música postada com sucesso!",
        setMusic: response.data,
      });
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount > 0) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await createPost(retryCount - 1);
      } else {
        Alert.alert(
          "Erro",
          "Erro ao postar a música. Por favor, tente novamente."
        );
      }
    }
  };

  // TODO: Atualizar a home quando postar uma música.

  return (
    <>
      <View style={styles.novaMusicaContainer}>
        <Text style={styles.title}>Adicionar Música</Text>
        <Text style={styles.minorTitle}>Poste sua música!</Text>
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#141A35",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#e2e2e2",
  },
  minorTitle: {
    fontSize: 24,
    color: "#e2e2e2",
  },
});

export default NovaMusica;
