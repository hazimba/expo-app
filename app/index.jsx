import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/favicon.png";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={[styles.title, { color: "blue" }]}>The Number 1</Text>
      <Text style={{ marginTop: 10 }}>Reading List App</Text>
      <Link href="/about" style={{ marginTop: 20, color: "green" }}>
        Go to About Page
      </Link>
      <Link href="/contact" style={{ marginTop: 20, color: "purple" }}>
        Go to Contact Page
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    marginBottom: 20,
  },
});
