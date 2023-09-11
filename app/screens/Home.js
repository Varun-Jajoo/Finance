import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

const Home = () => {
  return (
    <ScrollView style={{ display: "flex",backgroundColor:"#1b1b1b",position:"relative", }}>
      <Image source={require("../assets/Savings-cuate.png")} style={{position:"absolute",height:300,width:400,top:0,left:0,backgroundColor:"#2b6747"}}/>
      <Pressable style={styles.savetop}>
        <Image
          source={require("../assets/tugrik_9328452.png")}
          style={{ height: 80, width: 80, marginRight: 20 }}
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
              fontWeight: "700",
              fontSize: 20,
              marginRight: 30,
              textAlign: "left",
              // fontFamily:"Poppins",
            }}
          >
            Add a Saving Goal
          </Text>
          <Text style={{ textAlign: "center" ,color:"#1b1b1b",}}>We will keep a report! </Text>
          {/* <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.75}
             style={{width:125,margin:20}}
             
           
          /> */}
        </View>
      </Pressable>
      <Pressable style={styles.save1}>
        <ImageBackground
        >
        <View
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <Image
              source={require("")}
              style={{ height: 60, width: 60, marginRight: 20 }}
            /> */}
            <View>
              <Text
                style={{
                  color: "black",
                  fontWeight: "700",
                  fontSize: 20,
                  marginRight: 30,
                  textAlign: "left",
                  // fontFamily:"Poppins"
                }}
              >
                Buying a Phone
              </Text>
              <Text style={{}}>Trust the process </Text>
            </View>
          </View>

          <Progress.Bar
            borderColor="transparent"
            animationType="spring"
            unfilledColor="white"
            color="rgb(59,198,84)"
            progress={0.3}
            width={255}
            height={18}
            borderRadius={20}
            style={{ marginTop: 20, elevation: 10 }}
          />
          <Text
            style={{
              color: "black",
              fontWeight: "900",
              fontSize: 16,
              marginRight: 30,
              textAlign: "left",
              marginTop: 20,
            }}
          >
            Balance
          </Text>
          <Text style={{}}>₹ 3000 / ₹ 10000 </Text>
        </View>
        </ImageBackground>
      </Pressable>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  savetop: {
    height: 100,
    width: 350,
    backgroundColor: "#98bc62",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
    
    borderRadius: 20,
    elevation: 20,
    marginTop:250
  },
  save1: {
    height: 220,
    width: 350,
    backgroundColor: "#F1C93B",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    margin: 24,
    borderRadius: 20,
    elevation: 10,
  },
  text:{}
});
