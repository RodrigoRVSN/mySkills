import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({ handleNewAddSkill }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={() => handleNewAddSkill()}
    >
      <Text style={styles.buttonText}>ADD</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
