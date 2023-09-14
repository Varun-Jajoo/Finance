import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import { useNavigation } from "@react-navigation/native";

const DailyExpense = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigation = useNavigation();
  const [inputValues, setInputValues] = useState(
    userData.spend.map((item) => String(item.spent))
  );
  const handleChange = (index, amount) => {
    const updatedInputValues = [...inputValues];
    updatedInputValues[index] = amount;
    setInputValues(updatedInputValues);
  };
  const handleContinuePress = () => {
    const updatedSpend = inputValues.map((amount) => ({
      spent:  (amount) || 0,
    }));

    const totalSpent = updatedSpend.reduce(
      (total, item) => total + item.spent,
      0
    );

    const leftToSpend = userData.salary - userData.savings - totalSpent;

    setUserData((prevUserData) => ({
      ...prevUserData,
      spend: updatedSpend,
      leftToSpend: leftToSpend,
    }));
    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get("window").height,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{ fontSize: 25, color: "grey", fontWeight: 700, marginTop: 30 }}
      >
        Add your daily expenses
      </Text>
      <ScrollView>
        {userData.spend.map((item, i) => {
          return (
            <Pressable
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 20,
                marginTop: 20,
                gap: 10,
              }}
            >
              <Pressable style={styles.card}>
                <Image
                  source={require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg")}
                  style={{ height: 70, width: 70 }}
                />
                <Text style={{ fontFamily: "Poppins", fontSize: 13 }}>
                  {item.title}
                </Text>
              </Pressable>
              <TextInput
                style={styles.input}
                value={inputValues[i]}
                onChangeText={(text) => handleChange(i, text)}
                placeholder="Enter Amount"
                keyboardType="numeric"
                onBlur={() => handleChange(i, inputValues[i])}
              />
            </Pressable>
          );
        })}
      </ScrollView>
      <Pressable
        style={styles.continueButton}
        onPress={() => handleContinuePress()}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default DailyExpense;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get("window").width * 0.23,
    height: 100,
    backgroundColor: "white",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
    borderRadius: 15,
    flexDirection: "column",
  },
  input: {
    width: 200,
    height: 50,
    borderColor: "lightgray",
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: {
          width: 2,
          height: 7,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  continueButton: {
    backgroundColor: "black",
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 20,
    zIndex: -1,
  },
  continueButtonText: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Poppins",
  },
});
