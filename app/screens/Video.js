import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { UserContext } from "../App";

const Video = () => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 30, fontWeight: 700 }}>
          Video Tutorials
        </Text>
        <Text style={{ textAlign: "center", fontSize: 15, paddingTop: 20 }}>
          Imporove you knowledge by learning the things that went wrong during
          previous Level
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Video;

const styles = StyleSheet.create({});
