import { StyleSheet, Text, View, Image } from "react-native";
import Logo from "../assets/favicon.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={[styles.title, { color: "blue" }]}>The Number 1</Text>
      <Text style={{ marginTop: 10 }}>Reading List App</Text>
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
