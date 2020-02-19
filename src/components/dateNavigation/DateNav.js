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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    console.log(isoArr);

    return (
        <div className = { CSSclasses.EventLayoutContainer } >
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
                    <Tab label= {dayjs(isoArr[0]).format('ddd-D')} {...a11yProps(0)} />
                    <Tab label={dayjs(isoArr[1]).format('ddd-D')} {...a11yProps(1)} />
                    <Tab label={dayjs(isoArr[2]).format('ddd-D')} {...a11yProps(2)} />
                    <Tab label={dayjs(isoArr[3]).format('ddd-D')} {...a11yProps(3)} />
                    <Tab label={dayjs(isoArr[4]).format('ddd-D')} {...a11yProps(4)} />
                    <Tab label={dayjs(isoArr[5]).format('ddd-D')} {...a11yProps(5)} />
                    <Tab label={dayjs(isoArr[6]).format('ddd-D')} {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <TimeContainer passedEvent={props.passedEvent}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={1}>
                <TimeContainer passedEvent={props.passedEvent}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={2}>
                <TimeContainer passedEvent={props.passedEvent}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={3}>
                <TimeContainer passedEvent={props.passedEvent}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={4}>
                <TimeContainer passedEvent={props.passedEvent}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={5}>
                <TimeContainer passedEvent={props.passedEvent}></TimeContainer>
      </TabPanel>
            <TabPanel value={value} index={6}>
                <TimeContainer passedEvent={props.passedEvent}></TimeContainer>
      </TabPanel>
        </div>
    );
}

export default ScrollableTabsButtonAuto;