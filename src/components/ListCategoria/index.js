import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "../Card";

const ListaCategoria = ({ musicas, setMusicas }) => {
  return (
    <FlatList
      data={musicas}
      // renderItem retorna um objeto
      renderItem={({ item }) => (
        <Card musica={item} listaMusica={musicas} setMusicas={setMusicas} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListaCategoria;
