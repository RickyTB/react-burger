/**
 * Created by Ricardo Baquero on 8/12/17.
 * Copyright BuenPlan, 2017.
 */
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";

import * as actions from '../../../store/actions/';

class Logout extends Component {

    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return <Redirect to="/"/>;
    }
}

export default connect(null, {onLogout: actions.logout})(Logout);