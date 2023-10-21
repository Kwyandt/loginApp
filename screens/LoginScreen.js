import React, {useContext, useState} from 'react';
import {AuthContext} from '../data/AuthContext';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import LogImage from '../assets/LoginUI/happyPenguin.png';
import Facebook from '../assets/LoginUI/facebook.png';
import Google from '../assets/LoginUI/google.png';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function LoginScreen({navigation}){
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{paddingHorizontal:30}}>
          <View style={{alignItems: 'center'}}>
          <Image source={LogImage} alt="Happy Penguin"/>
          </View>
          <Text style = {{fontSize:30, fontWeight:'bold', color: '#20315f', marginBottom:30 }}>
              Login 
            </Text>
            {/* Email */}
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
            <MaterialIcons name ='alternate-email' size = {20} color='#666' style={{marginRight:5}}/>
            <TextInput placeholder='Email or UserName' style={{flex: 1, paddingVertical: 0}} keyboardType='email-address' value={email} onChangeText={text=>setEmail(text)}/>
          </View>
          {/* Password */}
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
            <Ionicons name ='ios-lock-closed-outline' size = {20} color='#666' style={{marginRight:5}}/>
            <TextInput placeholder='Password' style={{flex: 1, paddingVertical: 0}} secureTextEntry = {true} value={password} onChangeText={text=>setPassword(text)}/>
          </View>
          {/* Login Button */}
          <TouchableOpacity onPress={() => {login(email, password)}} style={{backgroundColor:'#a15ca4', padding: 20, borderRadius: 10, marginBottom: 30}}>
            <Text style={{textAlign: 'center', fontWeight: '700', fontSize:16, color: '#fff'}}>Login</Text>
          </TouchableOpacity>
          {/* Social Media Authentication/Login */}
          <Text style ={{textAlign:'center', color:'#666', marginBottom: 30}}>
            Or, login with...
          </Text>
          {/* Social Media Button */}
          <View style ={{flexDirection:'row', justifyContent:'space-between', marginBottom:30}}>
          <TouchableOpacity onPress ={() => {}} style={{borderColor:'#ddd', borderWidth: 3, borderRadius: 10, paddingHorizontal:50, paddingVertical:10}}>
            <Image source={Google} alt="Google Logo"/>
          </TouchableOpacity>
          <TouchableOpacity onPress ={() => {}} style={{borderColor:'#ddd', borderWidth: 3, borderRadius: 10, paddingHorizontal:50, paddingVertical:10}}>
            <Image source={Facebook} alt="Google Logo"/>
          </TouchableOpacity>
          </View>

          {/* Toggle to Register page */}
          <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 30}}>
          <Text> New to the app? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color:'#a15ca4', fontWeight:'700'}}>Register</Text>
          </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
  