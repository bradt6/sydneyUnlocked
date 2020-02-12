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

function TabPanel(props) {
    const { children, value, index, ...other } = props;

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
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
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