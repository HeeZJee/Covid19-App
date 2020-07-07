import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import { reducer } from './reducer'


let initialState = ''
export const ContextAPI = createContext({});


const fetchCountries = async () => {
    const { data } = await axios.get(`https://disease.sh/v3/covid-19/countries/`);

    const countries = data.map((country) => (country.country))
    return countries;
}




const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const actionHandler = (country) => {
        dispatch({
            type: 'SET_COUNTRY',
            payload: country,
        })
    }



    const fetchGlobal = async () => {

        let dynamicURL = `https://disease.sh/v3/covid-19/all`;
        let country = state;
        if (country) { dynamicURL = `https://disease.sh/v3/covid-19/countries/${country}` }

        try {
            const { data } = await axios.get(`${dynamicURL}`)
            return data
        }
        catch (error) {
            console.log(error)
        }
    }



    const fetchTimeline = async () => {
        let dynamicURL = `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
        let country = state;
        if (country) { dynamicURL = `https://disease.sh/v3/covid-19/historical/${country}?lastdays=all` }
        try {
            const { data } = await axios.get(`${dynamicURL}`)

            const timeline = data.timeline ? data.timeline : data

            return timeline;
        }
        catch (error) {
            console.log(error)
        }
    }



    return (
        <ContextAPI.Provider value={{ fetchGlobal, fetchTimeline, fetchCountries, actionHandler }}>
            {children}
        </ContextAPI.Provider >
    )

}
export default ContextProvider