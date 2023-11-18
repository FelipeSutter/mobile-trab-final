import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Card = ({ musica }) => {
  const navigation = useNavigation();

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

  return (
    <TouchableOpacity onPress={navegar}>
      <View style={styles.container}>
        <View style={styles.viewCard}>
          <Image source={{ uri: musica.url }} style={styles.img} />
          <Text style={styles.textMusic}>{musica.title}</Text>
          <Text style={styles.textArtist}>{musica.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    width: 250,
    height: 100,
    borderRadius: 30,
    margin: 20,
  },
  viewCard: {
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    height: "80%",
  },
  img: {
    width: 50,
    height: 50,
  },
  textMusic: {
    fontSize: 20,
    fontWeight: "500",
  },
  textArtist: {
    fontSize: 14,
  },
});

export default Card;
