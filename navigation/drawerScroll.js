import DrawerContentScrollView from '@react-navigation/drawer/lib/commonjs/views/DrawerContentScrollView';
import React from 'react';
import {Container, Icon, Text, Content, Card, CardItem, Thumbnail, Body, Left, Right, Button} from 'native-base';
import {
    StyleSheet,
    View,
} from 'react-native';
import tabNavigationData from './tabNavigationData';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerItem} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
    avatarContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        margin: 20,
        marginBottom: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    menuLabelFlex: {
        display: 'flex',
        flexDirection: 'row',
    },
    menuTitle: {
        marginLeft: 10,
        color: '#fff',
    }, username: {
        color: '#fff',
        fontSize: 18,
    }, divider: {
        borderBottomColor: 'white',
        opacity: 0.2,
        borderBottomWidth: 1,
        margin: 15,
    },
});
export default (props) => {
    return (
        <DrawerContentScrollView style={{padding: 0}}>
            <View style={styles.avatarContainer}>
                <Thumbnail style={styles.avatar} source={require('./ta-3.png')}/>
                <View style={{padding: 15}}>
                    <Text style={styles.username}>Lieem</Text>
                    <Text style={{color: '#4BC1FD'}}>dovanliem09102014@gmail.com</Text>
                </View>
            </View>
            <View style={styles.divider}/>
            {tabNavigationData.map((item, index) => {
                    return (
                        <DrawerItem key={`drawer_item-${index + 1}`}
                                    label={() => (
                                        <View style={styles.menuLabelFlex}>
                                            <Icon style={{color: '#fff'}} name={item.icon}/>
                                            <Text style={styles.menuTitle}>{item.name}</Text>
                                        </View>
                                    )}
                                    onPress={() => props.navigation.navigate(item.name)}
                        ></DrawerItem>);
                },
            )}
            <View style={styles.divider}/>
        </DrawerContentScrollView>
    );
};