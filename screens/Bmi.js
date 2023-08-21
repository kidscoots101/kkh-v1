import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Platform,useState
} from "react-native";
import TextInputButton from "../components/TextInputButton";
import TextButton from "../components/TextButton";
import IconButton from "../components/IconButton";
import SegmentedControl from "../components/SegmentedControl";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Bmi() {
  return (
    <SafeAreaView style={styles.treeTop}>
      <StatusBar style="light" />
      <View style={styles.contentContainer}>
        <View style={styles.mainContent}>
          <View style={styles.patientAgeCol}>
            <TextInputButton
              title="Patient Age"
              unit=""
              width={(Dimensions.get("window").width * 125) / 390}
              height={(Dimensions.get("window").height * 55) / 844}
              backgroundColor={"#313135"}
            />
          </View>
          <View style={styles.segmentedControlRow}>
            <SegmentedControl
              width={(Dimensions.get("window").width * 260) / 390}
              height={(Dimensions.get("window").height * 35) / 844}
              titleArray={["Male", "Female"]}
              fontSize={(Dimensions.get("window").height / 844) * 16}
              color1={"#45454A"}
              color2={"#313135"}
            />
          </View>
          <View style={styles.inputRow}>
            <View style={styles.detailsColumn}>
              <TextInputButton
                title="Height"
                unit="cm"
                width={(Dimensions.get("window").width * 120) / 390}
                height={(Dimensions.get("window").height * 55) / 844}
                backgroundColor={"#313135"}
                // value={height}
              />
              <View style={{ marginVertical: 15 }} />
              <TextInputButton
                title="Weight"
                unit="kg"
                width={(Dimensions.get("window").width * 120) / 390}
                height={(Dimensions.get("window").height * 55) / 844}
                backgroundColor={"#313135"}
                // value={weight}
              />
            </View>
            <View style={styles.bmiRow}>
              <MaterialCommunityIcons
                name={"arrow-right"}
                size={35}
                color="#818188"
                style={{ paddingTop: 23, paddingRight: 10 }}
              />
              <TextInputButton
                title="BMI"
                width={(Dimensions.get("window").width * 125) / 390}
                height={(Dimensions.get("window").height * 55) / 844}
                backgroundColor={"#45454A"}
              />
            </View>
          </View>
          <View style={styles.shareRow}>
            <IconButton
              bgHex="#rgb(30, 30, 32)"
              title="Share"
              iconPath="share-variant"
              contentHex="#72A8DA"
              borderColor={"#72A8DA"}
              borderWidth={1.25}
              size={(Dimensions.get("window").height / 844) * 25}
              textSize={
                Platform.isPad
                  ? Dimensions.get("window").height * 0.04739336 * 0.45
                  : 19
              }
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.selectionRow}>
          <TouchableOpacity>
            <TextButton
              title="Drug"
              width={(Dimensions.get("window").width * 156) / 390}
              height={(Dimensions.get("window").height * 40) / 844}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={(Dimensions.get("window").height / 844) * 18}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Bmi")}>
            <TextButton
              title="BMI"
              width={(Dimensions.get("window").width * 156) / 390}
              height={(Dimensions.get("window").height * 40) / 844}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={(Dimensions.get("window").height / 844) * 18}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  treeTop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgb(30, 30, 32)",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 30,
    height: Dimensions.get("window").height * 0.75,
    width: Dimensions.get("window").width * 0.95,
    paddingBottom: 30,
  },
  mainContent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  patientAgeCol: {
    flexDirection: "column",
    alignItems: "center",
  },
  segmentedControlRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    marginTop: 25,
  },
  detailsColumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 15,
  },
  bmiRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  shareRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  divider: {
    height: 1,
    width: Dimensions.get("window").width - 20,
    borderWidth: 1,
    borderColor: "#6D6D74",
    marginVertical: 35,
  },
  selectionRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});