import * as React from 'react';
import {StyleSheet, View, useWindowDimensions , Dimensions, Text} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Constants from 'expo-constants';

import DayScreen from './DayScreen';


const FirstRoute = () => (
  <DayScreen day={1}/>
);

const SecondRoute = () => (
  <DayScreen day={2}/>
);

const ThirdRoute = () => (
  <DayScreen day={3}/>
);

const FourthRoute = () => (
  <DayScreen day={4}/>
);
const FifthRoute = () => (
  <DayScreen day={5}/>
);

const SixthRoute = () => (
    <DayScreen day={6}/>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute,
  fifth: FifthRoute,
  sixth: SixthRoute
});

export default function TimetableTabs({navigation}) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Monday' },
    { key: 'second', title: 'Tuesday' },
    { key: 'third', title: 'Wednesday' },
    { key: 'fourth', title: 'Thursday' },
    { key: 'fifth', title: 'Friday' },
    { key: 'sixth', title: 'Saturday' },
  ]);
  renderLabel = ({ route, focused, color }) => {
return (
  <View>
    <Text
      style={styles.tabTextColor}
    >
      {route.title}
    </Text>
  </View>
)
}
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
       renderTabBar={props => (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#000' }}
        tabStyle={{ width: "auto", paddingHorizontal: 15 }}
        scrollEnabled={true}
        style={styles.tabBar}
        renderLabel={this.renderLabel}
      />
      )}
    initialLayout={{
      width: Dimensions.get('window').width,
      height: 100,
    }}
    />
  );
  
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
  },
  tabTextColor: {
    color: '#000',
    fontSize: 17
  }
});