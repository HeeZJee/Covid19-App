import React, { useContext, useState, useEffect } from 'react'
import { ContextAPI } from './../../store/context';
import { Select, FormControl, makeStyles } from '@material-ui/core'



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
        handleCountry(e.target.value)

    }

    const handleCountry = (country) => {
        actionHandler(country)

    }



    return (
        <div>
            <FormControl variant="outlined" className={styles.container}>
                <Select
                    native
                    defaultValue={''}
                    onChange={updateCountry}
                    label="Age"
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option value={''}>Global</option>
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
