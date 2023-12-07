import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {Icon} from 'react-native-elements';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home'
import Settings from './screens/settings'
import AboutPage from './screens/about'
import CourseSettings from './screens/courseSettings'
import darkMode from './global'
const Stack = createStackNavigator();

export default function App({navigation}) {
  //const [darkTheme, setDarkTheme] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={({ navigation }) => ({
                title: "TYCSE Timetable",
                headerStyle: {
                  backgroundColor: '#fff',
                  
                },
                headerTintColor: '#000',
                headerRight: () => (
                  <TouchableOpacity
                    onPress={() => 
                    navigation.navigate('Settings')}
                    title="Settings">
                    <Icon style={{paddingRight: 15}} name='settings' type='material' color='#000' size = {30}  />
                  </TouchableOpacity>
                ),
              })}/>
        <Stack.Screen name="Settings" component={Settings}/>
        <Stack.Screen name="CourseOptions" component={CourseSettings}/>
        <Stack.Screen name="About" component={AboutPage} options={{
          title: "About this app"
}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}