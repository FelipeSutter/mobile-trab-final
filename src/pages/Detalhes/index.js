import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../../service/api";
import loadImg from "../../../assets/clef-1.1s-200px.png";

const Detalhes = ({ route }) => {
  const [musica, setMusica] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = route.params;

  const getMusica = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/${id}`);
      setMusica(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMusica();
  }, [id]);

  if (loading) {
    return (
      // <Image
      //   source={loadImg}
      //   style={{
      //     width: "100%",
      //     height: "100%",
      //     alignItems: "center",
      //     justifyContent: "center",
      //   }}
      // />
      <View style={styles.container}>
        <Text style={[styles.textArtist, styles.text]}>Loading...</Text>
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
  },
});

export default Detalhes;
