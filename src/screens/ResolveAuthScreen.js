import React,{useContext,useEffect} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';

const ResolveAuthScreen = ()=>{
    const {tryLocalSignIn} = useContext(AuthContext);
    useEffect(()=>{
        tryLocalSignIn();
    },[]);
    return null;
};

export default ResolveAuthScreen;