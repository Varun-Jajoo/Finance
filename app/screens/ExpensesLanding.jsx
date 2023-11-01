import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Pressable,
  Platform,
  Modal,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState, useContext } from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { UserContext } from "../App";

const Expenses = () => {
  const [answer, setAnswer] = useState("");
  const { userData, setUserData } = useContext(UserContext);
  const [selectedTab, setSelectedTab] = useState(true);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const options = {
    method: "POST",
    url: "https://api.edenai.run/v2/text/generation",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiN2E0ODk0MjktZGIwMS00YzMyLTgwNmYtZmI3YzgyMzkzMWYzIiwidHlwZSI6ImFwaV90b2tlbiJ9.zb2xQc9BJybAGp0EX3fDuDjtvTB-_Uqe5NZ16wDW9Hg",
    },
    data: {
      providers: "openai",
      text: `give recommendation, if i am ${userData.age} years old and i have ${userData.dependents} in my family and live in a ${userData.city} area some financial tips of savings, give me 2 points of 1 line `,

      temperature: 0.3,
      max_tokens: 75,
    },
  };
  const totalSpent = userData.spend.reduce((accumulator, item) => {
    return accumulator + item.spent;
  }, 0);

  const handleQuestionSubmit = async () => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.openai.generated_text);
        setAnswer(response.data.openai.generated_text);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlesubmit = () => {
    navigation.navigate("Map");
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <View
        style={{
          paddingTop: Platform.OS === "android" ? 30 : 0,
          height: "100%",
          flexDirection: "column",
        }}
      >
        {/* <Header style={{position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:99}}/> */}

        <View
          style={{
            height: "51%",
            width: "100%",
            backgroundColor: "#b7d9e2",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            position: "relative",
            bottom: 60,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 70,
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                gap: 10,
                borderRadius: 99,
                backgroundColor: "white",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Pressable
                onPress={() => setSelectedTab(true)}
                style={[
                  styles.tabButton,
                  {
                    borderBottomWidth: selectedTab ? 2 : 0,
                    borderBottomColor: "#5c93aa",
                    height: 22,
                  },
                ]}
              >
                <Text style={{ paddingBottom: 5 }}>Days</Text>
              </Pressable>
              <Pressable
                onPress={() => setSelectedTab(false)}
                style={[
                  styles.tabButton,
                  {
                    borderBottomWidth: !selectedTab ? 2 : 0,
                    borderBottomColor: "#5c93aa",
                    height: 22,
                  },
                ]}
              >
                <Text style={{ paddingBottom: 5 }}>Weeks</Text>
              </Pressable>
            </View>
            <View
              style={{
                borderRadius: 99,
                backgroundColor: "#5c93aa",
                width: 40,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Octicons name="graph" size={22} color="#f0fcfe" />
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <AnimatedCircularProgress
              size={160}
              rotation={0}
              width={15}
              fill={37}
              tintColor="#5c93aa"
              onAnimationComplete={() => console.log("onAnimationComplete")}
              backgroundColor="#f0fcfe"
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              paddingTop: 20,
              color: "#5c93aa",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            17% increase from yesterday
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: "white",
            position: "relative",
            top: -40,
            paddingHorizontal: 10,
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 110,
                backgroundColor: "lightblue",
                borderRadius: 15,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 19 }}>Expenditure</Text>
                <Pressable
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "black",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "coloumn",
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                  gap: 3,
                }}
              >
                <Text style={{ fontSize: 35 }}>₹ {totalSpent}</Text>
                <Text> of {userData.salary - userData.savings} Rupees</Text>
              </View>
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 110,
                backgroundColor: "pink",
                borderRadius: 15,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  paddingTop: 10,
                }}
              >
                <Text style={{ fontSize: 19 }}>Savings</Text>
                <Pressable
                  style={{
                    height: 25,
                    width: 25,
                    backgroundColor: "black",
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 19,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "coloumn",
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                  gap: 3,
                }}
              >
                <Text style={{ fontSize: 35 }}>₹ {userData.savings}</Text>
                <Text> of {userData.salary} Rupees</Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginHorizontal: 10,
            height: 250,
            backgroundColor: "#F1F1F1",
            borderRadius: 20,
            paddingHorizontal: 10,
            marginTop: -20,
            alignItems: "center",
            paddingVertical: 5,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: 600 }}>
            Recommendations for you
          </Text>

          <Pressable
            style={{
              paddingHorizontal: 10,
              paddingVertical: 10,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 99,
              marginTop: 10,
            }}
            onPress={handleQuestionSubmit}
          >
            <Text style={{ color: "white" }}>Recommend</Text>
          </Pressable>

          <View style={{ padding: 10 }}>
            <Text>{answer ? answer.trim() : "Press The Button"}</Text>
          </View>
        </View>
        <Text
          style={{
            textAlign: "center",
            position: "absolute",
            top: Platform.OS === "android" ? 127 : 105,
            right: "37.5%",
            fontSize: 80,
            color: "#5c93aa",
            fontWeight: "bold",
          }}
        >
          37
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Expenses;

const styles = StyleSheet.create({
  tabButton: {
    alignItems: "center",
  },
});
