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
import AppIntroSlider from "react-native-app-intro-slider";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

const slides = [
  {
    key: "1",
    title: "Titulo principal",
    text: "Colocar uma frase complementar",
    image: {
      uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
    },
    button: {
      text: "Escute já",
    },
  },
  {
    key: "2",
    title: "Titulo principal 2",
    text: "Colocar uma frase complementar 2",
    image: {
      uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
    },
    button: {
      text: "Escute já",
    },
  },
  {
    key: "3",
    title: "Titulo principal 3",
    text: "Colocar uma frase complementar 3",
    image: {
      uri: "https://jpimg.com.br/uploads/2021/03/bruno-mars.jpg",
    },
    button: {
      text: "Escute já",
    },
  },
];

const Home = ({ route }) => {
  const [musicas, setMusicas] = useState([]);
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });

  function renderSlider({ item }) {
    return (
      <View>
        <View style={styles.sliderContainer}>
          <View style={styles.sliderContainerCol}>
            <Image source={item.image} style={styles.profileImage} />
          </View>
          <View style={styles.sliderContainerCol}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardSubtitle}>{item.text}</Text>
            <TouchableOpacity style={styles.listenButton}>
              <Text style={styles.listenButtonText}>Escute já</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

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

      <View style={styles.blueCard}>
        <AppIntroSlider
          renderItem={renderSlider}
          data={slides}
          activeDotStyle={{
            backgroundColor: "#009cff",
          }}
        />
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

        {/* Card central de apresentação */}

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
    paddingBottom: 0,
    borderRadius: 25,
    width: "95%",
    height: 210,
  },
  sliderContainerCol: {
    display: "flex",
    alignSelf: "center",
    flexDirection: "column",
  },
  sliderContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 26,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 50,
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
