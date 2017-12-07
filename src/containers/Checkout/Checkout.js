/**
 * Created by Ricardo Baquero on 6/12/17.
 * Copyright BuenPlan, 2017.
 */
import React, {Component} from 'react';

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 1,
            bacon: 1
        }
    };

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);

        const ingredients = [...query.entries()].reduce((obj, param) => {
            obj[param[0]] = +param[1];
            return obj;
        }, {});

        this.setState({ingredients});
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
            </div>
        );
    }
}

export default Checkout;