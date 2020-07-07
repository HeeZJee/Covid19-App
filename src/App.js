import React from 'react';
import { Cards, Selector, Chart } from './components';
import ContextProvider from './store/context'

const App = () => {
    return (
        <ContextProvider>
            <Selector />
            <Cards />
            <Chart />
        </ContextProvider>
    )
};

export default App;
