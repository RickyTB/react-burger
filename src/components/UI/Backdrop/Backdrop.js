/**
 * Created by Ricardo Baquero on 1/12/17.
 * Copyright BuenPlan, 2017.
 */
import React from 'react';

import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;