import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  Image,
  Switch
} from "react-native";
import TopBar from "../components/TopBar";

export default function Main() {
  const data = [
    { id: "1", title: "TitleName" },
    { id: "2", title: "TitleName" },
    { id: "3", title: "TitleName" },
    { id: "4", title: "TitleName" },
    { id: "5", title: "TitleName" },
    { id: "6", title: "TitleName" },
    { id: "7", title: "TitleName" },
    { id: "8", title: "TitleName" },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <SafeAreaView style={styles.rectangle}>
      <View style={styles.titleview}>
        <Image
          source={require("../assets/titleside.png")}
          style={styles.titleside}
        ></Image>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </SafeAreaView>
  );
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkMode : styles.lightMode]}>
      <TopBar />
      <Switch
        value={isDarkMode}
        onValueChange={toggleDarkMode}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.listContainer}
      />
       <StatusBar style={isDarkMode ? "light" : "dark"} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(30, 30, 32)",
    alignItems: "center",
    justifyContent: "center",
  },
  searchInput: {
    backgroundColor: "rgb(49, 49, 53)",
    borderRadius: 18,
    width: 350,
    height: 40,
    color: "white",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  listContainer: {
    alignItems: "center",
  },
  lightMode: {
    backgroundColor: "white",
  },
  darkMode: {
    backgroundColor: "rgb(30, 30, 32)",
  },
  rectangle: {
    width: 350,
    height: 50,
    marginVertical: 10,
    backgroundColor: "rgb(69, 69, 74)",
    borderRadius: 10,
    alignItems: "left",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  title: {
    paddingTop: 5,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    paddingLeft: 10,
    flexDirection: "row", // Align the image and text horizontally in a row
    alignItems: "center",
  },
  titleview: {
    flexDirection: "row",
  },
});
