import React from 'react';
import classes from './EventLayout.module.css';
import Card from '../Ui/Card';
import ExpandingCard from '../Ui/ExpandingCard';

import Aux from '../../hoc/Aux';


// pass the cards into here 
const EventLayout = (props) => {
    return (
        <Aux>
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