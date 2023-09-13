import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React, { useState } from 'react'
import CheckBox from '../components/CheckBox';
const FixedDeposit = () => {
  const [rcard, setRcard] = useState('');

  return (
    <View style={{display:"flex",justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style={{fontSize:20,fontWeight:"bold",marginTop:100}}>Deposit Amount</Text>
      <TextInput
          style={styles.tinput}
          value={rcard}
          placeholder="Enter Debit Card Details"
          onChangeText={(e) => setRcard(e)}
        />
        <View style={{}}>
      <Text style={{}}>Standard FD</Text>
      <Text>Money Multiplier</Text>
        </View>
    </View>
  )
}

export default FixedDeposit

const styles = StyleSheet.create({
  tinput: {
    width: '90%',
    height: 50,
    borderColor: 'lightgray',
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 10,

    backgroundColor: 'white',
    ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 7,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        },
        android: {
          elevation: 2,
        },
      }),
  },
})