import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

interface ImageViewerProps {
  imgSource: string;
  selectedImage?: string | null;
}

const ImageViewer = ({ imgSource, selectedImage }: ImageViewerProps) => {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  return <Image source={imageSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
