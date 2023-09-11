import React from 'react';
import { ScrollView,View, Text, Pressable, Image, ProgressBarAndroid, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
const Education = () => {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: 80,
        }}
      >
        <Pressable
          style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d5ecf9",
            height: 100,
            width: 160,
            borderWidth: 4,
            borderBlockColor: "rgb(15, 37, 145)",
            borderRadius: 20,
          }}
        >
          <Image source={require('../assets/silver-medal_3188893.png')} style={{height:60,width:60,marginRight:15}}></Image>
          <View> 
           <Text>Rank</Text></View>
         
        </Pressable>
        <Pressable
          style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ffcffa",
            height: 100,
            width: 160,
            borderWidth: 4,
            borderBlockColor: "rgb(120, 21, 120)",
            borderRadius: 20,
          }}
        >
          <Image source={require("../assets/coin_9590150.png")} style={{height:60,width:60,marginRight:20}}></Image>
          <View> 
           <Text>Points</Text></View>
        </Pressable>
      </View>
      <View style={{flexDirection:'row',display:'flex',justifyContent:"space-evenly"}}>
      <Text style={{fontWeight:"bold",fontSize:20,paddingTop:18}}>Courses</Text>
      <Text style={{fontWeight:"600",fontSize:15,textDecorationLine:"underline",color:"grey",paddingTop:20,marginLeft:120}}>See all</Text>
      </View>
      <View
        style={{
          gap: 20,
          paddingTop: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <LinearGradient
        colors={['rgba(192,104,233,1)', 'rgba(106,81,229,1)']}
        start={{x:1,y:0}}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 350,
            backgroundColor: "rgba(106,81,229,1)",
            borderRadius: 35,
            elevation: 10,
          }}
        >
          <Image source={require('../assets/3d-calculator_10473465.png')} style={{ height: 80, width: 80 }} />
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
           <Text style={{ color: "white", fontWeight: "900", fontSize: 20, marginLeft: 20 ,marginRight:20}}>Basics of Finance</Text>
           <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.75}
             style={{width:125,marginTop:20,marginLeft:20}}
           
          />
          </View>
        </LinearGradient>
        <LinearGradient
        colors={["rgba(104,157,233,1) ","#457fe5"]}
        start={{x:0,y:1}}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 350,
            backgroundColor: "dodgerblue",
            borderRadius: 35,
            elevation: 10,
          }}
        >
          <Image source={require('../assets/piggy-bank_1511168.png')} style={{ height: 80, width: 80, margin: 8 }} />
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "white", fontWeight: "900", fontSize: 20 }}>Entreprenuship Guide</Text>
            <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.75}
             style={{width:125,height:10,margin:20}}
           
          />
          </View>
        </LinearGradient>

        <LinearGradient
        colors={['rgba(233,179,104,1) ', 'rgba(210,65,65,1)']}
        start={{ x: 0, y: 0 }} 
        end={{ x: 0.5, y: 1 }} 
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 120,
            width: 350,
            backgroundColor: "rgba(210,65,65,1) ",
            borderRadius: 35,
            elevation: 10,
          }}
        >
          <Image source={require('../assets/notification_6206466.png')} style={{ height: 80, width: 80 }} />
          <View style={{ display: "flex", flexDirection: "column" ,justifyContent: "center", alignItems: "center"}}>
            <Text style={{ color: "white", fontWeight: "900", fontSize: 20, marginRight: 30, textAlign: "left" }}>Scam Prevention</Text>
          
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.75}
             style={{width:125,margin:20}}
             
           
          />
           </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
};

export default Education;

const styles = StyleSheet.create({});
