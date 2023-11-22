import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import api from "../../../service/api";

function MusicaForm({ handleSubmit, btnText, musicaData }) {
  const [musica, setMusica] = useState(musicaData || {});
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    api
      .get()
      .then((response) => {
        const uniqueCategories = Array.from(
          new Set(response.data.map((item) => item.category))
        );

        const categories = uniqueCategories.map((category, index) => ({
          id: index + 1,
          title: category,
        }));

        setCategories(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const submit = () => {
    if (!isValidCategory(selectedCategory)) {
      alert("Selecione uma categoria válida.");
      return;
    }

    if (!isValidMusica()) {
      alert("Preencha todos os campos obrigatórios.");
      return;
    }

    handleSubmit({
      id: musica.id,
      title: musica.title,
      artist: musica.artist,
      description: musica.description,
      url: musica.url,
      category: selectedCategory,
    });

    setMusica({});
    setSelectedCategory(null);
  };

  const isValidCategory = (category) => {
    return category !== null && category !== "Selecione uma categoria";
  };

  const isValidMusica = () => {
    return musica.title && musica.artist && musica.url && musica.description;
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Nome da música"
        onChangeText={(value) => setMusica({ ...musica, title: value })}
        value={musica.title}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do artista"
        onChangeText={(value) => setMusica({ ...musica, artist: value })}
        value={musica.artist}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a URL da imagem da música"
        onChangeText={(value) => setMusica({ ...musica, url: value })}
        value={musica.url}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a descrição/curiosidades da música"
        onChangeText={(value) => setMusica({ ...musica, description: value })}
        value={musica.description}
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value)}
          onBlur={() => {
            if (!isValidCategory(selectedCategory)) {
              alert("Selecione uma categoria válida.");
            }
          }}
        >
          <Picker.Item
            label="Selecione uma categoria"
            value={null}
            style={{ color: "gray", textAlign: "center" }}
          />
          {categories.map((category) => (
            <Picker.Item
              key={category.id}
              label={category.title}
              value={category.title}
            />
          ))}
        </Picker>
      </View>
      <TouchableOpacity onPress={submit} style={styles.button}>
        <Text style={styles.textButton}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#b0d6ff",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    backgroundColor: "#e2e2e2",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    height: 40,
    borderColor: "#b0d6ff",
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "#e2e2e2",
  },
  picker: {
    height: 40,
    paddingLeft: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#b0d6ff",
    width: 300,
    height: 40,
    padding: 8,
  },
  textButton: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default MusicaForm;
