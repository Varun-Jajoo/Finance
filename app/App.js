import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const[loaded] = useFonts({
    Poppins:require('./assets/fonts/Poppins-Medium.ttf')
  })

  if(!loaded){return null}

  return (
     <>
      <StackNavigator />
      </>
  );
}

const styles = StyleSheet.create({
});
