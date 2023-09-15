import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import { UserContext } from "../App";

const BankOnboardingSecond = () => {
  const { userData, setUserData } = useContext(UserContext);
  console.log(userData);
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 27, fontWeight: 600, padding: 20 }}>
        Select The banks
      </Text>
    </SafeAreaView>
  );
};

export default BankOnboardingSecond;

const styles = StyleSheet.create({});
