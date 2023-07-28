import React, { useRef } from "react";
import { View, StyleSheet, Text, TextInput, TouchableWithoutFeedback, Keyboard } from "react-native";

function TextInputButton({ title, unit }) {
  const inputRef = useRef(null);

  const handleTextInputBlur = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTextInputBlur}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttonRow}>
          <TextInput
            ref={inputRef}
            style={styles.inputField}
            placeholder="0.0"
            placeholderTextColor="#818188"
            keyboardType="numeric"
            returnKeyType="done" 
            onSubmitEditing={handleTextInputBlur} 
          />
          <Text style={styles.unit}>{unit}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  inputField: {
    backgroundColor: "#313135",
    color: "white",
    borderRadius: 13,
    width: 144,
    height: 56,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: "500",
    marginRight: 7.5,
  },
  unit: {
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
});

export default TextInputButton;
