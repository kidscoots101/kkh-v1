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
  Image,
  TextInput,
  useWindowDimensions,
} from "react-native";
import TopBar from "../components/TopBar";
import TextInputButton from "../components/TextInputButton";
import TextButton from "../components/TextButton";
import IconButton from "../components/IconButton";
import Bmi from "./Bmi";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./Settings";
import { useDarkMode } from "../components/DarkModeContext";

function CalcScreen({ navigation }) {
  // Reference dimension : iPhone 14
  // console.log(Dimensions.get("window").width);  390 
  // console.log(Dimensions.get("window").height);  844
  const windowWidth = useWindowDimensions().width;

  const dynamicStyles = StyleSheet.create({
    settingsView: {
      height: windowWidth * 0.1,
      width: windowWidth * 0.1,
      borderRadius: (windowWidth * 0.1) / 2,
      overflow: "hidden",
      backgroundColor: "rgb(49, 49, 53)",
      justifyContent: "center",
      alignItems: "center",
      // left: 5,
    },
    settingIcon: {
      height: windowWidth * 0.055,
      width: windowWidth * 0.055,
      tintColor: "#EAEAEB",
    },
    searchContainer: {
      backgroundColor: "rgb(49, 49, 53)",
      borderRadius: windowWidth * 0.05,
      marginHorizontal: 7.5,
      width: windowWidth * 0.85,
      height: windowWidth * 0.1,
      flexDirection: "row",
      overflow: "hidden",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingHorizontal: windowWidth * 0.035,
    },
    searchIcon: {
      height: windowWidth * 0.04,
      width: windowWidth * 0.04,
      tintColor: "#818188",
    },
    searchInput: {
      paddingHorizontal: windowWidth * 0.03,
      fontWeight: "600",
      fontSize: windowWidth * 0.045,
      color: "white",
    },
  });
  const { isDarkMode } = useDarkMode();
  
  return (
    <SafeAreaView style={styles.treeTop}>
        <Text style={{fontSize: 40, fontWeight: 'bold', color: "white", padding: 20, alignSelf: 'flex-start'}}>Calculator</Text>
       <View style={{ flexDirection: "row", justifyContent: "center" }}>
        
      <TouchableOpacity style={dynamicStyles.settingsView} onPress={() => navigation.navigate("Settings")}>
        <Image
          source={require("../assets/setting.png")}
          style={dynamicStyles.settingIcon}
        />
      </TouchableOpacity>
      <View style={dynamicStyles.searchContainer}>
        <Image
          source={require("../assets/search.png")}
          style={dynamicStyles.searchIcon}
        />
        <TextInput
          style={dynamicStyles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#818188"
        />
      </View>
    </View>
      <StatusBar style="light" />
      <View style={styles.contentContainer}>
        <View style={styles.buttonRow}>
          <View style={styles.buttonColumn1}>
            <TextInputButton
              title="Weight"
              unit="kg"
              backgroundColor={"#313135"}
              width={Dimensions.get("window").width * 0.3333333}
              height={Dimensions.get("window").height * 0.06635071}
            />
          </View>
          <View style={styles.buttonColumn2}>
            <Text style={styles.select}>
              Select <Text style={styles.one}>one</Text>
            </Text>
            <TextButton
              title="Cardiac"
              width={Dimensions.get("window").width * 0.46153846}
              height={Dimensions.get("window").height * 0.06812796}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={
                Dimensions.get("window").height * 0.06812796 * 0.30434783
              }
              fontWeight={"700"}
              textSize={
                Platform.isPad
                  ? Dimensions.get("window").width * 0.46153846 * 0.08
                  : Dimensions.get("window").width * 0.46153846 * 0.10555556
              }
            />
            <TextButton
              title="Anaesthesia"
              width={Dimensions.get("window").width * 0.46153846}
              height={Dimensions.get("window").height * 0.06812796}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={
                Dimensions.get("window").height * 0.06812796 * 0.30434783
              }
              fontWeight={"700"}
              textSize={
                Platform.isPad
                  ? Dimensions.get("window").width * 0.46153846 * 0.08
                  : Dimensions.get("window").width * 0.46153846 * 0.10555556
              }
            />
            <TextButton
              title="Scoliosis"
              width={Dimensions.get("window").width * 0.46153846}
              height={Dimensions.get("window").height * 0.06812796}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={
                Dimensions.get("window").height * 0.06812796 * 0.30434783
              }
              fontWeight={"700"}
              textSize={
                Platform.isPad
                  ? Dimensions.get("window").width * 0.46153846 * 0.08
                  : Dimensions.get("window").width * 0.46153846 * 0.10555556
              }
            />
            <TextButton
              title="Common"
              width={Dimensions.get("window").width * 0.46153846}
              height={Dimensions.get("window").height * 0.06812796}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={
                Dimensions.get("window").height * 0.06812796 * 0.30434783
              }
              fontWeight={"700"}
              textSize={
                Platform.isPad
                  ? Dimensions.get("window").width * 0.46153846 * 0.08
                  : Dimensions.get("window").width * 0.46153846 * 0.10555556
              }
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
            size={(Dimensions.get("window").height / 844) * 25}
            textSize={
              Platform.isPad
                ? Dimensions.get("window").height * 0.04739336 * 0.45
                : 19
            }
          />
          <IconButton
            bgHex="#rgb(30, 30, 32)"
            title="Share"
            iconPath="share-variant"
            contentHex="#72A8DA"
            borderColor={"#72A8DA"}
            borderWidth={1.25}
            size={(Dimensions.get("window").height / 844) * 22.5}
            textSize={
              Platform.isPad
                ? Dimensions.get("window").height * 0.04739336 * 0.45
                : 19
            }
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.selectionRow}>
          <TouchableOpacity>
            <TextButton
              title="Drug"
              width={Dimensions.get("window").width * 0.4}
              height={Dimensions.get("window").height * 0.04739336}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={
                Dimensions.get("window").height * 0.04739336 * 0.94594595
              }
              fontWeight={"700"}
              textSize={
                Platform.isPad
                  ? Dimensions.get("window").height * 0.04739336 * 0.45
                  : 19
              }
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Bmi")}>
            <TextButton
              title="BMI"
              width={Dimensions.get("window").width * 0.4}
              height={Dimensions.get("window").height * 0.04739336}
              bgHex="#313135"
              contentHex={"white"}
              borderRadius={
                Dimensions.get("window").height * 0.04739336 * 0.94594595
              }
              fontWeight={"700"}
              textSize={
                Platform.isPad
                  ? Dimensions.get("window").height * 0.04739336 * 0.45
                  : 19
              }
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
              {/* <TopBar /> */}
            </View>
          ),
          headerStyle: {
            backgroundColor: "rgb(30, 30, 32)", // Set the background color of the header
          },
          headerTintColor: "white", // Set the color of the back button and title text
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
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
              {/* <TopBar /> */}
            </View>
          ),
          headerStyle: {
            backgroundColor: "rgb(30, 30, 32)",
          },
          headerTintColor: "white", 
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
    paddingHorizontal: Platform.isPad ? 10 : 5,
    height: Dimensions.get("window").height * 0.7582984,
    width: Platform.isPad
      ? Dimensions.get("window").width
      : Dimensions.get("window").width * 0.925,
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