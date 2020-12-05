import {takeEvery} from '@redux-saga/core/effects';
import {FETCH_NEWS, FETCH_PRODUCT} from '../actions/actionType';
import {fetchPage} from './apiService';

export function* watchFetchProducts() {
    yield takeEvery(FETCH_PRODUCT, fetchPage);
}

export function* watchFetchNews() {
    yield takeEvery(FETCH_NEWS, fetchPage);
}