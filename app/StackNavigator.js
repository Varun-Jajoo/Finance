import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Bank from "./screens/Bank";
import Education from "./screens/Education";
import Expenses from "./screens/Expenses";
import Community from "./screens/Community";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import PersonalQuestions from "./screens/PersonalQuestions";
import ExpensesLanding from "./screens/ExpensesLanding";
import DailyExpense from "./screens/DailyExpense";
import Popup from "./components/Popup";
import Quiz from "./components/Quiz";
import LevelCompletion from "./screens/LevelCompletion";
import LearnAndStudy from "./screens/LearnAndStudy";
import Video from "./screens/Video";
import BankOnboarding from "./screens/BankOnboarding";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: "Home", headerShown: false }}
        />
        <Tab.Screen
          name="Bank"
          component={Bank}
          options={{
            tabBarLabel: "Bank",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Education"
          component={Education}
          options={{ tabBarLabel: "Education", headerShown: false }}
        />
        <Tab.Screen
          name="Expenses"
          component={ExpensesLanding}
          options={{ tabBarLabel: "Expenses", headerShown: false }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{ tabBarLabel: "Community", headerShown: false }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
          name="Personal"
          component={PersonalQuestions}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Daily"
          component={DailyExpense}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Complete"
          component={LevelCompletion}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Learn"
          component={LearnAndStudy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Video"
          component={Video}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Popup"
          component={Popup}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
