import React, { useContext, useState, useEffect } from 'react'
import { ContextAPI } from './../../store/context';
import { FormControl, makeStyles, InputLabel, Select, } from '@material-ui/core'



const useStyle = makeStyles({
    container: {
        minWidth: '70%',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
    }
})

const Selector = () => {
    const styles = useStyle()
    const { fetchCountries, actionHandler } = useContext(ContextAPI)
    const [countries, setCountries] = useState([])
    useEffect(() => {
        (async () => {
            const countriesList = await fetchCountries()
            setCountries(countriesList)
        })()

    }, [fetchCountries])



    const updateCountry = (e) => {
        const country = e.target.value
        actionHandler(country)
    }


    return (
        <div>
            <FormControl variant="filled" className={styles.container}>
                <InputLabel shrink htmlFor="filled-country-native-simple">Select Region</InputLabel>
                <Select
                    native
                    defaultValue={''}
                    onChange={updateCountry}
                    inputProps={{
                        name: 'country',
                        id: 'filled-country-native-simple',
                    }}
                >
                    <option aria-label="None" value=''>Global</option>
                    {
                        countries.map((country, index) => (
                            <option value={country} key={index}>{country}</option>
                        )
                        )
                    }
                </Select>
            </FormControl>
        </div>
    )
}

export default Selector
