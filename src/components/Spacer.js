import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';

const Spacer = ({children})=>{
    return (
        <View style={styles.spacer}>{children}</View>
    );
};

const styles = StyleSheet.create({
    spacer:{
        margin: 13
    }
});

export default Spacer;