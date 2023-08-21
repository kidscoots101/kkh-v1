import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function SegmentedControl({
  titleArray,
  width,
  height,
  fontSize,
  color1,
  color2,
}) {
  const [segmentIndex, setSegIndex] = useState(0);
  return (
    <View style={[styles.content, { width: width, height: height }]}>
      <TouchableOpacity
        style={[
          styles.container1,
          { backgroundColor: segmentIndex === 0 ? color2 : color1 },
        ]}
        activeOpacity={0.8}
        onPress={() => setSegIndex(1)}
      >
        <Text style={[styles.segmentStyle, { fontSize: fontSize }]}>
          {titleArray[0]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.container2,
          { backgroundColor: segmentIndex === 0 ? color1 : color2 },
        ]}
        activeOpacity={0.8}
        onPress={() => setSegIndex(0)}
      >
        <Text style={[styles.segmentStyle, { fontSize: fontSize }]}>
          {titleArray[1]}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    marginTop: 30,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    width: "50%",
    height: "100%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    width: "50%",
    height: "100%",
  },
  segmentStyle: {
    fontWeight: "600",
    color: "#fff",
  },
});

export default SegmentedControl;