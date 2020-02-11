import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const timeContainer = (props) => {
    const classes = useStyles();
    <div className={classes.root}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >


        </Grid>


    </div>

}

export default timeContainer