import {createContext,useContext} from 'react';

const Context = createContext({});

export const ContextProvider = Context.Provider;

export function GetContextData(){
     const MyContext = useContext(Context);
     return MyContext;
}

