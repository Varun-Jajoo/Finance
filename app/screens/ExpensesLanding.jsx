import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Platform,
} from "react-native";
import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Progress from "react-native-progress";
import { UserContext } from "../App";

const ExpensesLanding = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <View>
      <Pressable
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 60 }}>
          Daily Expenses
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          September 2023
        </Text>
        <Pressable
          style={{
            display: "flex",
            borderRadius: 20,
            borderColor: "black",
            borderWidth: 4,
            width: 320,
            padding: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Left to Spend</Text>
            <Text style={{ marginLeft: 60, fontWeight: "bold" }}>
              Monthly Balance
            </Text>
          </Pressable>

          <Pressable
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 6,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text>
              {userData.leftToSpend === 0
                ? userData.salary - userData.savings
                : userData.leftToSpend}
            </Text>
            <Text style={{ marginLeft: 160 }}>
              {userData.salary - userData.savings}
            </Text>
          </Pressable>

          <Progress.Bar
            borderColor="transparent"
            animationType="spring"
            unfilledColor="white"
            color="red"
            progress={
              (userData.salary - userData.savings - userData.leftToSpend) /
              userData.salary
            }
            width={255}
            height={13}
            borderRadius={20}
            borderWidth={-1}
            style={{ marginTop: 20, elevation: 10 }}
          />
        </Pressable>
        <Pressable></Pressable>
        <Pressable
          style={styles.savetop}
          onPress={() => navigation.navigate("Daily")}
        >
          <Image
            source={require("../assets/coin_9590150.png")}
            style={{ height: 60, width: 60, marginRight: 10 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                color: "#1b1b1b",
                fontSize: 20,
                marginRight: 10,
                textAlign: "left",
              }}
            >
              Add an Expense
            </Text>
            <Text
              style={{ textAlign: "center", color: "#1b1b1b", marginTop: 5 }}
            >
              We will keep a daily report
            </Text>
          </View>
        </Pressable>
        <Pressable style={styles.savetop}>
          <Image
            source={require("../assets/coin_9590150.png")}
            style={{ height: 60, width: 60, marginRight: 10 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                color: "#1b1b1b",
                //fontWeight: "700",
                fontSize: 20,
                marginRight: 10,
                textAlign: "left",
                // fontFamily:"Poppins",
              }}
            >
              Spending Report
            </Text>
            <Text
              style={{ textAlign: "center", color: "#1b1b1b", marginTop: 5 }}
            >
              Adjust your Expense Anytime
            </Text>
          </View>
        </Pressable>
      </Pressable>
    </View>
  );
};

export default ExpensesLanding;

const styles = StyleSheet.create({
  savetop: {
    height: 100,
    width: "90%",
    backgroundColor: "#98bc62",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,

    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 20,
      },
    }),
  },
});
