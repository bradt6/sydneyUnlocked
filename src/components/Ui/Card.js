import React from 'react';
import classes from './Card.module.css';

const card = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.topRow}>
            <p>{props.ID}</p>
            </div>

            <div className={classes.middleRow}>

            </div>

            <div className={classes.bottomRow}>

                
            </div>

        </div>
    )
};

export default card;