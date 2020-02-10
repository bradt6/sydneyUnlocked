import React, { Component } from 'react';

import Aux from '../hoc/Aux'
import EventContainer from '../components/Event/EventLayout'

class EventLoadout extends Component {

    // use this to maintain dictionary of visited values of days
    state = {

    }

    current_event = [
        {
            id: 'YUIDYSAJHJDK21343124',
            venueName: 'Australia party',
            eventName: 'Ivy',
            date: '10/02.20',
            startTime: '2000',
            endTime: '0100',
            ticketLink: 'www.example.com'
        },
        {
            id: 'HKFHDSJKFHJKSDHFJ',
            venueName: 'WOOOOOO',
            eventName: 'Zepher',
            date: '10/02.20',
            startTime: '2000',
            endTime: '0100',
            ticketLink: 'www.Zepher.com'
        }]

    render() {
        return (
            <Aux>
                <div>Dates</div>
                <EventContainer passedEvent={this.current_event}> </EventContainer>
            </Aux>   
        );
    }
}

export default EventLoadout;