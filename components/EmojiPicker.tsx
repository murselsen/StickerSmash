import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface EmojiPickerProps {
  isVisible: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const EmojiPicker = ({ isVisible, children, onClose }: EmojiPickerProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.modalContainer}>
        {/* Header */}
        <View style={styles.modalHeader}>
          <Text style={styles.title}>Choose a sticker</Text>
          <Pressable onPress={onClose}>
            <MaterialIcons name="close" size={24} color="#fff" />
          </Pressable>
        </View>
        {/* Content */}
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: "25%",
    width: "100%",
    backgroundColor: "#25292e",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: "absolute",
    bottom: 0,
  },
  modalHeader: {
    flexDirection: "row",
    height: "20%",
    backgroundColor: "#464C55",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    color: "#fff",
    fontSize: 16,
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
});

export default EmojiPicker;
