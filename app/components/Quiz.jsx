import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,ScrollView} from 'react-native';

import Quizdata from './Quizdata';

export default function Quiz({ setquiz }) {
  const [ques, setQues] = useState(0);
  const [score, setScore] = useState(0);
  const [clickopt, setClickOpt] = useState(null);
  const [optionStyle, setOptionStyle] = useState({}); // Maintain optionStyle in state

  const nextQues = () => {
    if (clickopt === Quizdata[ques].correctAnswer) {
      setScore(score + 1);
    }

    if (ques < Quizdata.length - 1) {
      setQues(ques + 1);
      setClickOpt(null);
      setOptionStyle({});
    }
  };

  return (
    <ScrollView style={styles.quizContainer}>
      <View style={styles.ques}>
        <Text>
          {ques + 1}. {Quizdata[ques].question}
        </Text>
      </View>
      <View style={styles.options}>
        {Quizdata[ques].options.map((option, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={[styles.optionButton, optionStyle[i]]} 
              onPress={() => {
                setClickOpt(i + 1);
                setOptionStyle((prevStyle) => ({
                  ...prevStyle,
                  [i]: {
                    backgroundColor:
                      i + 1 === Quizdata[ques].correctAnswer ? 'green' : 'red',
                  },
                }));
              }}
              disabled={clickopt !== null}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={nextQues}>
        <Text>Next</Text>
      </TouchableOpacity>

      <View><Text>Score: {score}</Text></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ques: {
    marginBottom: 20,
  },
  options: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  optionButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  nextButton: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 20,
    borderRadius: 5,
  },
});
