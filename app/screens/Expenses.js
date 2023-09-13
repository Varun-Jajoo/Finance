import { StyleSheet, Text, View,Pressable,Image, ScrollView,Platform } from 'react-native'
import React from 'react'
// import CircularProgress from 'react-native-circular-progress-indicator';
const Expenses = () => {
  return (
    <ScrollView style={{display: "flex",backgroundColor:"white",position:"relative"}}>
     <Pressable style={styles.savetop}>
        <Image
          source={require("../assets/coin_9590150.png")}
          style={{ height: 60, width: 60, marginRight: 10 }}
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
              //fontWeight: "700",
              fontSize: 20,
              marginRight: 10,
              textAlign: "left",
              // fontFamily:"Poppins",
            }}
          >
            View your Daily transaction
          </Text>
          <Text style={{ textAlign: "center" ,color:"#1b1b1b",marginTop:5}}>Your  daily  report</Text>
        </View>
      </Pressable>
      <View style={{display:'flex',flexDirection:'row',alignItems:"center",justifyContent:'center',flexWrap:"wrap"}}> 
      <View style={{height:170,width:170,borderRadius:400,borderColor:"#F1C93B",borderWidth:20,margin:10}}>
       <View style={{display:'flex',justifyContent:'center',alignItems:"center",marginTop:40}}>
        <Text style={{color:"black"}}>Clothes</Text>
        <Text style={{color:"black"}}>₹2000</Text>
        </View>
      </View>
    

      </View>
      
   
    </ScrollView>
  )
}

export default Expenses

const styles = StyleSheet.create({
  savetop: {
    height: 100,
    width: "90%",
    backgroundColor: "#98bc62",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 24,
    
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
      android: {
        elevation: 20,
      },})
  },})