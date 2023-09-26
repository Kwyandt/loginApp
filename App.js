import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import{Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions} from 'react-native/Libraries/NewAppScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FillerImage from './assets/penguin.png';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(){
  return(
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
}

function MainScreen({navigation}){
  return(
    <SafeAreaView
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"}}>

    {/* Future: figure otu the svg thing */}
    <Image source={FillerImage} alt="penguin"/>
    <View>
      <Text style={{fontSize:30, fontWeight:'bold', color: '#20315f'}}>Something 4 Everyone</Text>
    </View>
    
    {/* <View style = {{flex:1, justiftContent:'Center', alignItems:'center'}}></View> */}
    <TouchableOpacity 
      onPress={()=>navigation.navigate('Home')}
      style={{backgroundColor: '#AD40AF', padding:20, width:'90%', borderRadius:5,flexDirection:'row', justifyContent:'space-between', marginTop: 30}}>
      {/*Customized font themes in react-native.config.js, couldn't figure out who to rebuild*/}
      <Text style = {{fontWeight:'bold', fontSize:18, color:'#fff', fontStyle:'italic'}}> I want to see cool things!</Text>
      <MaterialIcons name="arrow-forward-ios" size={22} color="#fff"></MaterialIcons>
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

/* function App() {
  return <HomeScreen/>
}

export default App; */
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
