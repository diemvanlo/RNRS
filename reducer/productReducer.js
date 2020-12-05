import {FETCH_PRODUCT_FAILED, FETCH_PRODUCT_SUCCEEDED} from '../actions/actionType';

const productReducer = (products = '', action) => {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCEEDED:
            products = action.receivedItems;
            return products;
        case FETCH_PRODUCT_FAILED:
            return [];
        default:
            return products;
    }
};

export default productReducer;