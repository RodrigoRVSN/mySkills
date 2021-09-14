import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Skillcard({ skill, index }) {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.8}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E25",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
