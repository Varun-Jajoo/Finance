import { StyleSheet, Text, View,Pressable,Image, ScrollView } from 'react-native'
import React from 'react'
import CircularProgress from 'react-native-circular-progress-indicator';
const Expenses = () => {
  return (
    <ScrollView style={{display: "flex",backgroundColor:"#1b1b1b",position:"relative"}}>
     <Pressable style={styles.savetop}>
        <Image
          source={require("../assets/coin_9590150.png")}
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
        </View>
      </Pressable>
      <View style={{display:'flex',flexDirection:'row'}}> 
      <View style={{height:150,width:150,borderRadius:400,borderColor:"pink",borderWidth:20,margin:22}}></View>
      <View style={{height:150,width:150,borderRadius:400,borderColor:"pink",borderWidth:20,margin:22}}></View>
      </View>
      <View style={{display:'flex',flexDirection:'row'}}> 
      <View style={{height:150,width:150,borderRadius:400,borderColor:"pink",borderWidth:20,margin:22}}></View>
      <View style={{height:150,width:150,borderRadius:400,borderColor:"pink",borderWidth:20,margin:22}}></View>
      </View>
      <View style={{display:'flex',flexDirection:'row'}}> 
      <View style={{height:150,width:150,borderRadius:400,borderColor:"pink",borderWidth:20,margin:22}}></View>
      <View style={{height:150,width:150,borderRadius:400,borderColor:"pink",borderWidth:20,margin:22}}></View>
      </View>
      <CircularProgress
  value={60}
  radius={120}
  duration={2000}
  progressValueColor={'#ecf0f1'}
  maxValue={200}
  title={'KM/H'}
  titleColor={'white'}
  titleStyle={{fontWeight: 'bold'}}
/>
    </ScrollView>
  )
}

export default Expenses

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
  },})