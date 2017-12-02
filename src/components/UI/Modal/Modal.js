/**
 * Created by Ricardo Baquero on 1/12/17.
 * Copyright BuenPlan, 2017.
 */
import React from 'react';

import classes from './Modal.css';

const modal = (props) => (
    <div className={classes.Modal}>
        {props.children}
    </div>
);

export default modal;