import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import api from "../../../service/api";
import ListaCategoria from "../../components/ListCategoria";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

const Home = ({ route }) => {
  const [musicas, setMusicas] = useState([]);
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });

  let loginUser;

  const getLogin = async () => {
    const login = AsyncStorage.getItem("@emailUser");
    loginUser = login;
  };

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
    getLogin();
  }, []);

  if (!fontsLoaded) {
    // Aguarde até que as fontes sejam carregadas
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Olá {loginUser}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Categorias</Text>
        </TouchableOpacity>
      </View>

      {/* Card central de apresentação */}
      <View style={styles.blueCard}>
        <View style={styles.cardContent}>
          {/* Foto Redonda */}
          <Image
            source={{
              uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
            }}
            style={styles.profileImage}
          />

          {/* Texto à direita da foto */}
          <View style={styles.textContainer}>
            {/* Título Grande */}
            <Text
              style={styles.cardTitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Título Principal
            </Text>

            {/* Frase com fonte menor */}
            <Text
              style={styles.cardSubtitle}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Colocar uma frase complementar.
            </Text>
          </View>
        </View>
        {/* Botão "Escute já" no canto inferior direito */}
        <TouchableOpacity style={styles.listenButton}>
          <Text style={styles.listenButtonText}>Escute já</Text>
        </TouchableOpacity>
      </View>

      {/* Sessão "Top Artistas" */}

      <View style={styles.topArtistsSection}>
        <Text style={styles.sectionTitle}>Top Artistas</Text>

        <View style={styles.artistImages}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
            <Image
              source={{
                uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
              }}
              style={styles.artistImage}
            />
          </ScrollView>
        </View>

        <Text style={styles.favorites}>Suas favoritas</Text>
      </View>
      {/* lista de Categorias */}
      <ListaCategoria musicas={musicas} setMusicas={setMusicas} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141A35",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "100%",
  },
  link: {
    flex: 1,
    alignItems: "center",
  },
  linkText: {
    fontSize: 16,
    color: "blue",
    fontFamily: "Raleway_400Regular",
  },
  blueCard: {
    backgroundColor: "#ffd23e",
    margin: 10,
    marginTop: 30,
    padding: 20,
    borderRadius: 25,
    width: "95%",
    height: 180,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
    marginBottom: -50,
    marginRight: 50,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    color: "white",
    fontSize: 20,
    fontFamily: "Raleway_700Bold",
  },
  cardSubtitle: {
    color: "white",
    fontSize: 16,
    fontFamily: "Raleway_400Regular",
  },

  blueCardText: {
    color: "white",
    fontSize: 18,
  },
  topArtistsSection: {
    marginTop: 24,
    alignItems: "center",
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Raleway_700Bold",
    color: "#ECECEC",
  },
  artistImages: {
    flexDirection: "row",
    marginTop: 30,
  },
  artistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  listenButton: {
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "50%",
    alignSelf: "flex-end",
  },
  listenButtonText: {
    color: "blue",
    fontSize: 16,
    fontFamily: "Raleway_400Regular",
  },

  favorites: {
    color: "white",
    fontSize: 20,
    fontFamily: "Raleway_700Bold",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Home;
