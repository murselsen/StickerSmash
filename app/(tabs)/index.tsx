import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useRef, useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { captureRef } from "react-native-view-shot";

import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";

// Placeholder image source
const PlaceholderImage = require("@/assets/images/background-image.png");

const IndexScreen = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  const screenShotImageRef = useRef<View>(null);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);

  useEffect(() => {
    if (!permissionResponse?.granted) {
      requestPermission();
    }
  }, [permissionResponse, requestPermission]);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    console.log("ImagePicker result: ", result);
    if (!result.canceled) {
      console.log("Selected image URI: ", result.assets[0].uri);
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setSelectedImage(null);
    setPickedEmoji(undefined);
  };
  const onAddSticker = () => {
    setIsModalVisible(true);
  };
  const onSelectSticker = (emoji: ImageSourcePropType) => {
    console.log("Selected emoji: ", emoji);
    setPickedEmoji(emoji);
    onModalClose();
  };
  const onModalClose = () => {
    setIsModalVisible(false);
  };
  const onSaveImageAsync = async () => {
    try {
      const localImageUri = await captureRef(screenShotImageRef, {
        //  format: 'png',
        height: 440,
        quality: 1,
      });
      const status = await MediaLibrary.saveToLibraryAsync(localImageUri);
      console.log("Save status: ", status);
      console.log("Local image URI: ", localImageUri);
      if (localImageUri) {
        alert("Saved to gallery!");
        setPickedEmoji(undefined);
      }
    } catch (error) {
      alert("Failed to save image. Please try again.");
      console.error("Error saving image: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View ref={screenShotImageRef} collapsable={false}>
          <ImageViewer
            imgSource={PlaceholderImage}
            selectedImage={selectedImage}
          />
          {pickedEmoji && (
            <EmojiSticker stickerSource={pickedEmoji} imageSize={40} />
          )}
        </View>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon="save-alt"
              label="Save"
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button
            label="Use this photo"
            onPress={() => setShowAppOptions(true)}
          />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={onSelectSticker} onCloseModal={onModalClose} />
      </EmojiPicker>
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
    // backgroundColor: "red",
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default IndexScreen;
