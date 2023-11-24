import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../../service/api";
import loadImg from "../../../assets/music.gif";

const Detalhes = ({ route }) => {
  const [musica, setMusica] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = route.params;

  const getMusica = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const { data } = await api.get(`/${id}`);
        setMusica(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  useEffect(() => {
    getMusica();
  }, [id]);

  if (loading) {
    return (
      // <View style={styles.container}>
      //   <ActivityIndicator size="large" color="#b0d6ff" />
      // </View>
      <View style={styles.container}>
        <Image source={loadImg} style={{ width: 256, height: 88 }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerInfo}>
          <Image source={{ uri: musica.url }} style={styles.img} />
          <Text style={[styles.textArtist, styles.text]}>{musica.artist}</Text>
          <Text style={[styles.textMusic, styles.text]}>{musica.title}</Text>
          <Text style={[styles.textDescription, styles.text]}>
            {musica.description}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141a35",
  },
  containerInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginTop: 20,
  },
  img: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "#b0d6ff",
    borderRadius: 100,
  },
  text: {
    color: "#e2e2e2",
    marginTop: 10,
  },
  textArtist: {
    fontSize: 40,
    fontWeight: "bold",
  },
  textMusic: {
    fontSize: 30,
    fontWeight: "500",
  },
  textDescription: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Detalhes;
