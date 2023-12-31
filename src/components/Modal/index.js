import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import RNModal from "react-native-modal";

export default function ModalEdicao({
  music,
  modalVisible,
  setModalVisible,
  onSaveEdit,
  setMusicas,
}) {
  const [item, setItem] = useState({});

  useEffect(() => {
    // Atualize o estado apenas se houver uma música válida
    if (music) {
      setItem(music);
    }
  }, [music]);

  const handleSaveEdit = async (retryCount = 3) => {
    onSaveEdit();
    try {
      await axios.put(
        `https://6542c2c401b5e279de1f8b8f.mockapi.io/musicas/${item.id}`,
        {
          url: item.url,
          title: item.title,
          artist: item.artist,
          description: item.description,
          category: item.category,
        }
      );
      alert("Música editada com sucesso!");
      setMusicas(music);
      setModalVisible(false);
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount > 0) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        await handleSaveEdit(retryCount - 1);
      } else {
        console.log("Erro ao atualizar os dados:", error);
      }
    }
  };

  const handleCancelEdit = () => {
    setModalVisible(false);
  };

  return (
    <RNModal
      isVisible={modalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => false}
    >
      <View style={styles.modalContainer}>
        <Text>Editar Música</Text>
        <TextInput
          style={styles.input}
          placeholder="URL da Imagem"
          value={item.url}
          onChangeText={(text) =>
            setItem((prevItem) => ({ ...prevItem, url: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Nome da Música"
          value={item.title}
          onChangeText={(text) =>
            setItem((prevItem) => ({ ...prevItem, title: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Nome do Artista"
          value={item.artist}
          onChangeText={(text) =>
            setItem((prevItem) => ({ ...prevItem, artist: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={item.description}
          onChangeText={(text) =>
            setItem((prevItem) => ({ ...prevItem, description: text }))
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Categoria"
          value={item.category}
          onChangeText={(text) =>
            setItem((prevItem) => ({ ...prevItem, category: text }))
          }
        />
        <View style={styles.buttonContainer}>
          <Button title="Salvar" onPress={handleSaveEdit} />
          <Button title="Cancelar" onPress={handleCancelEdit} />
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
