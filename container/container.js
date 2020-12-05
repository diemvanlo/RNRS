import {fetchNewsAction, fetchProductsAction} from '../actions';

export const mapStateToProps = (state) => {
    return {
        token: state.loginReducer,
        products: state.productReducer,
        news: state.newsReducer,
    };
};

export const mapDisPatchToProps = (dispatch) => {
    return {
        onFetchLogin: (username, password) => {
        },
        onFetchProduct: (page, searchString) => {
            dispatch(fetchProductsAction('/api/product/getPage', page, searchString));
        }, onFetchNews: (page, searchString) => {
            dispatch(fetchNewsAction('/api/news/getPage', page, searchString));
        },
    };
};