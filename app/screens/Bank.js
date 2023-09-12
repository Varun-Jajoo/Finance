import { Pressable, ScrollView, StyleSheet, Text,Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CreditCard from '../components/Mastercard'

const Bank = () => {
  return (
    <ScrollView style={{display:"flex"}}>
      <TouchableOpacity style={styles.wallet}>
      <CreditCard/>
      </TouchableOpacity>
      <Pressable style={styles.bottomup}>

      </Pressable>
      <Pressable style={styles.rockbottom}>
        <View style={{display:"flex" ,flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"#F1C93B",height:80,width:"90%",borderRadius:20}}>
          <TouchableOpacity style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../assets/refresh_545661.png")} style={{height:30,width:30}}/>
            <Text>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{display:"flex" ,justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../assets/card.png")} style={{height:30,width:30}}/>
            <Text>Details</Text>
          </TouchableOpacity>
        </View>
        <Pressable style={{flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center",margin:20}}>
        
        <Text style={{marginRight:180}}>Recharge</Text>
        
        <Text>Plans</Text>
        
        </Pressable>
        <View style={{ height: 4,width:300, backgroundColor: 'black' }}></View>
        <Text style={{margin:20}}>idher likhna kya h?</Text>
      </Pressable>
    </ScrollView>
  )
}

export default Bank

const styles = StyleSheet.create({
  wallet:{
    backgroundColor:"#2b6747",
    height:320,
    paddingBottom:30,
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  bottomup:{
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    position:"absolute",
    top:280,
    height:50,
    width:400,
    backgroundColor:"white"
  },
  rockbottom:{
    height:300,
    backgroundColor:"white",
    display:'flex',
    alignItems:'center',

  }
})