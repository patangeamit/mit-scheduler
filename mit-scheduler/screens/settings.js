import * as React from 'react';
import { Text, View, StyleSheet, Switch,TouchableOpacity, FlatList, Alert} from 'react-native';
import Constants from 'expo-constants';
import {useState} from 'react';
import BranchSelect from '../components/pickers/BranchSelect';
import YearSelect from '../components/pickers/YearSelect';
import DivSelect from '../components/pickers/DivSelect';
import {darkMode, toggleDarkMode} from '../global';

export default function Settings({navigation}) {
  const [switchValNotif, setSwitchValNotif] = useState(false);
  const [switchValDark, setSwitchValDark] = useState(darkMode);
  return (
    <View style={styles.container}>
      
      <FlatList
        data={[
          {key: 'Course Options', screen: 'CourseOptions'},
          {key: 'Notifications', isSwitch: true, data:'Notif'},
          {key: 'Dark Mode', isSwitch: true},
          {key: 'About', screen: 'About'}
        ]}
        renderItem={({item}) => 
        <TouchableOpacity
          style={styles.item}
          onPress={() => { 
            if(!item.isSwitch){
              navigation.navigate(item.screen)
            }else{
              if(item.data=='Notif')
                  {setSwitchValNotif((prevVal)=>!prevVal)}
                else
                  {setSwitchValDark((prevDVal)=> !prevDVal)
                  
                  }
                }
              }
          }
            >
          <Text style={styles.text}>{item.key}</Text>
          {item.isSwitch ? 
            <Switch onValueChange={()=>{
                if(item.data=='Notif')
                  {setSwitchValNotif((prevVal)=>!prevVal)}
                else
                  {setSwitchValDark((prevVal)=> !prevVal)
                    
                  }
                }
              } value={item.data == 'Notif' ? switchValNotif : switchValDark} />
           : null}
        </TouchableOpacity>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 0,
  },
  item: {
    paddingEnd: 15,
    flexDirection: 'row',
    fontSize: 18,
    justifyContent: 'space-between'
  },
  text:{
    fontSize: 20,
    padding: 15
  }
});