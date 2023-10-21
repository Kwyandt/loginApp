import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {AuthContext} from '../data/AuthContext';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import AuthStack from './AuthStack';
import AppStack from './AppStack';


export default function AppNav(){
    const {isLoading, userToken} = useContext(AuthContext);

    if(isLoading) {
        return(
            <View style={{flex:1, justiftContent:'center',alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
            </View>
        );
        
    }
    return(
    <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
    );
}