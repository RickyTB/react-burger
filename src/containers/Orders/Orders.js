/**
 * Created by Ricardo Baquero on 7/12/17.
 * Copyright BuenPlan, 2017.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";

import Order from "../../components/Order/Order";
import axios from '../../axios-orders';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from '../../store/actions/';
import Spinner from "../../components/UI/Spinner/Spinner";


class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        return !this.props.loading ? (
            <div>
                {this.props.orders.map(order => <Order key={order.id}
                                                       ingredients={order.ingredients}
                                                       price={+order.price}/>)}
            </div>
        ) : <Spinner />;
    }
}

const mapStateToProps = ({auth: {token, userId}, order: {orders, loading}}) => {
    return {
        token,
        orders,
        loading,
        userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));