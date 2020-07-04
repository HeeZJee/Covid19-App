import React, { createContext } from 'react';
import axios from 'axios'






export const ContextAPI = createContext({});


const ContextProvider = ({ children }) => {



    const fetchSummary = async () => {

        try {
            const { data: { Global } } = await axios.get('https://api.covid19api.com/summary')

            return { Global }
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <ContextAPI.Provider value={{ fetchSummary }}>
            {children}
        </ContextAPI.Provider >
    )

}
export default ContextProvider;