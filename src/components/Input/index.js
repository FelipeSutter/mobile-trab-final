import React from "react";
import PropTypes from "prop-types";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ type, placeholder, value, onChange, onBlur }) => {
  const inputStyles =
    type === "email" ? styles.emailInput : styles.defaultInput;

  return (
    <TextInput
      onBlur={onBlur}
      value={value}
      onChangeText={onChange}
      keyboardType={type === "email" ? "email-address" : "default"}
      placeholder={placeholder}
      style={[styles.input, inputStyles]}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  defaultInput: {
    // Estilos específicos para o tipo de input padrão
  },
  emailInput: {
    // Estilos específicos para o tipo de input de email
  },
});

export default Input;
