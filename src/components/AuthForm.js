import React,{useState} from 'react';
import {Text,Input,Button} from 'react-native-elements';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import Spacer from './Spacer';

const AuthForm = ({headerText,errorMessage,onSubmit,submitButtonText})=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        <View>
        <Text h3>{headerText}</Text>
        <Input 
                label="Email"
                value = {email}
                onChangeText={(new_email)=> setEmail(new_email) }
                autoCapitalize="none"
                autoCorrect={true}
        />
        <Spacer />
        <Input 
                label="Password"
                value={password} 
                autoCapitalize="none"
                autoCorrect={true}
                secureTextEntry={true}
                onChangeText= {(new_password)=> setPassword(new_password)}
                 />
            {errorMessage ? (<Text style={styles.errorMessage}>{errorMessage}</Text>):null}
            <Spacer>
                       <Button title={submitButtonText} onPress={()=> onSubmit({email,password})} />
            </Spacer>
        </View>
    );
  
};

const styles = StyleSheet.create({
     errorMessage:{
        fontSize: 16,
        color:'red',
        marginLeft: 15,
        marginBottom: 15
    }
});

export default AuthForm;