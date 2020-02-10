import React from 'react';
import classes from './EventLayout.module.css';
import Card from '../Ui/Card'


// pass the cards into here 
const EventLayout = (props) => {
    console.log(props.passedEvent);
    const transformedEvents = Object.keys(props.passedEvent).map(eventKey => {
        return [...Array(props.passedEvent[eventKey])].map((id, i) => { 
            return <Card key={id} type={id}></Card>
        });
    });
    console.log("THIS IS TRANSFORMED EVENT", transformedEvents);
    return (
        <div className = {classes.EventLayout}>
            {transformedEvents}
        </div>
    )
}

export default EventLayout;