// Sobre.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Sobre = () => {
  const membros = [
    { nome: "Rian Fernandes", imagem: require("../../../assets/rian.png") },
    { nome: "Felipe Ribeiro", imagem: require("../../../assets/felps.png") },
    {
      nome: "Elisabeth Sabrina",
      imagem: require("../../../assets/sabrina.png"),
    },
    { nome: "Felipe Sutter", imagem: require("../../../assets/sutter.png") },
    { nome: "Igor Araujo", imagem: require("../../../assets/rian.png") },
  ];

  return (
    <View>
      <Text>Integrantes do Grupo</Text>
      {membros.map((membro, index) => (
        <View key={index} style={styles.membroContainer}>
          <Image source={membro.imagem} style={styles.imagemMembro} />
          <Text>{membro.nome}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  membroContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  imagemMembro: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default Sobre;
