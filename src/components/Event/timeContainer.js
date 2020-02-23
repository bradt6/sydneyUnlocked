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
    return(
        // <div className={CSSclasses.EventLayoutContainer}>
    <Aux>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            

            {/* {Object.keys(props.passedEvent).map(function(item,index) {
                <Grid className={classes.test} key={item.id}>
                    <EventContainer
                        key={props.passedEvent[item].id}
                        ID={props.passedEvent[item].id}
                        venueName={props.passedEvent[item].venueName}
                        eventName={props.passedEvent[item].eventName}
                        startTime={props.passedEvent[item].startTime}
                        endTime={props.passedEvent[item].endTime}
                        date={props.passedEvent[item].date}
                        ticketLink={props.passedEvent[item].ticketLink}>
                    </EventContainer>
                </Grid>
            })} */}
 
            
            {props.passedEvent.map(item => (
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
                        ticketLink={item.ticketLink}>
                    </EventContainer>
                </Grid>
            ))}
        </Grid>
    </Aux>
    // </div>
    );

}

export default TimeContainer;