import * as React from 'react';
import { Text, View, StyleSheet, Switch,TouchableOpacity, FlatList, Linking } from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react';
import G from '../global';
export default function Settings() {
  const [switchVal, setSwitchVal] = useState(true);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        This app is developed by Amit Patange and Runali Patil as their minor project for 5th semester of Computer Science Engineering, under the guidance of Ms. Kala.
      </Text>
      <Text style={styles.text}>MIT Schedular is written in JavaScript using React Native and Expo.
      </Text>
      
      <Text style={styles.link} onPress={() => {
              Linking.openURL('https://reactnative.dev');
            }}>https://reactnative.dev/</Text>

      <Text style={styles.link} onPress={() => {
              Linking.openURL('https://expo.dev/');
            }}>https://expo.dev/</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  text:{
    fontSize: 20,
    padding: 15,
    paddingBottom: 0,
    textAlign: 'justify'
  },
  link:{
    fontSize: 20,
    padding: 15,
    paddingBottom: 0,
    color: 'blue',
    textDecorationLine: 'underline'
  }
});