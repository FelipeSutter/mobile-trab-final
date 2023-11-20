import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from "react-native";

const Sobre = () => {
  const membros = [
    {
      id: "1",
      nome: "Rian Fernandes",
      imagem: require("../../../assets/rian.png"),
      github: "https://github.com/Rian-Fernandes",
    },
    {
      id: "2",
      nome: "Felipe Ribeiro",
      imagem: require("../../../assets/felps.png"),
      github: "https://github.com/philippusv",
    },
    {
      id: "3",
      nome: "Elisabeth Sabrina",
      imagem: require("../../../assets/sabrina.png"),
      github: "https://github.com/sabrinapereiry",
    },
    {
      id: "4",
      nome: "Felipe Sutter",
      imagem: require("../../../assets/sutter.png"),
      github: "https://github.com/FelipeSutter",
    },
    {
      id: "5",
      nome: "Igor Araujo",
      imagem: require("../../../assets/igor.png"),
      github: "https://github.com/Igor-Arauj0",
    },
  ];

  const abrirGitHub = (url) => {
    Linking.openURL(url);
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={item.imagem} style={styles.imagemMembro} />
      <View style={styles.textoContainer}>
        <Text style={styles.texto}>{item.nome}</Text>
        <TouchableOpacity onPress={() => abrirGitHub(item.github)}>
          <Text style={styles.githubLink}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={membros}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ListHeaderComponent={() => (
        <View style={styles.headerContainer}>
          <Text style={styles.titulo}>Conheça um pouco sobre o nosso app</Text>
          <Text style={styles.descricao}>
            Este é um aplicativo de música onde você pode organizar suas
            playlists da melhor forma possível
          </Text>
          <Text style={[styles.titulo, styles.tituloFundadores]}>
            Conheça nossos fundadores
          </Text>
        </View>
      )}
      contentContainerStyle={styles.background}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginVertical: 10,
    marginLeft: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "black",
    margin: 20,
    marginBottom: 10,
  },
  imagemMembro: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  background: {
    backgroundColor: "#141a35",
    paddingVertical: 5,
  },
  texto: {
    color: "#e2e2e2",
  },
  githubLink: {
    color: "#B0D6FF",
  },
  titulo: {
    color: "#e2e2e2",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  descricao: {
    color: "#e2e2e2",
    textAlign: "center",
    marginTop: 20,
    margin: 5,
  },
  headerContainer: {
    marginBottom: 20,
  },
  tituloFundadores: {
    marginTop: 50,
  },
});

export default Sobre;
