import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

class Copygram extends Component {
    // constructor sets defaults for component
    constructor() {
        super()
            this.state = {
                screenWidth: Math.floor(Dimensions.get("window").width)
            }
        };

    render() { 
        return(
        <View style= {{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
            <View style={styles.tempNav} >
                <Text>Copygram</Text>
            </View>

            <View style={styles.userBar}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image 
                source={{uri: "https://lh3.googleusercontent.com/bJAn6trTgn2sqzG46_BanWbrvi_sQ7tq6H55G46wy56zxZZvRaTdYi9GlDv8MYXBAUTFhR5t-DbhO4tnQtgdHQj9Hw"}} 
                style={styles.userPic} />
                <Text style={{ marginLeft: 10 }}>Bruce Goose</Text>
            </View>
            <View>
                <Text style= {{ fontSize: 30 }}>...</Text>
            </View>
            </View>
            <Image
            source={{ uri: "https://lh3.googleusercontent.com/2OtUnlP_Kx1JGXcZcydNmW8PTDxCW26DJG3Gh-bQ4wTOtInmrX586vKiAqHde_fnCo81wY9qwDX_4nG6A3OD-4dhPA" }}
            style={{ width: this.state.screenWidth, height: 450 }} />

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
    },

    userBar: {
        width: 100+'%',
        height: 50,
        backgroundColor: "rgb(250, 250, 250)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20

    }

})

export default Copygram;