import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { MainFeed, Login, Register, Camera, Profile } from './components/screens';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';

// bottom tab navigation once logged in
const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
})

const IntroNav = createStackNavigator({
    register: Register,
    login: Login
})

// navigation that controls app
const MainNav = createSwitchNavigator({
    intro: IntroNav,
    main: Tabs
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