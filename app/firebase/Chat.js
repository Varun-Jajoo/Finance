import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState,useContext } from 'react'
import {addDoc, collection,serverTimestamp} from "firebase/firestore"
import { db } from './firebase-config'
import { UserContext } from '../App'
const Chat = (props) => {
    const {room} =props
    const {userData,setUserData}=useContext(UserContext)
    const[text,setText]=useState("")
    const messageRef=collection(db,"messages")
    const handlesubmit=async(e)=>{
        e.preventDefault();
        if(text==="") return;
        await addDoc(messageRef,{
            text:text,
            createAt:serverTimestamp(),
            user : userData.name,
            room,
        })
        setText("")
    };
  return (
    <View>
      <TextInput style={{marginTop:100}}  onChangeText={(text)=>{setText(text)}} value={text} placeholder='type your msg here'></TextInput>
      <TouchableOpacity onPress={handlesubmit}><Text>Send</Text></TouchableOpacity>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({})