import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "../Card";

const ListaCategoria = ({ musicas }) => {
  return (
    <FlatList
      data={musicas}
      // renderItem retorna um objeto
      renderItem={({ item }) => <Card musica={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ListaCategoria;
