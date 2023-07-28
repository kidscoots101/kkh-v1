import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import TopBar from "../components/TopBar";
import TextInputButton from "../components/TextInputButton";
import TextButton from "../components/TextButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

export default function Crisis() {
  const [isBlurred, setIsBlurred] = useState([
    {
      id: "1",
      title: "Fever",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
    {
      id: "2",
      title: "Diarrohea",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
    {
      id: "3",
      title: "Fracture",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
    {
      id: "4",
      title: "Appendicitis",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
    {
      id: "5",
      title: "Sore Throat",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
    {
      id: "6",
      title: "Ligament Tear",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
    {
      id: "7",
      title: "Head-Ache",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
    {
      id: "8",
      title: "Concussion",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur diam est, pharetra sollicitudin dui ac, consequat ultricies est. Proin tempor sed arcu fringilla venenatis. Proin eget hendrerit lorem. Morbi maximus quam a mattis pulvinar. Mauris dignissim metus rhoncus ligula pellentesque, eu eleifend dolor convallis.",
      isBlurred: false,
    },
  ]);
  const handleToggleBlur = (itemId) => {
    setIsBlurred((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, isBlurred: !item.isBlurred } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        width: Dimensions.get("window").width - 10,
      }}
    >
      {item.isBlurred ? (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            width: Dimensions.get("window").width - 20,
            height: Dimensions.get("window").height - 650,
          }}
        >
          {/* <View style={styles.rectangle}>
            <View style={styles.titleview}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => handleToggleBlur(item.id)}>
                <MaterialCommunityIcons
                  name={item.isBlurred ? "eye-off" : "eye"}
                  size={32.5}
                  color="white"
                  style={styles.eyeview}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.descview}>{item.desc}</Text>
            <TextButton
              title="Continue"
              width={390}
              height={45}
              bgHex={"#72A8DA"}
              contentHex={"#fff"}
              borderRadius={12.5}
              fontWeight={"600"}
              textSize={18}
            />
          </View> */}
          <BlurView
            style={styles.absoluteBlur}
            blurType="light"
            intensity={100}
          >
            <View style={styles.blurTitleView}>
              <Text style={styles.blurTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => handleToggleBlur(item.id)}>
                <MaterialCommunityIcons
                  name={item.isBlurred ? "eye-off" : "eye"}
                  size={32.5}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </BlurView>
        </View>
      ) : (
        <View style={styles.rectangle}>
          <View style={styles.titleview}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress={() => handleToggleBlur(item.id)}>
              <MaterialCommunityIcons
                name={item.isBlurred ? "eye-off" : "eye"}
                size={32.5}
                color="white"
                style={styles.eyeview}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.descview}>{item.desc}</Text>
          <TextButton
            title="Continue"
            width="100%"
            height={45}
            bgHex={"#72A8DA"}
            contentHex={"#fff"}
            borderRadius={12.5}
            fontWeight={"600"}
            textSize={18}
          />
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={{ marginTop: 20 }} />
      <TextInputButton title="Weight" unit="kg" />
      <View style={{ marginTop: 20 }} />
      <TopBar />

      <FlatList
        data={isBlurred}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
    marginVertical: 15,
    width: Dimensions.get("window").width,
  },
  rectangle: {
    width: Dimensions.get("window").width - 10,
    marginVertical: 13,
    backgroundColor: "rgb(69, 69, 74)",
    borderRadius: 20,
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "hidden",
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
  title: {
    paddingTop: 5,
    color: "white",
    fontSize: 26,
    fontWeight: "700",
  },
  blurTitle: {
    color: "white",
    fontSize: 35,
    fontWeight: "600",
    marginRight: 10,
  },
  titleview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  blurTitleView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  eyeview: {
    position: "relative",
    left: Dimensions.get("window").width * 0.009,
  },
  descview: {
    fontSize: 16.5,
    fontWeight: "400",
    color: "#fff",
    paddingTop: 10,
    paddingBottom: 17.5,
  },
  absoluteBlur: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: 15,
    borderWidth: 5,
    borderColor: "#6D6D74",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "96%",
  },
});
