import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Profile extends Component {
    login() {
        // Navigate to the Main App
        this.props.navigation.navigate("main");
    }

    render(){
        return(
            <TouchableOpacity style={{height: 100 + '%', 
            width: 100 + '%',
            justifyContent: "center",
            alignItems: "center"
            }}
            onPress={() => { this.login(); }}>
                <Text>Future Profile Page</Text>
            </TouchableOpacity>
        )
    }
}

export default Profile;