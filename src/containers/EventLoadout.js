import React, { Component } from 'react';

import Aux from '../hoc/Aux'
import EventContainer from '../components/Event/EventLayout';
import TimeContainer from '../components/Event/timeContainer';
import ScrollableTabs from '../components/dateNavigation/DateNav';

import dayjs, {Dayjs} from 'dayjs';

// const current = dayjs();
// var isoArr = []
// const populateDays = () => {
//     for (var i = 0; i < 7; i++) {
//         const dayToAdd = current.add(i, 'day').format('YYYY-MM-DD');
//         isoArr.push(dayToAdd);
//     }
// }

class EventLoadout extends Component {
    // use this to maintain dictionary of visited values of days
    state = {

    }

    current_event = [
        {
            id: 'YUIDYSAJHJDK21343124',
            eventName: 'Australia party',
            venueName: 'Ivy',
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
        },
    ];

    

    // componentDidMount() {
    //     populateDays()
    //     console.log(isoArr);
    //     console.log(typeof isoArr[0]);
    //     console.log(dayjs(isoArr[0]).format('ddd-D'));
    // }
    render() {
        return (
            <Aux>
                <ScrollableTabs passedEvent={this.current_event}>    
                </ScrollableTabs>

                {/* <TimeContainer passedEvent={this.current_event}>
                <EventContainer passedEvent={this.current_event}> </EventContainer>
                </TimeContainer> */}
            </Aux>   
        );
    }
}

export default EventLoadout;