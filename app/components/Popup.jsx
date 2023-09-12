import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Quiz from './Quiz';

// Import your image assets (study, quiz1, walkthrough, video)

const Popup = () => {
  const [quiz, setQuiz] = useState(false);

  return (
    <View style={styles.popup}>
      <View style={styles.topcard}>
        <Text onPress={()=>setQuiz(false)} style={styles.tip}>Learn about Basics of Finance</Text>
      </View>
      {!quiz ? (
        <View style={styles.edu}>
          <TouchableOpacity style={[styles.popcard, styles.study]}>
            <Image style={styles.cardImage}  source={require('../assets/education_3181724.png')}/>
            <Text style={styles.poptext}>Learn and Study</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.popcard, styles.quiz]}
            onPress={() => setQuiz(true)}
          >
            <Image style={styles.cardImage} source={require('../assets/search_3277438.png')} />
            <Text style={styles.poptext}>Take Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popcard, styles.walk]}>
            <Image
              style={styles.cardImage}
              source={require('../assets/team_9068396.png')}
            />
            <Text style={styles.poptext}>Walkthrough</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.popcard, styles.video]}>
            <Image style={styles.cardImage} source={require('../assets/video_7214114.png')}  />
            <Text style={styles.poptext}>Video Tutorials</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Quiz setquiz={setQuiz}/>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  popup: {
    height: '110%',
    width: '100%',
    backgroundColor: 'rgb(243, 228, 201)',
  },
  topcard: {
    flexDirection: 'column',
    marginLeft: 50,
  },
  edu: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 15,
    width:"100%",
  
    marginTop: 30,
  },
  popcard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: "50%",
    backgroundColor: '#fff',
    flex: 0,
    flexBasis: '40%',
    borderRadius: 20,
    margin:6,

  },
  study: {
    backgroundColor: '#d5ecf9',
    borderColor: 'rgb(15, 37, 145)',
  },
  quiz: {
    backgroundColor: '#ffcffa',
    borderColor: 'rgb(120, 21, 120)',
  },
  walk: {
    backgroundColor: 'rgb(250, 250, 159)',
    borderColor: 'rgb(166, 112, 31)',
  },
  video: {
    backgroundColor: 'rgb(182, 255, 182)',
    borderColor: 'rgb(19, 66, 22)',
  },
  cardImage: {
    height: 60,
    width:60,    marginBottom: 20,
  },
  poptext: {
    // Add styles for the popcard text
  },
  tip: {
    marginTop: 20,
    marginLeft:50
  },
});

export default Popup;
