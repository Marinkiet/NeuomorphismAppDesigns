
import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './src/components/BottomTabs';
import Neuro from './screens/Neuro';
import NeuroRoom from './screens/NeuroRoom';
import DarkNeuro from './screens/DarkNeuro';
import NeoTest from './screens/NeoTest';
import DarkNeuoList from './screens/DarkNeuoList';
// const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
 <NavigationContainer>
     <Stack.Navigator  
     screenOptions={{
    headerShown: false
  }}>
     <Stack.Screen name="Neuro" component={Neuro} />
     <Stack.Screen name="NeuroRoom" component={NeuroRoom} />
      {/* <Stack.Screen name="DarkNeuroList" component={DarkNeuoList} />
      <Stack.Screen name="DarkNeuro" component={DarkNeuro} />*/}
     </Stack.Navigator> 
{/* //       <BottomTabs /> */}
{/* <Neuro/> */}
{/* <DarkNeuro/> */}
{/* <DarkNeuoList/> */}
{/* <NeuroRoom/> */}
{/* <NeoTest/> */}
    {/* </NavigationContainer>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>*/}
  </NavigationContainer> 
  );
}


export default App;
// const DATA = [
//   {
//       id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//       title: "Ain't No Time",
//       artist:'Future'
//   },
//   {
//       id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//       title: 'In Her Mouth',
//       artist:'Future'
//   },
//   {
//       id: '58694a0f-3da1-471f-bd96-145571e29d72',
//       title: 'Low Life',
//       artist:'Future',
//       featuredArtist:'The Weekend'
//   },
//   {
//       id: '58694a0f-3da1-471f-bd96-145571e29d92',
//       title: 'Xanny Family',
//       artist:'Future',
//   },
//   {
//       id: '3ac68afc-c605-48d5-a4f8-fbd91aa97f63',
//       title: 'Lil Haiti Baby',
//       artist:'Future',
//   },
//   {
//       id: '58694a0f-3da1-477f-bd96-145571e29d72',
//       title: 'Photo Copied',
//       artist:'Future',
//   },
//   {
//       id: '58694a0f33da1-471f-bd96-145571e29d92',
//       title: 'Seven Rings',
//       artist:'Future',
//   },
//   {
//       id: '58694560f33da1-471f-bd96-145571e29d92',
//       title: 'Lie To mE',
//       artist:'Future',
//   },
// ];