import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import tabNavigationData from './tabNavigationData';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text, Icon} from 'native-base';

const Tab = createBottomTabNavigator();
export default () => {
    return (
        <Tab.Navigator>
            {tabNavigationData.map((item, idx) => {
                return (
                    <Tab.Screen
                        key={`tab_item${idx + 1}`}
                        name={item.name}
                        component={item.component}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={styles.tabBarItemContainer}>
                                    <Icon style={{color: focused ? '#040dff' : '#ff4c93'}} name={item.icon}/>
                                </View>
                            ),
                            tabBarLabel: ({focused}) => <Text
                                style={{fontSize: 12, color: focused ? '#040dff' : '#ff4c93'}}>{item.name}</Text>,
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBarItemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingHorizontal: 10,
    },
    tabBarIcon: {
        width: 23,
        height: 23,
    },
    tabBarIconFocused: {
        tintColor: '#4e5ccc',
    },
});