import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableNativeFeedback, ScrollView } from 'react-native';
import config from '../../config';
import { PostFeed } from '../container'


class MainFeed extends Component {
    render() { 
        return(
        <View>
            <View style={styles.tempNav} >
                <Text>Copygram</Text>
                </View>
                <PostFeed />
        </View>
        )
    }

}

const styles = StyleSheet.create({
    tempNav: {
      width: 100 + '%',
      height: 50,
      backgroundColor: "rgb(250, 250, 250)",
      borderBottomColor: "rgb(233,233,233)",
      borderBottomWidth: StyleSheet.hairlineWidth,
      justifyContent: "center",
      alignItems: "center"
    }
})

export default MainFeed;