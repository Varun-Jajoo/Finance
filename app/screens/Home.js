import React, { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  FlatList, // Import FlatList
} from 'react-native';
import * as Progress from 'react-native-progress';

const Home = () => {
  const [goals, setGoals] = useState([]);
  const [newGoalName, setNewGoalName] = useState('');
  const [newGoalAmount, setNewGoalAmount] = useState('');
  const [newTotalGoalAmount,setNewTotalGoalAmount]=useState('')
  const addNewGoal = () => {
    if (newGoalName && newGoalAmount && newTotalGoalAmount) {
      const newGoal = {
        name: newGoalName,
        amount: newGoalAmount,
        total:newTotalGoalAmount,
        progress: parseFloat(newGoalAmount/newTotalGoalAmount)
      };

      setGoals([...goals, newGoal]);
      setNewGoalName('');
      setNewGoalAmount('');
      setNewTotalGoalAmount('');
    }
  };

 
  const renderGoalCard = ({ item }) => (
    <Pressable style={styles.save1}>
      <ImageBackground>
        <View style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/dartboard_1230127.png')} style={{height:50,width:50,marginRight:30}}/>
            <View>
              <Text style={{ color: 'black', fontSize: 20, marginRight: 30, textAlign: 'left' }}>
                {item.name}
              </Text>
              <Text>Trust the process</Text>
            </View>
          </View>

          <Progress.Bar
            borderColor="transparent"
            animationType="spring"
            unfilledColor="white"
            color="rgb(59,198,84)"
            progress={item.progress}
            width={255}
            height={18}
            borderRadius={20}
            style={{ marginTop: 20, elevation: 10 }}
          />
          <Text style={{ color: 'black', fontSize: 16, marginRight: 30, textAlign: 'left', marginTop: 20 }}>
            Balance
          </Text>
          <Text>₹ {item.amount} / ₹ {item.total}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );

  return (
    <ScrollView style={{ display: 'flex', backgroundColor: 'white', position: 'relative' }}>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/Savings-cuate.png')}
          style={{
            position: 'absolute',
            height: '45%',
            width: '100%',
            top: 0,
            left: 0,
            backgroundColor: '#2b6747',
          }}
        />
        <Pressable style={styles.savetop} onPress={addNewGoal}>
          <Image
            source={require('../assets/tugrik_9328452.png')}
            style={{ height: 80, width: 80, marginRight: 20 }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#1b1b1b',
                fontSize: 20,
                textAlign: 'left',
              }}
            >
              Add a Saving Goal
            </Text>
            <Text style={{ textAlign: 'center', color: '#1b1b1b' }}>We will keep a report!</Text>
          </View>
        </Pressable>

        {/* Input fields for new goal */}
        <TextInput
          placeholder="Goal Name"
          value={newGoalName}
          onChangeText={(text) => setNewGoalName(text)}
          style={styles.textInput}
        />
        <TextInput
          placeholder="Amount to Save"
          value={newGoalAmount}
          onChangeText={(text) => setNewGoalAmount(text)}
          keyboardType="numeric"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Amount to Achieve"
          value={newTotalGoalAmount}
          onChangeText={(text) => setNewTotalGoalAmount(text)}
          keyboardType="numeric"
          style={styles.textInput}
        />

       
        <FlatList
          data={goals}
          renderItem={renderGoalCard}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 50 }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  savetop: {
    height: 100,
    width: '90%',
    backgroundColor: '#98bc62',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 20,
    marginTop: "10%",
  },
  save1: {
    height: 200,
    width: '90%',
    backgroundColor: '#F1C93B',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    borderRadius: 20,
    elevation: 10,
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
  },
});

export default Home;
