import { all } from 'redux-saga/effects';
import { watchFetchProducts, watchFetchNews } from './apiRoute';
// import {watchFetchProducts} from './productSage';

export default function* rootSaga() {
    yield all([watchFetchProducts(), watchFetchNews()]);
}