/**
 * Created by Ricardo Baquero on 2/12/17.
 * Copyright BuenPlan, 2017.
 */
import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;