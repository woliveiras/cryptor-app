import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  output: {
    marginTop: 10,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "lightblue",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  actionButtonText: {
    alignSelf: "center",
  },
  clipboardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  clipboardButton: {
    backgroundColor: "lightgreen",
    borderWidth: 1,
    padding: 10,
    width: "48%",
  },
});
