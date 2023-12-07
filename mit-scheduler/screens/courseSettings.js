import * as React from 'react';
import { Text, View, StyleSheet, Switch,TouchableOpacity, FlatList } from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react';
export default function Settings() {
  const [switchVal, setSwitchVal] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>COURSE OPTIONS</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text:{
    fontSize: 20,
    padding: 15
  }
});