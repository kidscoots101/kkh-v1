import React from "react";
import {
  View,
  TextInput,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

function TopBar() {
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

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      <View style={dynamicStyles.settingsView}>
        <Image
          source={require("../assets/setting.png")}
          style={dynamicStyles.settingIcon}
        />
      </View>
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
  );
}

export default TopBar;
