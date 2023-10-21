import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {AuthContext} from '../data/AuthContext';

export default function HomeScreen({navigation}){
  const {logout} = useContext(AuthContext);
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:30, marginLeft: 30, marginRight:30, marginBottom: 30, fontWeight:'bold', color: '#20315f'}}>You're in! Stay around and explore, there's something for everyone to do.</Text>
        <TouchableOpacity onPress={() => {logout()}} style={{backgroundColor:'#a15ca4', padding: 20, borderRadius: 10, marginBottom: 30}}>
            <Text style={{textAlign: 'center', fontWeight: '700', fontSize:16, color: '#fff'}}>Logging Off...for now >:)</Text>
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
  