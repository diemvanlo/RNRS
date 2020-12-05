import {
    FETCH_NEWS_FAILED,
    FETCH_NEWS_SUCCEEDED,
    FETCH_PRODUCT_FAILED,
    FETCH_PRODUCT_SUCCEEDED,
} from '../actions/actionType';

const newsReducer = (news = '', action) => {
    switch (action.type) {
        case FETCH_NEWS_SUCCEEDED:
            news = action.receivedItems;
            return news;
        case FETCH_NEWS_FAILED:
            return [];
        default:
            return news;
    }
};

export default newsReducer;