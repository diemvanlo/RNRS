import {
    FETCH_NEWS, FETCH_NEWS_FAILED,
    FETCH_NEWS_SUCCEEDED,
    FETCH_PRODUCT,
    FETCH_PRODUCT_FAILED,
    FETCH_PRODUCT_SUCCEEDED,
} from './actionType';

export const fetchProductsAction = (suffix, page, searchString) => {
    return {
        type: FETCH_PRODUCT,
        page, searchString, suffix, fetchSuccessType: FETCH_PRODUCT_SUCCEEDED, fetchFailedType: FETCH_PRODUCT_FAILED,
    };
};

export const fetchNewsAction = (suffix, page, searchString) => {
    return {
        type: FETCH_NEWS,
        page, searchString, suffix, fetchSuccessType: FETCH_NEWS_SUCCEEDED, fetchFailedType: FETCH_NEWS_FAILED,
    };
};