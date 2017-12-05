/**
 * Created by Ricardo Baquero on 4/12/17.
 * Copyright BuenPlan, 2017.
 */
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger.firebaseio.com/'
});

export default instance;