import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Button } from 'react-native'

class Login extends Component {
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
                <Text>New user?</Text>
            </TouchableOpacity>
        )
    }
}

export default Login;