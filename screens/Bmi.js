import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import TopBar from "../components/TopBar";
import TextInputButton from "../components/TextInputButton";

export default function Bmi() {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar style="light" />

      <TopBar />
      <View style={{ marginTop: 20 }} />
      <TextInputButton title="Weight" unit="kg" />
      <View style={{ marginTop: 10 }} />
      {/* <FlatList
        data={isBlurred}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      /> */}
      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(30, 30, 32)",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
});
