import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email || !emailConf || !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    // Substitua o trecho abaixo pelo seu código de cadastro
    // const res = signup(email, senha);

    // Exemplo simulado de código de cadastro
    const res = email === "user@example.com" ? "Usuário já cadastrado" : null;

    if (res) {
      setEmail("");
      setEmailConf("");
      setSenha("");
      setError(res);
      return;
    }

    // Exemplo de alerta para usuário cadastrado com sucesso
    alert("Usuário cadastrado com sucesso!");
    // Navegue para a tela de login após o cadastro bem-sucedido
    // Substitua "Signin" pelo nome da tela desejada
    navigation.navigate("Signin");
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
});
