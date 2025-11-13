import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      <Text style={styles.description}>
        This is a sample Expo app demonstrating the use of Expo Router for
        navigation and deep linking.
      </Text>
      <Link href="/" style={{ marginTop: 20, color: "blue" }}>
        Back to Home
      </Link>
    </View>
  );
};
export default About;

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
