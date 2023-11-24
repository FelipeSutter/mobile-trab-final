import React, { useContext, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import InputSenha from "../../components/inputSenha";
import Button from "../../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "expo-blur";
import { Video } from "expo-av";
import BackgroundVideo from "../../../assets/womanMusic2.mp4";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });
  const [status, setStatus] = useState({});

  const handleSignup = async () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os nomes não são iguais");
      return;
    }

    await AsyncStorage.setItem("@emailUser", email);
    await AsyncStorage.setItem("@passUser", senha);

    alert("Usuário cadastrado com sucesso!");
    navigation.navigate("Signin");
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
      <Text style={styles.titleSingup}>Cadastre-se</Text>
      <BlurView tint="light" intensity={50} style={styles.content}>
        <Input
          type="email"
          placeholder="Digite seu Nome"
          value={email}
          onChange={(value) => setEmail(value)}
        />
        <Input
          type="email"
          placeholder="Confirme seu Nome"
          value={emailConf}
          onChange={(value) => setEmailConf(value)}
        />
        <InputSenha setSenha={setSenha} />

        <Text style={styles.labelError}>{error}</Text>
        <Button
          disabled={!email || !emailConf || !senha}
          text="Inscrever-se"
          onPress={handleSignup}
        />
        <Text style={styles.labelSignin}>
          Já tem uma conta?
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text style={styles.strong}>Entre</Text>
          </TouchableOpacity>
        </Text>
      </BlurView>
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
    overflow: "hidden",
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
    color: "#c9c8c4",
    marginTop: 10,
    textAlign: "center",
  },
  strong: {
    color: "#383540", // Cor do link
    textDecorationLine: "underline",
    marginLeft: 5,
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

  titleSingup: {
    fontSize: 40,
    color: "#e2e2e2",
    fontFamily: "Raleway_700Bold",
  },
});
