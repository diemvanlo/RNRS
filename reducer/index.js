import loginReducer from './loginReducer';
import {combineReducers} from 'redux';
import productReducer from './productReducer';
import newsReducer from './newsReducer';

const allReducers = combineReducers({
    loginReducer: loginReducer,
    productReducer: productReducer,
    newsReducer: newsReducer
});
export default allReducers;
