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
          <View style={styles.rockbottom}>
          <View style={{display:'flex',flexWrap:'wrap',gap:10,marginTop:0,alignItems:"center",justifyContent:"center"}}><View style={{backgroundColor:"#ecf2fc",height:150,width:170,borderRadius:20}}><Text style={{color:'darkblue',marginLeft:10,marginTop:10}}>Zero Balance Account</Text></View>
              <View style={{backgroundColor:"#fcdcae",height:150,width:170,borderRadius:20}}><Text style={{color:'brown',marginLeft:10,marginTop:10}}>Schema Doc Generation</Text></View>
              <View style={{backgroundColor:"#ddffdf",height:150,width:170,borderRadius:20}}><Text style={{color:'darkgreen',marginLeft:10,marginTop:10}}>Personal Saving Account</Text></View>
              <View style={{backgroundColor:"#ddeded",height:150,width:170,borderRadius:20}}><Text style={{marginLeft:10,marginTop:10}}>Bill Payments</Text></View>
              </View>
              </View>
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
    top: 300,
    height: 50,
    width: "100%",
    backgroundColor: "white",
  },
  rockbottom: {
    zIndex:99,
    height: 400,
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
});
