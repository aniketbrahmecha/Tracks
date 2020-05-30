import '../_mockLocation';
import React,{useEffect,useState,useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {requestPermissionsAsync,watchPositionAsync,Accuracy} from 'expo-location';
import Map from '../components/Map';
import {SafeAreaView} from 'react-navigation';
import { Context as LocationContext} from '../context/LocationContext';


const TrackCreateScreen = ()=>{
    const {addLocation} = useContext(LocationContext);
    const [err,setErr] = useState('');

    const startWatching = async () =>{
        try{
            const response = await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval: 10

            },
            location =>{
                addLocation(location);
            });
        }catch(e){
            setErr(e);
        }
    };
    useEffect(()=>{
        startWatching();
    },[]); 
    return (
        <SafeAreaView  forceInset={{top:'always'}}>
            <Text h3 style={{marginLeft:40}} >
                TrackCreateScreen
            </Text >
            <Map />
            {err ? <Text>Please enable location service</Text>:null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;