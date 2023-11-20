import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

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
          <View style={styles.textContainer}>
            <Text style={styles.textMusic} numberOfLines={2} ellipsizeMode="tail">
              {musica.title}
            </Text>
            <Text style={styles.textArtist} numberOfLines={1} ellipsizeMode="tail">
              {musica.artist}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => console.log("Coração pressionado")}>
              <Icon name="heart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Play pressionado")}>
              <Icon name="play" size={24} color="black" />
            </TouchableOpacity>
          </View>
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
    width: 320,
    height: 100,
    borderRadius: 30,
    margin: 10,
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
    flexWrap: 'wrap', 
  },
  textArtist: {
    fontSize: 14,
    textAlign: "center",
    flexWrap: 'wrap', 
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    marginLeft: "auto", 
    width:55, 
  },
});

export default Card;
