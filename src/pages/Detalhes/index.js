import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../../service/api";

const Detalhes = ({ route }) => {
  const [musica, setMusica] = useState({});
  const { id } = route.params;

  const getMusica = async () => {
    try {
      const { data } = await api.get(`/${id}`);
      setMusica(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getMusica();
  }, [id]);

  return (
    <ScrollView>
      <Image
        source={{ uri: musica.url }}
        style={{ width: 100, height: 100, marginTop: 50 }}
      />
      <Text style={{ marginTop: 50 }}>{musica.artist}</Text>
      <Text style={{ marginTop: 50 }}>{musica.title}</Text>
      <Text style={{ marginTop: 50 }}>{musica.description}</Text>
    </ScrollView>
  );
};

export default Detalhes;
