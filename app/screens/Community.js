import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Popup from "../components/Popup";
import Videotut from "../components/Videotut";
import ExpensesLanding from "./ExpensesLanding";
import Utilize from "../components/Utilize";
import FixedDeposit from "./FixedDeposit";
import PersonalDataForm from "../components/PersonalDataForm";
import LearnAndStudy from "./LearnAndStudy";
import Roomname from "../firebase/Roomname";
import MarketMockup from "./Stock";
import StockMarketApp from "./Stock";
import StockMarketMockup from "./Stock";

const Community = () => {
  return (
    <View>
     <Roomname/>
    </View>
  );
};

export default Community;

const styles = StyleSheet.create({});
