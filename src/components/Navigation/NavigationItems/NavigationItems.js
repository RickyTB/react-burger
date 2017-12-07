/**
 * Created by Ricardo Baquero on 3/12/17.
 * Copyright BuenPlan, 2017.
 */
import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
);

export default navigationItems;