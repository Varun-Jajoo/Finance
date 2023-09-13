import React, { createContext, useContext, useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./StackNavigator";
import { useFonts } from "expo-font";

export const UserContext = createContext();

export default function App() {
  const [userData, setUserData] = useState({
    name: "",
    age: 0,
    phoneNumber: "",
    language: "",
    dependents: "",
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
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({});
