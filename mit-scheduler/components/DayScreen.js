import * as React from 'react';
import {StyleSheet, View, Text, Button, ScrollView, Component,TouchableOpacity, Alert} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
//import LectureCard from './LectureCard'
import {DefaultDay, Monday, Tuesday,Wednesday,Thursday,Friday,Saturday
  } from '../global';
import {darkMode} from '../global';
const LectureCard = (props) => {
  
  return(
   <TouchableOpacity  style={styles.cardContainer} onPress={()=>{}}>
    <Text style={styles.text}>{props.name}</Text>
    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
      <Text>{props.teacher}</Text>
      <Text>{props.hall}</Text>
    </View>
  </TouchableOpacity>
);


}
LectureCard.defaultProps = {
  name:"Lecture Name",
  teacher: "Teacher Name",
  hall: "Hall No."
}


export default class DayScreen extends React.Component  {
  constructor(props) {
    super(props);
  }
  render(){
  const Days = [
    DefaultDay,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
  ]
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {
            Days[this.props.day].map((i, index)=>(
              <LectureCard name={i.Lecture} teacher={i.Teacher} hall={i.Hall} />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

DayScreen.defaultProps = {
  day: 0
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  scrollView: {
    marginHorizontal: 5,
    marginTop: 5
  },
  cardContainer:{
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    flex:1,
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    color: '#000'
  }
});
