import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import TopBar from "../components/TopBar";
import TextInputButton from "../components/TextInputButton";
import TextButton from "../components/TextButton";
import IconButton from "../components/IconButton";
import Bmi from "./Bmi";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function CalcScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.treeTop}>
      <TopBar />
      <StatusBar style="light" />
      <View style={styles.contentContainer}>
        <View style={styles.buttonRow}>
          <View style={styles.buttonColumn1}>
            <TextInputButton title="Weight" unit="kg" />
          </View>
          <View style={styles.buttonColumn2}>
            <Text style={styles.select}>
              Select <Text style={styles.one}>one</Text>
            </Text>
            <TextButton
              title="Cardiac"
              width={180}
              height={57.5}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={19}
            />
            <TextButton
              title="Anaesthesia"
              width={180}
              height={57.5}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={19}
            />
            <TextButton
              title="Scoliosis"
              width={180}
              height={57.5}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={19}
            />
            <TextButton
              title="Common"
              width={180}
              height={57.5}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={19}
            />
          </View>
        </View>
        <View style={styles.actionRow}>
          <IconButton
            bgHex="#72A8DA"
            title="View"
            iconPath="folder-outline"
            contentHex="white"
            borderColor={"rgb(30, 30, 32)"}
            borderWidth={0}
            size={25}
          />
          <IconButton
            bgHex="#rgb(30, 30, 32)"
            title="Share"
            iconPath="share-variant"
            contentHex="#72A8DA"
            borderColor={"#72A8DA"}
            borderWidth={1.25}
            size={25}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.selectionRow}>
          <TouchableOpacity>
            <TextButton
              title="Drug"
              width={156}
              height={40}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={19}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Bmi")}>
            <TextButton
              title="BMI"
              width={156}
              height={40}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={17.5}
              fontWeight={"700"}
              textSize={19}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Calc"
        component={CalcScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bmi"
        component={Bmi}
        options={{
          headerTitle: () => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StatusBar style="light" />
              <TopBar />
            </View>
          ),
          headerStyle: {
            backgroundColor: "rgb(30, 30, 32)", // Set the background color of the header
          },
          headerTintColor: "white", // Set the color of the back button and title text
        }}
      />
    </Stack.Navigator>
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
    marginVertical: 20,
    paddingHorizontal: 5,
    height: Dimensions.get("window").height * 0.7582984,
    width: Dimensions.get("window").width * 0.925,
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonColumn1: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  buttonColumn2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  select: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  one: {
    color: "#72A8DA",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 15,
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

export default App;
