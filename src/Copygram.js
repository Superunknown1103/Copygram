import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login } from './components/screens';
import { createStackNavigator, TabNavigator } from 'react-navigation';

const MainStack = createStackNavigator({
    Login: {
        screen: Login
    },
    Main: { 
        screen: MainFeed
    }
});

class Copygram extends Component {
    render(){
        return <MainStack />
    }
}

export default Copygram;