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
                //<Card key={item.id} ID={item.id} ></Card>
                <ExpandingCard key={item.id} ID={item.id} ></ExpandingCard>
            ))}
        </div>
    )
}

export default EventLayout;