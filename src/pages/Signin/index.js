import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Video } from "expo-av";
import LogoImage from "../../../assets/logoApp.png";
import BackgroundVideo from "../../../assets/womanMusic22.mp4";
import { BlurView } from "expo-blur";

const Signin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const [status, setStatus] = useState({});

  const handleLogin = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const verifyEmail = await AsyncStorage.getItem("@emailUser");
    const verifySenha = await AsyncStorage.getItem("@passUser");

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
      <Video
        source={BackgroundVideo}
        shouldPlay
        resizeMode="cover"
        isLooping={true}
        onPlaybackStatusUpdate={setStatus}
        style={styles.video}
      />

      <Image source={LogoImage} style={styles.logo} />

      <BlurView tint="light" intensity={50} style={styles.content}>
        <Input
          type="email"
          placeholder="Digite seu Nome"
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
        <Text style={styles.labelSignup}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.strong}>Registre-se</Text>
        </TouchableOpacity>
      </BlurView>
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
    overflow: "hidden",
    shadowColor: "#000",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
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
    color: "black",
    textAlign: "center",
  },
  labelError: {
    fontSize: 14,
    color: "red",
  },
  strong: {
    color: "black",
    textAlign: "center",
  },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 100,
  },
});
