import createDataContext from './createDataContext';
import {AsyncStorage} from 'react-native';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';


const authReducer = (state,action) =>{
    switch(action.type){
        case 'add_error':
            return {...state,errorMessage: action.payload};
        case 'signup':
            return {errorMessage:'',token:action.payload};
        case 'signin':
            return {errorMessage:'',token:action.payload};
        case 'clear_error':
            return {...state,errorMessage:''};
        case 'signout':
            return {token:null,errorMessage:''};
        default:
            return state;
    }
};

const clearErrorMessage = dispatch => ()=>{
    dispatch({type:'clear_error'})
};

const tryLocalSignIn = dispatch => async () =>{
    const token= await AsyncStorage.getItem('token');
    if(token){
        dispatch({type:'signin',payload:token});
        navigate('TrackList');
    }
    else{
        navigate('Signup');
    }
};

const signup = (dispatch)=>{
  return async ({email,password})=>{
      try{
          const response = await  trackerApi.post('/signup',{email:email,password:password});
          await AsyncStorage.setItem('token',response.data.token);
          dispatch({type:'signup',payload:response.data.token});
          navigate('TrackList');
      }
      catch(err){
          dispatch ({type: 'add_error' ,payload: 'Something went wrong'})
      }
    };
};

const signin = (dispatch)=>{
  return async ({email,password})=>{
      try{
          const response = await trackerApi.post('/signin',{email:email,password:password});
          await AsyncStorage.setItem('token',response.data.token);
          dispatch({type:'signin',payload:response.data.token});
           navigate('TrackList');
      }
      catch(err){
           dispatch ({type: 'add_error' ,payload: 'Incorrect password or email'})
      }
    };
};

const signout = (dispatch)=>{
  return async ()=>{
      await AsyncStorage.removeItem('token');
      dispatch({type:'signout'});
      navigate('loginFlow');
    };
};


export const {Provider,Context} = createDataContext(authReducer,{signup,signin,signout,clearErrorMessage,tryLocalSignIn},{token: null,errorMessage:''});