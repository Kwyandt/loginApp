import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReadScreen from '../Screens/ReadScreen';
import LookScreen from '../Screens/LookScreen';
import NotesScreen from '../Screens/NoteScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

import TabNav from '../navigation/TabNav';

const Stack = createNativeStackNavigator();

export default function AppStack (){
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home1" component={TabNav}/>
            <Stack.Screen name="Read" component={ReadScreen}/>
            <Stack.Screen name="Write" component={NotesScreen}/>
            <Stack.Screen name="See" component={LookScreen}/>
        </Stack.Navigator>
    );
}