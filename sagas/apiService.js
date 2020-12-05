import * as AsyncStorage from 'react-native/Libraries/Storage/AsyncStorage';

const apiUrl = 'http://homespace.website:8080';
// const apiUrl = 'http://192.168.1.45:8080';
const loginUrl = apiUrl + 'api/auth/signin';

import axios from 'axios';
import {put} from '@redux-saga/core/effects';
import {FETCH_PRODUCT_FAILED, FETCH_PRODUCT_SUCCEEDED} from '../actions/actionType';

axios.interceptors.request.use(async (config) => {
    const jwtToken = await AsyncStorage.getItem('token');
    if (jwtToken != null) {
        config.headers = {
            'Authorization': 'Bearer ' + jwtToken,
        };
    }
    return config;
});

export function* loginFromApi(username, password) {
    const json = axios.post(loginUrl, {
            username: username,
            password: password,
        },
    ).then(response => {
        const result = response.data;
        AsyncStorage.setItem('token', result.token);
        return result.token;
    }).catch(error => {
        console.log(error);
        return 'failed';
    });
    return yield (json);
}

export function* postFromApi(action) {
    const json = axios.post(apiUrl + action.suffix, model);
    return yield(json);
}

export function* getPageFromApi(action) {
    if (!action.searchString) {
        console.log(apiUrl + action.suffix + `/${action.page}/10`);
        const json = axios.get(apiUrl + action.suffix + `/${action.page}/10`, {},
        ).then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
            return [];
        });
        return yield (json);
    }
    const json = axios.post(apiUrl + action.suffix, {searchString: action.searchString}).then(response => {
        return response.data;
    }).catch(error => {
        console.log(error);
        return [];
    });
    return yield(json);
}

export function* fetchPage(action) {
    let isSearching;
    isSearching = !!action.searchString;
    try {
        const receivedItems = yield getPageFromApi(action);
        yield put({
            type: action.fetchSuccessType, receivedItems: receivedItems, isSearching: isSearching,
        });
    } catch (error) {
        yield put({type: action.fetchFailedType, error});
    }
}