import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import TimetableTabs from '../components/TimetableTabs'
//import styles from '../styles'

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TimetableTabs />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});