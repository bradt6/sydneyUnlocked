import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EventContainer from './EventLayout';
import { red } from '@material-ui/core/colors'

import CSSclasses from './EventLayout.module.css';
import Aux from '../../hoc/Aux';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        zIndex: 10,
    },
    test: {
        backgroundColor: red[500],
        padding:10,
        margin: 10,
    }
}));

// THIS WILL BE TO GROUP FOR TIME 
const TimeContainer = (props) => {
    const classes = useStyles();
    const [getTimeslot, setTimeslot] = React.useState(new Map());
    const [isLoading, setIsLoading] = React.useState(true);
    var orderedKeys = []
    var orderSet = new Set()

    React.useEffect(() => {
        props.passedEvent.map((event, index) => {
            console.log("Event Name: ", event.eventName)
            let startTime = event.startTime;
            if (!getTimeslot.has(startTime)) {
                setTimeslot(getTimeslot.set(startTime, [props.passedEvent[index]]));
                console.log("The current entries IF")
            } else {
                let currentEntries = getTimeslot.get(startTime);
                currentEntries.push(props.passedEvent[index]);
                console.log("The current entries ELSE")
                setTimeslot(getTimeslot.set(startTime, currentEntries));
            }  
        })
        setIsLoading(false);
    })

    if (!isLoading){
        for (let key of getTimeslot.keys()) {
            orderedKeys.push(key);
        } 
        orderedKeys.sort()
        orderSet = (new Set(orderedKeys));
    }

    return(
    <Aux>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >

                {[...orderSet].map(key => (
                <Grid className = {classes.test} key = {key}>
                    <h3>{key}</h3>
                    {console.log("HERE", key)}
                    {console.log("HERE", orderSet)}
                    {getTimeslot.get(key).map(value => (
                        <EventContainer
                            key={value.id}
                            ID={value.id}
                            venueName={value.venueName}
                            eventName={value.eventName}
                            startTime={value.startTime}
                            endTime={value.endTime}
                            date={value.date}
                            ticketLink={value.ticketLink}
                            description={value.description}>
                        </EventContainer>
                    ))}
                </Grid>
            ))}
            </Grid>

            {/* {props.passedEvent.map(item => (
                <Grid className={classes.test} key={item.id}>
                    <h3>STARTING TIME</h3>
                    <EventContainer
                        key={item.id}
                        ID={item.id}
                        venueName={item.venueName}
                        eventName={item.eventName}
                        startTime={item.startTime}
                        endTime={item.endTime}
                        date={item.date}
                        ticketLink={item.ticketLink}
                        description={item.description}>
                    </EventContainer>
                </Grid>
            ))}
        </Grid> */}
    </Aux>
    );
    
}

export default TimeContainer;