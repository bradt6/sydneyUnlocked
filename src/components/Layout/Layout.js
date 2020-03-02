import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

import NavBar from './NavBar';

const layout = (props) => (
    <Aux>
        <main className={classes.Container}>
            <div className={classes.Wrapper}>
                {/* CURRENTLY DISABLED THE NAVBAR FOR MVP */}
                {/* <NavBar></NavBar> */}
                {props.children}
            </div>
        </main>
    </Aux>
);

export default layout