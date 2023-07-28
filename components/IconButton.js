import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function IconButton({ bgHex, title, iconPath, contentHex, borderColor, borderWidth, size }) {
  return (
    <View style={[styles.buttonContainer, { backgroundColor: bgHex, borderColor: borderColor, borderWidth: borderWidth }]}>
      <Text style={[styles.buttonText, { color: contentHex }]}>{title}</Text>
      <MaterialCommunityIcons
        name={iconPath}
        color={contentHex}
        size={size}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 17.5,
    width: 156,
    height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 19,
    marginRight: 7.5
  },
});

export default IconButton;
