import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import{Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import {AuthProvider} from './data/AuthContext';
import AppNav from './navigation/AppNav';



export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}