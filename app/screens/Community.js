import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Popup from "../components/Popup"
import Videotut from '../components/Videotut'
import ExpensesLanding from '../components/ExpensesLanding'
import Utilize from '../components/Utilize'
import FixedDeposit from './FixedDeposit'


const Community = () => {
  return (
    <ScrollView>
     <FixedDeposit/>
    </ScrollView>
  )
}

export default Community

const styles = StyleSheet.create({})