import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../App";

const BankOnboarding = () => {
  const { userData, setUserData } = useContext(UserContext);
  return (
    <SafeAreaView>
      <Text>Welcome ,{userData.name}</Text>
    </SafeAreaView>
  );
};

export default BankOnboarding;

const styles = StyleSheet.create({});
