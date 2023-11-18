import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../../service/api";
import Card from "../../components/Card";
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
});

export default Home;
