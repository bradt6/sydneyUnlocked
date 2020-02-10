import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    <Aux>
        <main className={classes.Container}>
            <div className={classes.Wrapper}>
                {props.children}
            </div>
        </main>
    </Aux>
);

export default layout