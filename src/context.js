import {createContext, useContext} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Crypto = createContext();

const Context =({children})=>{
    const [currency, setCurrency] = useState("USD");
    const [symbol,setSymbol] = useState("$")

    useEffect(()=>{
        currency === "USD" && setSymbol("$");
    },[currency])
    return(
        <Crypto.Provider value={{currency,symbol,setCurrency}}>
            {children}
        </Crypto.Provider>
    )
}

export default Context;

export const CryptoState =()=>{
    return useContext(Crypto);
}