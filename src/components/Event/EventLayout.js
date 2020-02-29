import React from 'react';
import classes from './EventLayout.module.css';
import Card from '../Ui/Card';
import ExpandingCard from '../Ui/ExpandingCard';

import Aux from '../../hoc/Aux';


// pass the cards into here 
const EventLayout = (props) => {
    return (
        <Aux>
            {/* {transformedEvents} */}
            {/* {props.passedEvent.map(item => (
                <ExpandingCard key={item.id}
                ID={item.id}
                venueName={item.venueName} 
                eventName={item.eventName} 
                startTime={item.startTime}
                endTime={item.endTime}
                date={item.date}
                ticketLink={item.ticketLink}
                ></ExpandingCard>
            ))} */}
            <ExpandingCard key={props.id}
                ID={props.id}
                venueName={props.venueName}
                eventName={props.eventName}
                startTime={props.startTime}
                endTime={props.endTime}
                date={props.date}
                ticketLink={props.ticketLink}
                description={props.description}>
            </ExpandingCard>
        </Aux>
    )
}

export default EventLayout;