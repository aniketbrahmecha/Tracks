import React,{useState,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import {Context} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation';

const SignupScreen = ({navigation})=>{
    const { state, signup,clearErrorMessage } = useContext(Context);

    
    return (
        <View style={styles.container}>
        <NavigationEvents
            onWillBlur={clearErrorMessage}
         />
            <AuthForm 
                headerText="Sign up"
                errorMessage={state.errorMessage}
                submitButtonText= "Sign up"
                onSubmit={signup}
            />
            <NavLink routeName="Signin" textToShow="Already a user? Signin instead" />
        </View>
    );
};

SignupScreen.navigationOptions = () =>{
    return {
        header:null
    };
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        marginBottom: 20
    },
    errorMessage:{
        fontSize: 16,
        color:'red',
        marginLeft: 15,
        marginBottom: 15
    }
});

export default SignupScreen;