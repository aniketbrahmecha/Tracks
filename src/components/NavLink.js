import React from 'react';
import {Text,Input,Button} from 'react-native-elements';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';

const NavLink = ({navigation,textToShow,routeName}) =>{
    return(
        <View>
            <TouchableOpacity  onPress={()=>navigation.navigate(routeName)}>
                <Text style={styles.link} h7>{textToShow}</Text>
            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    
    link:{
        color:'blue',
        marginLeft:70
    }

});

export default withNavigation(NavLink); 