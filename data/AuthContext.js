import React, {createContext, useState, useEffect} from 'react';
import {app} from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
export const AuthProvider = ({children}) => {
    const[isLoading,setIsLoading] = useState(false);
    const[user, setUser] = useState(null);
    const[userToken,setUserToken] = useState(null)
    const auth = getAuth(app);

    const login = async(email, password) => {
        setIsLoading(true);
        try{
            //const userCredential = await signInWithEmailAndPassword(auth, email, password)
            //const user = userCredential.user;
            console.log("User successfully signed in", email);
            setUserToken('token');
            AsyncStorage.setItem('userToken', 'token');
        } catch(e) {
            setIsLoading(false);
            console.log(e.message);
            alert("Unsuccessul Login");
        }
        setIsLoading(false);
    }

    const signUp = async(email, password, fullname, birthDate) => {
        setIsLoading(true);
        try{
            const userCredential = await createUserWithEmailAndPassword(auth,email,password);
            //after verification
            const user = userCredential.user;
            console.log("Successfully Registered:",user);
        } catch (e) {
            setIsLoading(false);
            alert("Sign up error, please try again.");
        }
        if(user) {
            const id = user.uid;
            await(saveUserData(id,fullname, birthDate))
        }
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken')
        /* user = null; */
        setIsLoading(false);
    }

    /* const onAuthStateChangedHander = async(user) => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            /* setUser(user);
            setIsLoading(false);
        } catch(e) {
            console.log('User error');
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHander);
    
        return unsubscribe;
    }, []); */
   const isLoggedin = async() => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        } catch(e) {
            console.log('isLoggedin error');
        }
    }

    useEffect(() => {isLoggedin();}, []);

    return (
        <AuthContext.Provider value ={{login, logout, signUp, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}