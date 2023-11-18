import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import api from "../../../service/api";

const Detalhes = () => {
  const [musica, setMusica] = useState([]);

  const getMusicas = async () => {
    const { data } = await api.get(`/1`);
    // console.log(data);
    setMusica(data);
  };

  useEffect(() => {
    getMusicas();
  }, []);

  return (
    <>
      <ScrollView>
        <Image
          src={musica.url}
          style={{ width: 200, height: 200, marginTop: 50 }}
        />
        <Text style={{ marginTop: 50 }}>{musica.artist}</Text>

        <Text style={{ marginTop: 50 }}>{musica.title}</Text>
        <Text style={{ marginTop: 50 }}>{musica.description}</Text>
      </ScrollView>
    </>
  );
};

export default Detalhes;
