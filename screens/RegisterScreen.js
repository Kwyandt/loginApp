import React, {useContext, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView} from 'react-native';
import {AuthContext} from '../data/AuthContext';
import RegImage from '../assets/LoginUI/twoPenguin.png';
import Facebook from '../assets/LoginUI/facebook.png';
import Google from '../assets/LoginUI/google.png';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function RegisterScreen({navigation}){
    const {signUp} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    return(
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal:30}}>
          <View style={{alignItems: 'center'}}>
          <Image source={RegImage} alt="Two Penguin" style={{marginTop: 30}}/>
          </View>
          <Text style = {{fontSize:30, fontWeight:'bold', color: '#20315f', marginBottom:30 }}>
              Register
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

          <Text style ={{textAlign:'center', color:'#666', marginBottom: 30}}>
            Or, sign up with email
          </Text>


          {/* Full Name */}
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
            <Ionicons name ='person-outline' size = {20} color='#666' style={{marginRight:5}}/>
            <TextInput placeholder='Full Name' style={{flex: 1, paddingVertical: 0}} value={fullname} onChangeText={text=>setFullName(text)}/>
          </View>
          
          {/* Email */}
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
            <MaterialIcons name ='alternate-email' size = {20} color='#666' style={{marginRight:5}}/>
            <TextInput placeholder='Email' style={{flex: 1, paddingVertical: 0}} keyboardType='email-address' value={email} onChangeText={text=>setEmail(text)}/>
          </View>
          
          {/* Password TODO: add check here*/}
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
            <Ionicons name ='ios-lock-closed-outline' size = {20} color='#666' style={{marginRight:5}}/>
            <TextInput placeholder='Password' style={{flex: 1, paddingVertical: 0}} secureTextEntry = {true}/>
          </View>

          {/* Confirm Password */}
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
            <Ionicons name ='ios-lock-closed-outline' size = {20} color='#666' style={{marginRight:5}}/>
            <TextInput placeholder='Confirm Password' style={{flex: 1, paddingVertical: 0}} secureTextEntry = {true} value={password} onChangeText={text=>setPassword(text)}/>
          </View>

          {/* Date of Birth*/}
          <View style={{flexDirection:'row', borderBottomColor:'#ccc', borderBottomWidth:1, paddingBottom: 8, marginBottom:25}}>
            <Ionicons name ='calendar-outline' size = {20} color='#666' style={{marginRight:5}}/>
            <TextInput placeholder='Date of Birth (MM/DD/YYYY)' style={{flex: 1, paddingVertical: 0}} value={birthDate} onChangeText={text=>setBirthDate(text)}/>
            </View>

          {/* Register Button */}
          <TouchableOpacity onPress={() => {signUp(email, password, fullname, birthDate)}} style={{backgroundColor:'#a15ca4', padding: 20, borderRadius: 10, marginBottom: 30}}>
            <Text style={{textAlign: 'center', fontWeight: '700', fontSize:16, color: '#fff'}}>Register</Text>
          </TouchableOpacity>          
          

          {/* Toggle to Register page */}
          <View style={{flexDirection:'row', justifyContent:'center', marginBottom: 30}}>
          <Text> Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color:'#a15ca4', fontWeight:'700'}}>Login</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  