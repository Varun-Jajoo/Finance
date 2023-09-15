import React, { useState, useContext } from "react";
import {
  ScrollView,
  View,
  Text,
  Pressable,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../App";

const Education = () => {
  const navigation = useNavigation();
  const { userData, setUserData } = useContext(UserContext);
  const elevationStyle = Platform.select({
    ios: {
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
    android: {
      elevation: 10, // This sets the elevation for Android
    },
    default: {
      // For other platforms, you can set some default styles
      // or leave it empty.
    },
  });

  return (
    <ScrollView
      bounces={false}
      style={{
        display: "flex",
        backgroundColor: "white",
        position: "relative",
      }}
    >
      <Image
        source={require("../assets/school.png")}
        style={{
          position: "absolute",
          height: "25%",
          width: "100%",
          top: 0,
          left: 0,
          backgroundColor: "#F1C93B",
        }}
      />

      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: "37%",
        }}
      >
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#98bc62",
            height: 100,
            width: 160,
            borderRadius: 20,
            ...elevationStyle, // Apply elevationStyle here
          }}
        >
          <Image
            source={require("../assets/silver-medal_3188893.png")}
            style={{ height: 60, width: 60, marginRight: 15 }}
          />
          <View>
            <Text>Rank</Text>
          </View>
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#98bc62",
            height: 100,
            width: 160,
            borderRadius: 20,
            ...elevationStyle, // Apply elevationStyle here
          }}
        >
          <Image
            source={require("../assets/coin_9590150.png")}
            style={{ height: 60, width: 60, marginLeft: 10 }}
          />
          <View>
            <Text style={{ textAlign: "center", marginRight: 10 }}>
              {" "}
              {userData.points} Points
            </Text>
          </View>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Text
          style={{
            //fontWeight: "bold",
            color: "black",
            fontSize: 20,
            paddingTop: 18,
          }}
        >
          Courses
        </Text>
        <Text
          style={{
            //fontWeight: 600,
            fontSize: 15,
            textDecorationLine: "underline",
            color: "grey",
            paddingTop: 20,
            marginLeft: 120,
          }}
        >
          See all
        </Text>
      </View>
      <View
        style={{
          gap: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "40%",
        }}
      >
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
            width: "90%",
            backgroundColor: "#F1C93B",
            borderRadius: 35,
            ...elevationStyle, // Apply elevationStyle here
          }}
          onPress={() => navigation.navigate("Popup")}
        >
          <Image
            source={require("../assets/3d-calculator_10473465.png")}
            style={{ height: 80, width: 80 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginRight: 20,
                fontFamily: "Poppins",
                //fontWeight: 200,
              }}
            >
              Basics of Finance
            </Text>
            <Progress.Bar
              borderColor="transparent"
              unfilledColor="white"
              color="rgb(59,198,84)"
              progress={0.3}
              width={150}
              height={10}
              borderRadius={20}
              style={{ marginTop: 20 }}
            />
          </View>
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
            width: "90%",
            backgroundColor: "#F1C93B",
            borderRadius: 35,
            ...elevationStyle, // Apply elevationStyle here
          }}
        >
          <Image
            source={require("../assets/notification_6206466.png")}
            style={{ height: 80, width: 80 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",

                fontSize: 20,
                marginLeft: 16,
                textAlign: "left",
                fontFamily: "Poppins",
                //fontWeight: 100,
              }}
            >
              Scam Prevention
            </Text>
            <Progress.Bar
              borderColor="transparent"
              unfilledColor="white"
              color="rgb(59,198,84)"
              progress={0.3}
              width={150}
              height={10}
              borderRadius={20}
              style={{ marginTop: 20 }}
            />
          </View>
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
            width: "90%",
            backgroundColor: "#F1C93B",
            borderRadius: 35,
            ...elevationStyle,
          }}
        >
          <Image
            source={require("../assets/piggy-bank_1511168.png")}
            style={{ height: 80, width: 80, margin: 8 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",

                fontSize: 20,
                fontFamily: "Poppins",
                //fontWeight: 200,
              }}
            >
              Entreprenuship Guide
            </Text>
            <Progress.Bar
              borderColor="transparent"
              unfilledColor="white"
              color="rgb(59,198,84)"
              progress={0.3}
              width={150}
              height={10}
              borderRadius={20}
              style={{ marginTop: 20, marginRight: 30 }}
            />
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Education;

const styles = StyleSheet.create({});
