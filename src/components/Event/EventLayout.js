import React from 'react';
import classes from './EventLayout.module.css';
import Card from '../Ui/Card';
import SimpleExpansionPanel from '../Ui/MaterialCard'; 


// pass the cards into here 
const EventLayout = (props) => {
    // console.log(props.passedEvent);
    // const transformedEvents = Object.keys(props.passedEvent).map(eventKey => {
    //     return [...Array(props.passedEvent[eventKey])].map((id, i) => { 
    //         return <Card 
    //                     key={id}
    //                     type={id}>
    //                     venueName={}
                            
    //                     </Card>
    //     });
    // });
    // console.log("THIS IS TRANSFORMED EVENT", transformedEvents);
    return (
        <div className={classes.EventLayoutContainer}>
            {/* {transformedEvents} */}
            {props.passedEvent.map(item => (
                //<Card key={item.id} ID={item.id} ></Card>
                <SimpleExpansionPanel key={item.id} ID={item.id} ></SimpleExpansionPanel>
            ))}
        </div>
    )
}

export default EventLayout;