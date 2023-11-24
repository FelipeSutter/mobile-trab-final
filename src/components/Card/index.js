import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import Swipeout from "react-native-swipeout";
import axios from "axios";
import ModalEdicao from "../Modal";

const Card = ({ musica, onDelete, listaMusicas, setMusicas }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editedMusic, setEditedMusic] = useState(null);
  const navigation = useNavigation();

  const deleteMusic = async () => {
    try {
      const { data } = await axios.delete(
        `https://6542c2c401b5e279de1f8b8f.mockapi.io/musicas/${musica.id}`
      );
      Alert.alert("Sucesso", "Música excluída com sucesso!");
      setMusicas(data);
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Ocorreu um erro ao excluir a música.");
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      "Confirmação",
      "Deseja realmente excluir esta música?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => deleteMusic(),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const openEditModal = () => {
    setModalVisible(true);
  };

  const handleSaveEdit = async () => {
    try {
      const { data } = await axios.put(
        `https://6542c2c401b5e279de1f8b8f.mockapi.io/musicas/${musica.id}`,
        {
          url: musica.url,
          title: musica.title,
          artist: musica.artist,
          description: musica.description,
          category: musica.category,
        }
      );
      setMusicas(musica);
      setModalVisible(false);
      setEditedMusic(null);
    } catch (e) {
      console.log("Erro ao atualizar os dados:", e);
    }
  };

  const [swipeBtns, setSwipeBtns] = useState([
    {
      component: (
        <View style={styles.iconBackContainer}>
          <Icon name="pencil" size={22} color="white" />
        </View>
      ),
      backgroundColor: "#141A35",
      onPress: () => {
        openEditModal();
      },
    },
    {
      component: (
        <View style={styles.iconBackContainer}>
          <Icon name="trash" size={22} color="white" />
        </View>
      ),
      backgroundColor: "#141A35",
      onPress: () => {
        confirmDelete();
      },
    },
  ]);

  const navegar = () => {
    navigation.navigate("Detalhes", {
      id: musica.id,
      url: musica.url,
      title: musica.title,
      artist: musica.artist,
      category: musica.category,
      description: musica.description,
    });
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setEditedMusic(null);
  };

  return (
    <>
      <Swipeout right={swipeBtns} style={styles.containerSwipe}>
        <TouchableOpacity onPress={navegar}>
          <View style={styles.container}>
            <View style={styles.viewCard}>
              <Image source={{ uri: musica.url }} style={styles.img} />
              <View style={styles.textContainer}>
                <Text
                  style={styles.textMusic}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  {musica.title}
                </Text>
                <Text
                  style={styles.textArtist}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {musica.artist}
                </Text>
              </View>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => console.log("Coração pressionado")}
                >
                  <Icon name="heart" size={22} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => console.log("Play pressionado")}
                >
                  <Icon name="play" size={22} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeout>
      <ModalEdicao
        music={musica}
        modalVisible={modalVisible}
        setMusicas={setMusicas}
        setModalVisible={() => {
          setModalVisible(false);
          setEditedMusic(null);
        }}
        onSaveEdit={handleSaveEdit}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 320,
    height: 100,
    borderRadius: 30,
    marginBottom: 20,
    backgroundColor: "#dbe3e7",
  },
  viewCard: {
    flexDirection: "row",
    alignItems: "center",
    width: "85%",
    height: "80%",
  },
  img: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textMusic: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
    flexWrap: "wrap",
  },
  textArtist: {
    fontSize: 14,
    textAlign: "center",
    flexWrap: "wrap",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "auto",
    width: 55,
  },
  containerSwipe: {
    backgroundColor: "#141A35",
    justifyContent: "center",
    alignItems: "center",
  },

  iconBackContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ea0010",
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 5,
  },

  favorites: {
    color: "#fff",
    textAlign: "center",
  },
});

export default Card;
