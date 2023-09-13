import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import React, { useState, useContext } from "react";
import { UserContext } from "../App";

const PersonalFirst = () => {
  const { userData, setUserData } = useContext(UserContext);
  const [cards, setCards] = useState([
    {
      title: "Gifts",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Food",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Clothes",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Education",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Leisure",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Toiletries",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Savings",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Technology",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
    {
      title: "Transport",
      img: require("../assets/3d-render-hand-put-golden-coin-into-piggy-bank.jpg"),
      selected: false,
    },
  ]);

  const colors = [
    "#AEC6CF",
    "#98FB98",
    "#E6E6FA",
    "#FFDAB9",
    "#87CEEB",
    "#FFFF99",
    "#F7CAC9",
    "#BCE27F",
    "#0e6994",
  ];

  const handlePress = (i) => {
    const updatedCards = [...cards];
    updatedCards[i].selected = !cards[i].selected;
    setCards(updatedCards);

    const selected = updatedCards.filter((card) => card.selected);
    setUserData((prevData) => ({
      ...prevData,
      spend: selected.map((card) => card.title),
    }));
  };

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
      }}
    >
      <Text style={{ paddingTop: 30, color: "grey", fontSize: 25 }}>
        What do you spend on?
      </Text>
      <Text style={{ paddingTop: 20, fontSize: 18, color: "grey" }}>
        Select all that apply
      </Text>
      <ScrollView contentContainerStyle={styles.grid}>
        {cards.map((card, index) => (
          <Pressable
            key={index}
            style={[
              styles.card,
              { backgroundColor: card.selected ? colors[index] : "white" },
            ]}
            onPress={() => handlePress(index)}
          >
            <Image source={card.img} style={{ height: 70, width: 70 }} />
            <Text
              style={{ fontFamily: "Poppins", fontSize: 13 }}
            >
              {card.title}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default PersonalFirst;

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    height: 400,
  },
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
});
