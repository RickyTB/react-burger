/**
 * Created by Ricardo Baquero on 7/12/17.
 * Copyright BuenPlan, 2017.
 */
import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (orderId, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId,
        orderData
    };
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error
    };
};

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const purchaseBurger = (orderData, token) => {
  return dispatch => {
      dispatch(purchaseBurgerStart());
      axios.post('/orders.json?auth=' + token, orderData)
          .then(response => {
              dispatch(purchaseBurgerSuccess(response.data.name, orderData));
          })
          .catch(err => {
              dispatch(purchaseBurgerFail(err));
          });
  };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    };
};

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        axios.get('/orders.json' + queryParams)
            .then(res => {
                const fetchedOrders = Object.keys(res.data).map(key => {
                    return {...res.data[key], id: key}
                });
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(err => {
                dispatch(fetchOrdersFail(err));
            })
    };
};