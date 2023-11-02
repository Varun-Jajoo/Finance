import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SavingsAccount = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 40 : 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView style={{ display: "flex" }}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={require("../assets/zeroBG.jpg")}
            style={styles.topCard}
          >
            <View style={styles.overlay} />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("BankPage")}>
                <Text
                  style={{ color: "white", fontWeight: "bold", fontSize: 50 }}
                >
                  Open a Savings Bank {""} Account
                </Text>
                <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>
                  Start Saving Today
                </Text>
                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
                  Enjoy the benefits of a savings account.
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.rockbottom}>
            <View
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
                marginTop: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#A9CDD4", // Light Blue
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  opacity: 0.7,
                }}
              >
                <Image
                  source={require("../assets/savings.png")}
                  style={{ width: 90, height: 90, marginVertical: 10 }}
                />
                <Text
                  style={{
                    color: "darkblue",
                    marginLeft: 10,
                    fontWeight: "600",
                    opacity: 1,
                  }}
                >
                  Competitive Interest Rates
                </Text>
                <Text style={{ color: "darkblue", margin: 10, fontSize: 13 }}>
                  Earn interest on your savings balance.
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#E3A3B7", // Light Red
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  opacity: 0.7,
                }}
              >
                <Image
                  source={require("../assets/doc.png")}
                  style={{
                    width: 90,
                    height: 90,
                    marginBottom: 10,
                    marginVertical: 10,
                  }}
                />
                <Text
                  style={{ color: "maroon", marginLeft: 10, fontWeight: "600" }}
                >
                  Online Application
                </Text>
                <Text style={{ color: "maroon", margin: 10, fontSize: 13 }}>
                  Apply for a savings account online from anywhere.
                </Text>
              </Pressable>
              <View
                style={{
                  backgroundColor: "#A6D7B6", // Light Green
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  opacity: 0.7,
                }}
              >
                <Image
                  source={require("../assets/mobile.png")}
                  style={{ width: 100, height: 100, marginVertical: 10 }}
                />
                <Text style={{ color: "darkgreen", fontWeight: "600" }}>
                  Mobile Banking
                </Text>
                <Text style={{ color: "darkgreen", margin: 10, fontSize: 13 }}>
                  Access your savings account with a mobile app.
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#FFC8A6", // Light Orange
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 10,
                  opacity: 0.7,
                }}
              >
                <Image
                  source={require("../assets/piggy.png")}
                  style={{ width: 100, height: 100, marginVertical: 10 }}
                />
                <Text style={{ color: "brown", fontWeight: "600" }}>
                  Savings Goals
                </Text>
                <Text style={{ color: "brown", margin: 10, fontSize: 13 }}>
                  Plan and track your savings goals effortlessly
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavingsAccount;

const styles = StyleSheet.create({
  topCard: {
    borderRadius: 40,
    resizeMode: "contain",
    height: 300,
    marginHorizontal: "2%",
    padding: 30,
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust opacity as needed
  },
  rockbottom: {
    height: 450,
    display: "flex",
    alignItems: "center",
  },
});
