import React from 'react';
import classes from './EventLayout.module.css';
import Card from '../Ui/Card';
import ExpandingCard from '../Ui/ExpandingCard';


// pass the cards into here 
const EventLayout = (props) => {
    return (
        <div className={classes.EventLayoutContainer}>
            {/* {transformedEvents} */}
            {props.passedEvent.map(item => (
                <ExpandingCard key={item.id}
                ID={item.id}
                venueName={item.venueName} 
                eventName={item.eventName} 
                startTime={item.startTime}
                endTime={item.endTime}
                date={item.date}
                ticketLink={item.ticketLink}
                ></ExpandingCard>
            ))}
        </div>
    )
}

export default EventLayout;