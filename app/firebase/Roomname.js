import React, { useRef, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView ,Platform} from 'react-native';
import Chat from './Chat';
import { SafeAreaView } from 'react-native-safe-area-context';

const forumTopics = [
  "Budgeting and Saving",
  "Wealth Building Strategies",
  "Taxation and Financial Planning",
  "Estate Planning",
  
  "Finance Education and Courses",
  "Career Advice",
  
  "Digital Banking",
  
  "Economics and Global Finance",
  "Payment Solutions",
  "Trade and Commerce",
];

const colors = [
  "#FFA726", // Orange
  "#66BB6A", // Green
  "#42A5F5", // Blue
  "#FF7043", // Red
  
  "#FFD54F", // Yellow
  "#FFC107", // Amber
  
  "#26C6DA", // Cyan
  
  "#9575CD", // Purple
  "#4DB6AC", // Teal
"pink", // Blue Gray
];

const Roomname = () => {
  const [room, setRoom] = useState('');
  const ref = useRef(null);

  const handleTopicPress = (topicIndex) => {
    setRoom(forumTopics[topicIndex]);
  };

  return (
    <SafeAreaView>
      {room ? (
        <View style={{ backgroundColor: colors[forumTopics.indexOf(room)] }}>
          <Text>
            {/* Assuming Chat component accepts a 'room' prop */}
            <Chat room={room} />
          </Text>
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          {/* Hidden TextInput */}
          <TextInput
            style={{ display: 'none', height: 100, width: 100 }}
            ref={ref}
            value={room}
          />
          {/* Create buttons dynamically */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {forumTopics.map((topic, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTopicPress(index)}
                style={{
                  backgroundColor: colors[index],
                  padding: 10,
                  margin: 5,
                  borderRadius: 88,
                }}
              >
                <Text style={{fontWeight:'bold'}}>#{topic}</Text>
              </TouchableOpacity>
            ))}

          </View>
         
            <Text style={{marginLeft:20,marginTop:20,fontWeight:600,fontSize:31}}>Meet</Text>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <View style={{width:"90%",height:100,marginRight:8,borderRadius:10,
                  
            }}>
                <View style={{borderRadius:20,height:100,width:"100%",display:"flex",flexDirection:"row",justifyContent:'center',alignItems:"center"}}>
                    <Text style={{display:"flex",flexDirection:'row',fontSize:30}}>+</Text><Text style={{fontSize:30}}> tap to add a meet </Text>
                </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Roomname;

const styles = StyleSheet.create({});
