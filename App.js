import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import CalcScreen from "./screens/CalcScreen";
import Main from "./screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import Crisis from "./screens/Crisis";
import { Image, Dimensions, PixelRatio } from "react-native";
import { DarkModeProvider } from "./components/DarkModeContext";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: "rgba(34,36,40,1)",
          position: "absolute",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Calculator"
        component={CalcScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/calculator.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reference"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/reference.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Crisis"
        component={Crisis}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require("./assets/crisis.png")}
              style={{ width: 25, height: 25 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
    <DarkModeProvider>
      <StatusBar style="light" />
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      </DarkModeProvider>
    </>
  );
}
