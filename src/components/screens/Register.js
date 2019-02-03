import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'

class Register extends Component {
    constructor(){
        super()
        this.state = {
            credentials: {
              login: "",
              password: ""  
            }
        };
    }

    updateText(text, field){
        let credentials = Object.assign(this.state.credentials)
        credentials[field] = text;
        this.setState({
            credentials: newCredentials
        })
    }

    register() {
        // send credentials to server
        // if signup success
        this.props.navigation.navigate("main");
        // else show error message
    }

    render() {
        return (
            <View style={{
                height: 100 + '%',
                width: 100 + '%',
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(157, 203, 239)"
            }}>
            <Text>REGISTER PAGE</Text>
            <TextInput
            value={this.state.login}
            autoCorrect={false}
            onChangeText={text => this.updateText(text, "login")} 
            placeholder="Username" 
            style={styles.input} />
            <TextInput
            value={this.state.password}
            onChangeText={text => this.updateText(text, 'password')} 
            secureTextEntry 
            autoCorrect={false}
            placeholder="Password" 
            style={styles.input} 
            />
            <Button title="Signup"
                onPress={() => { this.register(); }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 100 + '%',
        marginHorizontal: 50,
        backgroundColor: "rgb(255, 255, 255)",
        marginBottom: 10
    }
});

export default Register;