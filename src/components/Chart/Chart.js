import React, { useContext, useState, useEffect } from 'react';
import { ContextAPI } from './../../store/context';
import { Line } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core';



const useStyle = makeStyles({
    popup:
    {
        textAlign: 'center',
        minWidth: 'min-content',
        marginTop: '1rem',
        padding: '0.5rem',
        border: 'solid 1px rgb(212,59,48)',
        backgroundColor: 'rgba(212,59,48,0.3)',
        color: 'rgb(212,59,48)'
    },
})

function Chart() {
    const styles = useStyle()
    const { fetchTimeline } = useContext(ContextAPI)
    const [timeline, setTimeline] = useState({})
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const data = await fetchTimeline()
            setTimeline(data)
            setLoading(false)
        })()

    }, [fetchTimeline])


    const lineChart = (
        timeline && timeline.cases ?

            <Line
                data={{
                    labels: Object.entries(timeline.cases).map(([key]) => (new Date(key).toDateString())),
                    datasets: [{
                        data: Object.entries(timeline.cases).map(([key, value]) => (value)),
                        label: 'Confirmed',
                        borderColor: 'rgb(0,122,225)',
                        backgroundColor: 'rgba(0,122,225,0.7)',
                        fill: true,
                    },
                    {
                        data: Object.entries(timeline.recovered).map(([key, value]) => (value)),
                        label: 'Recovered',
                        borderColor: 'rgb(59,199,89)',
                        backgroundColor: 'rgba(59,199,89,0.7)',

                        fill: true,
                    },
                    {
                        data: Object.entries(timeline.deaths).map(([key, value]) => (value)),
                        label: 'Deaths',
                        borderColor: 'rgb(212,59,48)',
                        backgroundColor: 'rgba(212,59,48,0.7)',
                        fill: true,
                    },
                    ],
                }}
            />

            : <div > {isLoading ? null : <pre className={styles.popup}>Historic data of this country is not available</pre>}</div >
    )



    return (
        <div>
            {lineChart}
        </div>
    )
}

export default Chart;

