/**
 * Created by Ricardo Baquero on 6/12/17.
 * Copyright BuenPlan, 2017.
 */
import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {

    checkoutCanceled = () => {
        this.props.history.goBack();
    };

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return this.props.ingredients && !this.props.purchased ? (
            <div>
                <CheckoutSummary
                    ingredients={this.props.ingredients}
                    checkoutCanceled={this.checkoutCanceled}
                    checkoutContinued={this.checkoutContinued}/>
                <Route path={this.props.match.path + '/contact-data'}
                       component={ContactData}/>
            </div>
        ) : <Redirect to="/"/>;
    }
}

const mapStateToProps = ({burgerBuilder: {ingredients}, order: {purchased}}) => {
    return {
        ingredients,
        purchased
    };
};

export default connect(mapStateToProps)(Checkout);