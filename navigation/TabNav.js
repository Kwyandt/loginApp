import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import ReadScreen from '../Screens/ReadScreen';
import LookScreen from '../Screens/LookScreen';
import NotesScreen from '../Screens/NoteScreen';

import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();


export default function TabNav(){
    return(
    <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, 
        /* for some reson i kept on getting the error that color was not a valid variabke, these active colors are not working */
        tabBarStyle: {backgroundColor: '#E0D7E8', tabBarInactiveTintColor: '#fff', tabBarActiveTintColor: '#a15ca4'}}}>
        {/*Explanation screen? tbh not sure what, just a brief synopsis i guess, manage/view your profile here*/}
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:() => (<Entypo name="home" />)}}/>
        {/* Idea: Read Screen, random words on a page */}
        <Tab.Screen name="Read" component={ReadScreen} options={{tabBarIcon:() => (<Entypo name="open-book"/>)}}/>
        {/* Idea: just be a single text box that you can keep adding on to (need storage) */}
        <Tab.Screen name="Write" component={NotesScreen} options={{tabBarIcon:() => (<Entypo name="pencil"  />)}}/>
        {/* Idea: connect to an api that randomly generates words/pictures/idk, really random stuff, see random things*/}
        <Tab.Screen name="See" component={LookScreen} options={{tabBarIcon:() => (<Entypo name="images"  />)}}/>
    </Tab.Navigator>
    );
}