import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login } from './components/screens';
import { SwitchNavigator, TabNavigator } from 'react-navigation';

const MainStack = SwitchNavigator({
    main: MainFeed,
    login: Login
}); 

class Copygram extends Component {
    render(){
        return <MainStack />
    }
}

export default Copygram;