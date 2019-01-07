import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

class Copygram extends Component {

    render() {
        return(
        <View style= {{ flex: 1, width: 100 + '%', height: 100 + '%' }}>
            <View style={styles.tempNav} >

                <Text>Copygram</Text>

                </View>
            <Image style={{ width: 100 + '%', height: 200 }} source={{uri: "https://lh3.googleusercontent.com/2OtUnlP_Kx1JGXcZcydNmW8PTDxCW26DJG3Gh-bQ4wTOtInmrX586vKiAqHde_fnCo81wY9qwDX_4nG6A3OD-4dhPA"}} />

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

export default Copygram;