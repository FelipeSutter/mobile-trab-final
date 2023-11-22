import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const verifyEmail = await AsyncStorage.getItem("@Async:emailUser");
    const verifySenha = await AsyncStorage.getItem("@Async:passUser");

    console.log({ verifyEmail });
    console.log({ verifySenha });

    if (verifyEmail != email || verifySenha != senha) {
      setEmail("");
      setSenha("");
      setError("ERRADO"); /* TODO trocar mensagem */
      return;
    }

    onLogin();
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(value) => setSenha(value)}
        />
        <Text style={styles.labelError}>{error}</Text>
        <Button
          disabled={!email || !senha}
          text="Entrar"
          onPress={() => handleLogin()}
        />
        <Text style={styles.labelSignup}>
          Não tem uma conta?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.strong}>Registre-se</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff", // Cor de fundo
  },
  content: {
    padding: 20,
    width: "100%",
    maxWidth: 350,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#676767",
  },
  labelSignup: {
    fontSize: 16,
    color: "#676767",
  },
  labelError: {
    fontSize: 14,
    color: "red",
  },
  strong: {
    color: "#676767",
  },
});
