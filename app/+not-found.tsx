import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View style={styles.container}>
        <Text style={styles.text}>404 - Not Found</Text>
        <Link href={"/"} style={styles.link}>
          Go back to Home
        </Link>
      </View>
    </>
  );
};

// Styles for the NotFoundScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f00c32",
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
    // textDecorationLine: "underline",
  },
});

export default NotFoundScreen;
