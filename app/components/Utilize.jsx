import { StyleSheet, Text, View ,ScrollView,Pressable,Image} from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress'
const Utilize = () => {
    const elevationStyle = Platform.select({
        ios: {
          shadowColor: "black",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
        android: {
          elevation: 10, // This sets the elevation for Android
        },
        default: {
          // For other platforms, you can set some default styles
          // or leave it empty.
        },
      });
   
  return (
    <View style={{ display: "flex",height:800, justifyContent: "center",
    alignItems: "center",gap:25}}>
      <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
            width: "90%",
            backgroundColor: "#F1C93B",
            borderRadius: 35,
            ...elevationStyle, // Apply elevationStyle here
          }}
        >
          {/* <Image
            source={require("../assets/3d-calculator_10473465.png")}
            style={{ height: 80, width: 80 }}
          /> */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginLeft: 20,
                marginRight: 20,
                fontFamily: "Poppins",
                //fontWeight: 200,
              }}
            >
              Mutual Funds
            </Text>
            {/* <Progress.Bar
              borderColor="transparent"
              unfilledColor="white"
              color="rgb(59,198,84)"
              progress={0.3}
              width={150}
              height={10}
              borderRadius={20}
              style={{ marginTop: 20 }}
            /> */}
          </View>
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
            width: "90%",
            backgroundColor: "#F1C93B",
            borderRadius: 35,
            ...elevationStyle, // Apply elevationStyle here
          }}
        >
          {/* <Image
            source={require("../assets/notification_6206466.png")}
            style={{ height: 80, width: 80 }}
          /> */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                
                fontSize: 20,
                marginLeft: 16,
                textAlign: "left",
                fontFamily: "Poppins",
                //fontWeight: 100,
              }}
            >
              Fixed Deposit
            </Text>
            {/* <Progress.Bar
              borderColor="transparent"
              unfilledColor="white"
              color="rgb(59,198,84)"
              progress={0.3}
              width={150}
              height={10}
              borderRadius={20}
              style={{ marginTop: 20 }}
            /> */}
          </View>
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "25%",
            width: "90%",
            backgroundColor: "#F1C93B",
            borderRadius: 35,
            ...elevationStyle, 
          }}
        >
          {/* <Image
            source={require("../assets/piggy-bank_1511168.png")}
            style={{ height: 80, width: 80, margin: 8 }}
          /> */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "black",
                
                fontSize: 20,
                fontFamily: "Poppins",
                //fontWeight: 200,
              }}
            >
              Real Estate
            </Text>
           
          </View>
        </Pressable>
    </View>
  )
}

export default Utilize

const styles = StyleSheet.create({})