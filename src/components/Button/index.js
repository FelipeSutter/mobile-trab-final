import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress, type = "button", disabled }) => {
  const buttonStyles = disabled ? styles.disabledButton : styles.enabledButton;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  enabledButton: {
    backgroundColor: "#6141AC",
  },
  disabledButton: {
    backgroundColor: "#DCDCDC",
  },
  buttonText: {
    color: "#fff", // Cor do texto dentro do botão
  },
});

export default Button;
