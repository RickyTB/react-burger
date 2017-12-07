/**
 * Created by Ricardo Baquero on 6/12/17.
 * Copyright BuenPlan, 2017.
 */
import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);

        let price = 0;
        const ingredients = [...query.entries()].reduce((obj, param) => {
            if (param[0] === 'price') {
                price = param[1];
                return obj;
            }
            obj[param[0]] = +param[1];
            return obj;
        }, {});

        this.setState({ingredients, totalPrice: price});
    }

    checkoutCanceled = () => {
        this.props.history.goBack();
    };

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCanceled={this.checkoutCanceled}
                    checkoutContinued={this.checkoutContinued}/>
                <Route path={this.props.match.path + '/contact-data'}
                       render={(props) => <ContactData ingredients={this.state.ingredients}
                                                  price={this.state.totalPrice} {...props} />}/>
            </div>
        );
    }
}

export default Checkout;