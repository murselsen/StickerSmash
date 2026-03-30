import { Image } from "expo-image";
import React from "react";
import { StyleSheet } from "react-native";

interface ImageViewerProps {
  imgSource: string;
}

const ImageViewer = ({ imgSource }: ImageViewerProps) => {
  return <Image source={imgSource} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default ImageViewer;
