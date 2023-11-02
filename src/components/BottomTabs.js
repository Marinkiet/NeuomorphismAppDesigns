import React from 'react';
import Sesha from '../../screens/Sesha';
import UmtapoWako from '../../screens/UmtapoWako';
import Ikhaya from '../../screens/Ikhaya';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Neuro from '../../screens/Neuro';

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    // Bottom Naivgation Options
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: {
          backgroundColor: '#282828',
          borderTopWidth: 0
        },
        headerShown: false,
      }}>
      {
        // Active Icon Color
      }
    
      <Tab.Screen
        name="Ikhaya"
        component={Ikhaya}
        options={{
          tabBarIcon: ({focused}) => (
            <Feather 
            //name={focused?'home' :"home2"}
            name='home'
            size={23} 
            color={focused?"white":"lightgray"}
            />
          ),
        }}
      />

      <Tab.Screen name="Sesha" component={Sesha}   options={{
        tabBarIcon: ({focused}) => (
            <Feather 
          name='search' 
          size={23} 
          color={focused?"white":"lightgray"}/>
        ),
      }} />
      
      <Tab.Screen name="Umtapo Wako" component={UmtapoWako} 
      options={{
        tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons 
          name='bookshelf' 
          size={23} 
          color={focused?"white":"lightgray"}/>
        ),
      }}/>

      <Tab.Screen name="Neuro" component={Neuro} 
      options={{
        tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons 
          name='heart' 
          size={23} 
          color={focused?"white":"lightgray"}/>
        ),
      }}/>
    </Tab.Navigator>
  );
}
export default BottomTabs;
