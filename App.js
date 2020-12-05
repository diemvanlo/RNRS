/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    StatusBar, Image,
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import RootNavigation from './navigation/rootNavigation';
import {Root, Text} from 'native-base';

// const AppContainer = createAppContainer(RootNavigation);
export default () =>
    <Root>
        <RootNavigation></RootNavigation>
    </Root>


