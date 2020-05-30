import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-navigation';
const AccountScreen = ()=>{
    const {signout} = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{top:'always'}}>
            <Text h3 style={{marginLeft:60}}> 
                AccountScreen
            </Text>
            <Spacer>
            <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({

});

export default AccountScreen;