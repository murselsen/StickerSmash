import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href={"/"} style={styles.link}>
        Go to Home Screen
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    fontSize: 20,
    color: "white",
  },
  link: {
    marginTop: 20,
    color: "gray",
    lineHeight: 10,
  },
});

export default AboutScreen;
