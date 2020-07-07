import React from 'react';
import { Cards, Selector, Chart, Footer } from './components';
import ContextProvider from './store/context'
import styles from './App.module.css'
import logo from './images/logo.png'





const App = () => {

    return (
        <ContextProvider>

            <div className={styles.container}>
                <img src={logo} className={styles.image} alt='2019 nCovid Tracker' ></img>
                <Selector />
                <Cards />
                <Chart />
            </div>
            <Footer />
        </ContextProvider >
    )
};

export default App;
