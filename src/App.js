import React from 'react';
import { Cards, Chart, Selector } from './components';
import ContextProvider from './store/context'

const App = () => {
    return (
        <ContextProvider>
            <Cards />
            <Chart />
            <Selector />
        </ContextProvider>
    )
};

export default App;
