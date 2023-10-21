import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';

export default function NoteScreen({navigation}){
    return(
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput style={{height: 2000, width: 350, textAlign: 'justify'}}>Write Write Write Write Write! Need to get something off your chest? Write it down! Tap anyhwere on the screen to start.</TextInput>
      </SafeAreaView>
    );
  }
  