import React from "react";
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, Pressable,ScrollView, ImageBackground, Platform } from "react-native";

const ZeroBalanceAccount = () => {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? 40 : 0, justifyContent: "center", alignItems: "center" }}>
      <ScrollView style={{ display: "flex"}}>
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ImageBackground source={require("../assets/Underp.jpg")} style={styles.topCard}>
            <View style={styles.overlay} />
            <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 50 }}>Open a Zero Balance Account</Text>
                <Text style={{ color: "white", fontSize: 20, marginTop: 10 }}>Start Banking with Zero Deposit</Text>
                <Text style={{ color: "white", fontSize: 17, marginTop: 10 }}>
                  Enjoy the benefits of a zero balance account.
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
                  backgroundColor: "#02cfee",
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding :10
                }}
              >
                <Image source={require("../assets/zeroBG.jpg")} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <Text style={{ color: "darkblue", marginLeft: 10, fontWeight: "600" }}>
                  No Minimum Balance
                </Text>
                <Text style={{ color: "darkblue", margin: 10, fontSize: 13 }}>
                  Open an account without any initial deposit.
                </Text>
              </View>
              <Pressable
                style={{
                  backgroundColor: "#f67ea9",
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding :10
                }}
              >
                <Image source={require("../assets/zeroBG.jpg")} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <Text style={{ color: "maroon", marginLeft: 10, fontWeight: "600" }}>
                  Online Application
                </Text>
                <Text style={{ color: "maroon", margin: 10, fontSize: 13 }}>
                  Apply for an account online from anywhere.
                </Text>
              </Pressable>
              <View
                style={{
                  backgroundColor: "#53dab8",
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding :10
                }}
              >
                <Image source={require("../assets/zeroBG.jpg")} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <Text style={{ color: "darkgreen", fontWeight: "600" }}>
                  Mobile Banking
                </Text>
                <Text style={{ color: "darkgreen", margin: 10, fontSize: 13 }}>
                  Access your account with a mobile app.
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#f0a540",
                  height: 200,
                  width: 190,
                  borderRadius: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding :10
                }}
              >
                <Image source={require("../assets/zeroBG.jpg")} style={{ width: 100, height: 100, marginVertical: 10 }} />
                <Text style={{ marginLeft: 10, fontWeight: "600" }}>
                  Supported Banks
                </Text>
                <Text style={{ margin: 10, opacity: 0.5, fontSize: 13 }}>
                  Know which bank offers zero balance accounts
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ZeroBalanceAccount;

const styles = StyleSheet.create({
  topCard: {
    borderRadius: 40,
    resizeMode: "contain",
    height: 300,
    
    padding: 30,
    overflow: "hidden"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },
  rockbottom: {
    height: 450,
    display: "flex",
    alignItems: "center",
  },
});
