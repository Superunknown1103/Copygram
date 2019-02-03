import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login } from './components/screens';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNav = createStackNavigator({
    main: {
        screen: MainFeed
    },
    login: {
        screen: Login
    }
},
    {
        initialRouteName: "login",
    }
);

const MainStack = createAppContainer(MainNav);

class Copygram extends Component {
    render() {
        return (
            <MainStack />
        )
    }
}

export default Copygram;