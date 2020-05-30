import React,{useReducer} from 'react';

export default (reducer,actions,defaultValue) => {
    const Context = React.createContext();
    const Provider = ({children}) =>{
        
    
    const [state,dispatch] = useReducer(reducer,defaultValue);

    const boundingActions={};
    for(let key in actions){
        boundingActions[key] = actions[key](dispatch);
    }
    return (
        <Context.Provider value={{state,...boundingActions}}>
        {children}
        </Context.Provider>
    );

};
    return{
        Context: Context,Provider:Provider
    };

};