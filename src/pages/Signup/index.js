import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Video} from "expo-av"
import BackgroundVideo from "../../../assets/womanMusic2.mp4"

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState({})

  const handleSignup = async () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    await AsyncStorage.setItem("@Async:emailUser", email);
    await AsyncStorage.setItem("@Async:passUser", senha);

    // if (res) {
    //   setEmail("");
    //   setEmailConf("");
    //   setSenha("");
    //   setError(res);
    //   return;
    // }

    alert("Usuário cadastrado com sucesso!");
    navigation.navigate("Signin");
  };

  return (
    <View style={styles.container}>
      <Video source={BackgroundVideo}
            shouldPlay
            resizeMode="cover"
            isLopping={true}
            onPlaybackStatusUpdate={setStatus}
            style={styles.video}
      />
      <View style={styles.content}>
        <Input
          type="email"
          placeholder="Digite seu E-mail"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input
          type="email"
          placeholder="Confirme seu E-mail"
          value={emailConf}
          onChange={(value) => setEmailConf(value)}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(value) => setSenha(value)}
        />
        <Text style={styles.labelError}>{error}</Text>
        <Button
          disabled={!email || !emailConf || !senha}
          text="Inscrever-se"
          onPress={handleSignup}
        />
        <Text style={styles.labelSignin}>
          Já tem uma conta?{" "}
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.strong}>Entre</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Signup;

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
  labelError: {
    fontSize: 14,
    color: "red",
  },
  labelSignin: {
    fontSize: 16,
    color: "#676767",
    marginTop: 10,
    textAlign: "center",
  },
  strong: {
    color: "#007bff", // Cor do link
    textDecorationLine: "underline",
  },
  video:{
    flex: 1,
    width:"100%",
    height:"100%",
    position:"absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
});
