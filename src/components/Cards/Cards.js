import React, { useContext, useState, useEffect } from 'react'
import { ContextAPI } from './../../store/context'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, Typography, CircularProgress } from '@material-ui/core'
import ArrowDropUpRoundedIcon from '@material-ui/icons/ArrowDropUpRounded';
import CountUp from 'react-countup';
import cx from 'classnames';

import virus from './../../images/virus.svg'

const virusSVG = virus


const useStyle = makeStyles({
    grid: {
    },
    card: {
        color: '#fff',
        margin: 'auto 15px',
        marginTop: '1rem',
        minHeight: '210px',
        boxSizing: 'border-box',
        backgroundImage: `url(${virusSVG})`,
        backgroundPosition: '110% 190%',
        backgroundSize: '200px 190px',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
        borderTop: '5px #333 solid',
    },
    confirm: {
        backgroundColor: 'rgb(0,122,225)',
    },
    recover: {
        backgroundColor: 'rgb(59,199,89)',
    },
    death: {
        backgroundColor: 'rgb(212,59,48)',
    },
    subtitle1: {
        color: '#efefef !important',
    },
    childCard: {
        backgroundColor: ' rgba(0,0,0, 0.15)',
        color: '#fff',
        padding: '10px !important',
        boxSizing: 'border-box',
        marginTop: '0.5rem !important',
    },
});




function Cards() {
    const styles = useStyle();

    const { fetchSummary } = useContext(ContextAPI)
    const [state, setstate] = useState({})
    const [isLoading, setLoading] = useState(false)



    useEffect(

        () => {
            const FetchedAPI = async () => {
                setLoading(true)
                const { Global } = await fetchSummary()
                setstate(Global)
                setLoading(false)
            }
            FetchedAPI()

        }, [fetchSummary])

    console.log(state)




    return (
        <Grid container justify="space-evenly" >
            <Grid item xs={12} sm={4} md={4}>
                <Card className={cx(styles.card, styles.confirm)} >
                    <CardContent >
                        {isLoading
                            ? <CircularProgress color='inherit' />
                            : (
                                <>
                                    <Typography variant={'h4'}>
                                        <CountUp start={0} end={state.TotalConfirmed} duration={2.5} separator=',' />
                                    </Typography>
                                    <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                        CONFIRMED
                                    </Typography>
                                    <Card className={styles.childCard} variant='outlined'>
                                        <Typography variant={'h5'}>
                                            <CountUp start={0} end={state.NewConfirmed} duration={2.5} separator=',' />
                                            <ArrowDropUpRoundedIcon fontSize='large' />

                                        </Typography>
                                        <Typography variant={'subtitle2'} >
                                            New Confirmed
                                    </Typography>
                                    </Card>
                                </>
                            )}
                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
                <Card className={cx(styles.card, styles.recover)}>
                    <CardContent>
                        {isLoading
                            ? <CircularProgress color='inherit' />
                            : (
                                <>
                                    <Typography variant={'h4'} >
                                        <CountUp start={0} end={state.TotalRecovered} duration={2.5} separator=',' />
                                    </Typography>
                                    <Typography variant={'subtitle1'} className={styles.subtitle1}>
                                        RECOVERED
                                    </Typography>
                                    <Card className={styles.childCard} variant='outlined'>
                                        <Typography variant={'h5'}>
                                            <CountUp start={0} end={state.NewRecovered} duration={2.5} separator=',' />
                                            <ArrowDropUpRoundedIcon fontSize='large' />

                                        </Typography>
                                        <Typography variant={'subtitle2'} >
                                            New Recovered
                                    </Typography>
                                    </Card>
                                </>
                            )}
                    </CardContent>
                </Card>
            </Grid>


            <Grid item xs={12} sm={4} md={4}>
                <Card className={cx(styles.card, styles.death)} >
                    <CardContent>
                        {isLoading
                            ? <CircularProgress color='inherit' />
                            : (
                                <>
                                    <Typography variant={'h4'}>
                                        <CountUp start={0} end={state.TotalDeaths} duration={2.5} separator=',' />

                                    </Typography>
                                    <Typography variant={'subtitle1'} className={styles.subtitle1} >
                                        DEATHS
                                    </Typography>
                                    <Card className={styles.childCard} variant='outlined'>
                                        <Typography variant={'h5'}>
                                            <CountUp start={0} end={state.NewDeaths} duration={2.5} separator=',' />
                                            <ArrowDropUpRoundedIcon fontSize='large' />

                                        </Typography>
                                        <Typography variant={'subtitle2'} >
                                            New Deaths
                                    </Typography>
                                    </Card>
                                </>
                            )}
                    </CardContent>
                </Card>
            </Grid>

        </Grid >
    )

}

export default Cards
