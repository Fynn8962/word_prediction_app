import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>About This App</Text>
        <Text style={styles.text}>
          This app speeds up typing by predicting and completing sentences.
          It uses word prediction technology to suggest the most
          likely words, helping you write faster and with less effort.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  contentContainer: {
    maxWidth: 320,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    color: "#d1d5db",
    textAlign: "center",
    lineHeight: 24,
    letterSpacing: 0.3,
  },
});
