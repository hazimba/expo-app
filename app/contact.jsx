import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.description}>For inquiries, please email us at</Text>
      <Link href="/" style={{ marginTop: 20, color: "blue" }}>
        Back to Home
      </Link>
    </View>
  );
};
export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
