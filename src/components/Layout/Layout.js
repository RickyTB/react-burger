/**
 * Created by Ricardo Baquero on 1/12/17.
 * Copyright BuenPlan, 2017.
 */
import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;