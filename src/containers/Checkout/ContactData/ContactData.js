/**
 * Created by Ricardo Baquero on 7/12/17.
 * Copyright BuenPlan, 2017.
 */
import React, {Component} from 'react';
import {connect} from "react-redux";

import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from "../../../store/actions/";

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ricardo Baquero',
                address: {
                    street: 'Teststreet 68',
                    zipCode: '12345',
                    country: 'USA'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        this.props.onOrderBurger(order);
    };

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {this.props.loading ? <Spinner /> : (
                    <form>
                        <input className={classes.Input} type="text" name="name" placeholder="Your Name"/>
                        <input className={classes.Input} type="email" name="email" placeholder="Your Mail"/>
                        <input className={classes.Input} type="text" name="street" placeholder="Street"/>
                        <input className={classes.Input} type="text" name="postal" placeholder="Postal Code"/>
                        <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
                    </form>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({burgerBuilder: {ingredients, totalPrice}, order: {loading}}) => {
    return {
        ingredients,
        price: totalPrice,
        loading
    }
};

export default connect(mapStateToProps, {onOrderBurger: actions.purchaseBurger})(withErrorHandler(ContactData, axios));