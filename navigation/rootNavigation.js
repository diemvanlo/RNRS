import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import DrawerScroll from './drawerScroll';
import StackNavigationData from './stackNavigation';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator, Header} from '@react-navigation/stack';

const Stack = createStackNavigator();
const headerBackground = require('../assets/images/topBarBg.png');
const NavigatorView = (props) => {
    const headerLeftComponentMenu = () =>
        <TouchableOpacity onPress={() => props.navigation.toggleDrawer()} style={{paddingLeft: 10}}>
            <Image source={require('../assets/images/drawer/menu.png')}/>
        </TouchableOpacity>;
    return (
        <Stack.Navigator>
            {StackNavigationData.map((item, index) => {
                    return (<Stack.Screen
                        key={`key-${index + 1}`}
                        name={item.name}
                        component={item.component}
                        options={{
                            headerLeft: item.headerLeft ? item.headerLeft : headerLeftComponentMenu,
                            headerBackground: () => (
                                <Image style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: 100 + '%',
                                    height: Header.height,
                                }} source={item.headerBackground.source}/>
                            ),
                        }}
                    />);
                },
            )}
        </Stack.Navigator>
    );
};
const Drawer = createDrawerNavigator();

const rootNavigation = () => (
    <NavigationContainer>
        <Drawer.Navigator
            drawerStyle={{backgroundColor: '#1919b1'}}
            drawerContent={props => <DrawerScroll {...props}/>}>
            <Drawer.Screen name='login' component={NavigatorView}/>
        </Drawer.Navigator>
    </NavigationContainer>
);


export default rootNavigation;