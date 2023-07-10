import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer.js';

const initialState = {
    transactions:  [ 
        ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) => {
const[state,dispatch] = useReducer(AppReducer,initialState);
// Action 
function deleteTransaction(id){
    dispatch({
        type:'DELETE_TRANSACTION',
        payload:id // id is sent
    });
}
function addTransaction(transaction){
    dispatch({
        type:'ADD _TRANSACTION',
        payload:transaction // object is sent that is transaccion is sent
    });
}

return (<GlobalContext.Provider value={{
    transactions:state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>)
}
