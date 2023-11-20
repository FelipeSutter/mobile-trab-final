import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, Image } from "react-native";
import api from "../../../service/api";
import ListaCategoria from "../../components/ListCategoria";

const Home = ({ route }) => {
  const [musicas, setMusicas] = useState([]);

  const getMusicas = async () => {
    try {
      const { data } = await api.get();
      setMusicas(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMusicas();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Categorias</Text>
        </TouchableOpacity>
      </View>

      {/* Card central de apresentação */}
      <View style={styles.blueCard}>
        {/* Conteúdo do Card Azul */}
        <Text style={styles.blueCardText}>{/* Conteúdo das fotos mais um texto lembrar de botar */}</Text>
      </View>

      {/* Sessão "Top Artistas" */}
     
      <View style={styles.topArtistsSection}>
        
        <Text style={styles.sectionTitle}>Top Artistas</Text>
        
        <View style={styles.artistImages}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrBXM2CSXBRBe4HC8rEws0h7Vl_FEMTK0tA&usqp=CAU' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrBXM2CSXBRBe4HC8rEws0h7Vl_FEMTK0tA&usqp=CAU' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrBXM2CSXBRBe4HC8rEws0h7Vl_FEMTK0tA&usqp=CAU' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrBXM2CSXBRBe4HC8rEws0h7Vl_FEMTK0tA&usqp=CAU' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrBXM2CSXBRBe4HC8rEws0h7Vl_FEMTK0tA&usqp=CAU' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrBXM2CSXBRBe4HC8rEws0h7Vl_FEMTK0tA&usqp=CAU' }}
            style={styles.artistImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlrBXM2CSXBRBe4HC8rEws0h7Vl_FEMTK0tA&usqp=CAU' }}
            style={styles.artistImage}
          />
          </ScrollView>
        </View>
        
      </View>
      {/* lista de Categorias */}
      <ListaCategoria musicas={musicas} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#eee",
    width: "100%",
  },
  link: {
    flex: 1,
    alignItems: "center",
  },
  linkText: {
    fontSize: 16,
    color: "blue",
  },
  blueCard: {
    backgroundColor: "blue",
    margin: 10, 
    padding: 20, 
    borderRadius: 30, 
    width: "95%", 
    height: 180, 
  },
  blueCardText: {
    color: "white",
    fontSize: 18,
  },
  topArtistsSection: {
    marginTop: 20, 
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  artistImages: {
    flexDirection: "row",
    marginTop: 10,
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 40, 
    marginHorizontal: 10,
  },
});

export default Home;