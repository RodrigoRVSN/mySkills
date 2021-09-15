import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
  input: {
    backgroundColor: "#1F1E25",
    color: "#FFF",
    fontSize: 18,
    marginTop: 30,
    padding: Platform.OS === "ios" ? 20 : 15,
    borderRadius: 7,
  },
  greetings: {
    color: "#FFF",
  },
});
