import React,{useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation';
const SigninScreen = ()=>{
     const { state, signin,clearErrorMessage } = useContext(Context);
    return (
        <View style={styles.container}>
        <NavigationEvents
            onWillBlur={clearErrorMessage}
         />
            <AuthForm
                headerText="Sign in "
                errorMessage={state.errorMessage}
                onSubmit={signin}
                submitButtonText="Sign In"
            />
            <NavLink textToShow="Don't have an account? Sign up instead" routeName="Signup"/>
        </View>
    );
};
SigninScreen.navigationOptions = () =>{
    return {
        header:null
    };
};

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        marginBottom: 20
    }
});

export default SigninScreen;