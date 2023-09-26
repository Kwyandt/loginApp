import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import{Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function App() {
  return (
    <SafeAreaView
    style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"}}>
    <View>
      <Text style={{fontSize:30, fontWeight:'bold', color: '#20315f'}}>Something 4 Everyone</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
    <TouchableOpacity style={{backgroundColor: '#AD40AF', padding:20, width:'90%', borderRadius:5,flexDirection:'row', justifyContent:'space-between'}}>
      {/*Customized font themes in react-native.config.js, couldn't figure out who to rebuild*/}
      <Text style = {{fontWeight:'bold', fontSize:18, color:'#fff', fontStyle:'italic'}}> I want to see cool things! 🍔</Text>
      <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"></MaterialIcons>
    </TouchableOpacity>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
