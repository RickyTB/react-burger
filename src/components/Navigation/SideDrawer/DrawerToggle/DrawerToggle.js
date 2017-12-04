/**
 * Created by Ricardo Baquero on 3/12/17.
 * Copyright BuenPlan, 2017.
 */
import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
    <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;