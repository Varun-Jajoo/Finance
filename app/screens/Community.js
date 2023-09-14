import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import Popup from "../components/Popup"
import Videotut from '../components/Videotut'
import ExpensesLanding from './ExpensesLanding'
import Utilize from '../components/Utilize'
import FixedDeposit from './FixedDeposit'
import PersonalDataForm from '../components/PersonalDataForm'


const Community = () => {
  return (
    <ScrollView>
   <PersonalDataForm/>
    </ScrollView>
  )
}

export default Community

const styles = StyleSheet.create({})