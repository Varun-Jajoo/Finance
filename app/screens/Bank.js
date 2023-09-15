import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState, useContext } from "react";
import CreditCard from "../components/Mastercard";
import Transfer from "../components/Transfer";
import { UserContext } from "../App";
import { useNavigation } from "@react-navigation/native";
import BankOnboarding from "./BankOnboarding";

const Bank = () => {
  const [transfer, settransfer] = useState(false);
  const { userData, setUserData } = useContext(UserContext);
  return (
    <>
      {userData.bankForm ? (
        <ScrollView style={{ display: "flex" }}>
          <TouchableOpacity
            style={styles.wallet}
            onPress={() => {
              settransfer(false);
            }}
          >
            <CreditCard />
          </TouchableOpacity>
          <Pressable style={styles.bottomup}></Pressable>
          {!transfer ? (
            <Pressable style={styles.rockbottom}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  
                  height: 80,
                  width: "90%",
                  borderRadius: 20,
                }}
              >
                <View>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"grey",
                    borderRadius:90,
                    height:70,
                    width:70
                  }}
                  onPress={() => {
                    settransfer(true);
                  }}
                >
                  <Image
                    source={require("../assets/refresh_545661.png")}
                    style={{ height: 30, width: 30,backgroundColor:"grey",
                  }}
                  />
                </TouchableOpacity>
                <Text style={{marginLeft:10}}>Transfer</Text>

                </View>
                <View>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"grey",
                    borderRadius:90,
                    height:79,
                    width:79
                  }}
                >
                  <Image
                    source={require("../assets/card.png")}
                    style={{ height: 40, width: 40 }}
                  />
                  
                </TouchableOpacity>
                <Text style={{marginLeft:15}}>Details</Text>
                </View>
                <View>
                <TouchableOpacity
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor:"grey",
                    borderRadius:90,
                    height:75,
                    width:75
                  }}
                >
                  <Image
                    source={require("../assets/document_310909.png")}
                    style={{ height: 30, width: 30 }}
                  />
                </TouchableOpacity>
                <Text style={{marginLeft:10}}>Schemes</Text>

                </View>
              </View>
              <Pressable
                style={{
                  flexDirection: "row",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 20,
                }}
              >
                <Text style={{ marginRight: 180 }}>Recharge</Text>

                <Text>Plans</Text>
              </Pressable>
              <View
                style={{ height: 4, width: 300, backgroundColor: "black" }}
              ></View>
              <Text style={{ margin: 20 }}>idher likhna kya h?</Text>
            </Pressable>
          ) : (
            <Transfer />
          )}
        </ScrollView>
      ) : (
        <BankOnboarding />
      )}
    </>
  );
};

export default Bank;

const styles = StyleSheet.create({
  wallet: {
    backgroundColor: "#2b6747",
    height: 320,
    paddingBottom: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
  bottomup: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    top: 280,
    height: 50,
    width: 400,
    backgroundColor: "white",
  },
  rockbottom: {
    height: 300,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
});
