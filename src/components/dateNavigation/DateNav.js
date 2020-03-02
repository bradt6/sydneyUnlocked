import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TimeContainer from '../Event/timeContainer';
import CSSclasses from '../Event/EventLayout.module.css';

import dayjs, { Dayjs } from 'dayjs';
import axios from 'axios';

const current = dayjs();
var isoArr = []
const populateDays = () => {
    console.log("populateDaysCalled")
    for (var i = 0; i < 7; i++) {
        const dayToAdd = current.add(i, 'day').format('YYYY-MM-DD');
        isoArr.push(dayToAdd);
    }
}
populateDays();


function TabPanel(props) {
    const { children, value, index,  ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const ScrollableTabsButtonAuto = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(true);
    const [getEvents, setEvents] = React.useState(new Map());
    var objectsDic = new Map();

    const handleChange = (event, newValue) => {
        console.log("HANDLE CHANGE: ", newValue)
        console.log("EVEnt: ", event)
        setIsLoading(true);
        setValue(newValue);
    };
    console.log(isoArr);
            
    React.useEffect(() => {
        console.log(getEvents.has(isoArr[value]));
        console.log("IN THE USE EFFECT: ", isoArr[value]);
        if (getEvents.has(isoArr[value])){
            console.log("USEEFFECT In the fetch if")
            setIsLoading(false);
        } else { 
            console.log("USEEFFECT IN the fetch else");
            console.log("CURRENT STATE OF GETEVENTS: ", getEvents);
        axios.get('https://gc5o17bgv6.execute-api.ap-southeast-2.amazonaws.com/dev/get-events/all/' + '?ISO_Date=' + isoArr[value])
        .then(response => {
            console.log(response);
            // let objectsDic = new Map();
            const data = JSON.parse(response.data.body);
            const dataObjects = data.map(event => ({
                id: event.EventID,
                eventName: event.event_name[0],
                venueName: event.venue_name,
                date: event.Full_date,
                startTime: event.start_time,
                endTime: event.end_time,
                ticketLink: event.ticketLink,
                detailed_start: event.detailedStart,
                description: event.description
            }));
            // objectsDic.set(isoArr[value], [...dataObjects]);
            // setEvents(objectsDic);
            setEvents(getEvents.set(isoArr[value], [...dataObjects]));
            // setEvents(getEvents => getEvents );
            // setEvents(isoArr[value], [...dataObjects]);
            console.log("OBJECT DIC IN AXOS AKA GETEVENTS", getEvents);
            setIsLoading(false);
            // console.log(response.data.body);
            // appendToEvents(response.data.body, isoArr[value])
            // appendToEvents(response, isoArr[value])
        });
    }
    }, [value]);
            
            
    console.log("Is there an GETEVENTS",typeof getEvents);
    console.log("Is there an GETEVENTS",getEvents);
    if (typeof getEvents === 'object') {
        console.log("In the the print get events IF block: ", getEvents.get("2020-02-22"));
        console.log("In the the print get events IF block: ", getEvents.get(isoArr[0]));
        console.log("In the the print get events IF block: ", getEvents.get(isoArr[6]));
    }
    
    if (isLoading) {
        return <div>loading ....</div>
    } 
    if (typeof getEvents === 'object'){
    return (
        <div className = { CSSclasses.EventLayoutContainer } >
            <div>
                <p>{console.log("THIS IS IN THE ELSE RETURN")}</p>
                <p>{console.log(isoArr[value])}</p>
                <p>{console.log(getEvents.get(isoArr[value]))}</p>
                <p>{console.log(isLoading)}</p>
            </div>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    <Tab label={dayjs(isoArr[0]).format('ddd-D')} {...a11yProps(0)} />
                    <Tab label={dayjs(isoArr[1]).format('ddd-D')} {...a11yProps(1)} />
                    <Tab label={dayjs(isoArr[2]).format('ddd-D')} {...a11yProps(2)} />
                    <Tab label={dayjs(isoArr[3]).format('ddd-D')} {...a11yProps(3)} />
                    <Tab label={dayjs(isoArr[4]).format('ddd-D')} {...a11yProps(4)} />
                    <Tab label={dayjs(isoArr[5]).format('ddd-D')} {...a11yProps(5)} />
                    <Tab label={dayjs(isoArr[6]).format('ddd-D')} {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            {/* {isLoading && <div></div>} */}
    <TabPanel value={value} index={0}>
            {console.log("VALUE: ", value)}

            <TimeContainer passedEvent={getEvents.get(isoArr[value])}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={1}>
                <TimeContainer passedEvent={ getEvents.get(isoArr[value]) }></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={2}>
                <TimeContainer passedEvent={getEvents.get(isoArr[value])}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={3}>
                <TimeContainer passedEvent={getEvents.get(isoArr[value])}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={4}>
                <TimeContainer passedEvent={getEvents.get(isoArr[value])}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={5}>
                <TimeContainer passedEvent={getEvents.get(isoArr[value])}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={6}>
                <TimeContainer passedEvent={getEvents.get(isoArr[value])}></TimeContainer>
      </TabPanel>
        </div>
    );
    } else {
        return (
            <div>
                <p>Not an object ....</p>
            </div>
        )
    }
}

export default ScrollableTabsButtonAuto;