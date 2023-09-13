import React, { createContext, useContext, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { useFonts } from "expo-font";
import { ModalPortal } from "react-native-modals";

export const UserContext = createContext();

export default function App() {
  const [userData, setUserData] = useState({
    name: "Shreyans",
    age: 18,
    phoneNumber: "983838283",
    language: "English",
    dependents: "8",
    goals: [],
    spend: [],
    salary: "",
    savings: "",
    city:"",
    form:true
  });
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <StackNavigator />
      <ModalPortal />
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
