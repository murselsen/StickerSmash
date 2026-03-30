import * as ImagePicker from "expo-image-picker";
import { StyleSheet, View } from "react-native";
// Compoonents
import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
// Placeholder image source
const PlaceholderImage = require("@/assets/images/background-image.png");

const IndexScreen = () => {
  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    console.log("ImagePicker result: ", result);
    if (!result.canceled) {
      console.log("Selected image URI: ", result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

export default IndexScreen;
