import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function InputSenha({ setSenha }) {
  const [input, setInput] = useState("");

  const [hidePass, setHidePass] = useState(true);
  setSenha(input);
  return (
    <View style={styles.container}>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua Senha"
          value={input}
          onChangeText={(texto) => setInput(texto)}
          secureTextEntry={hidePass}
        />

        <TouchableOpacity
          style={styles.icon}
          onPress={() => setHidePass(!hidePass)}
        >
          {hidePass ? (
            <Ionicons name="eye" color="#FFF" size={25} />
          ) : (
            <Ionicons name="eye-off" color="#FFF" size={25} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99999,
    right: 50,
    bottom: 5,
  },
});
