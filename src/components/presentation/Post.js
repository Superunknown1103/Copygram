import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableNativeFeedback, ScrollView } from 'react-native';
import config from '../../config';

class Post extends Component {
    // constructor sets defaults for component
    constructor() {
        super()
            this.state = {
                liked: false,
                screenWidth: Math.floor(Dimensions.get("window").width),
                imageHeight: Math.floor(Dimensions.get("window").width) * 1.1
            }
        };

    likeToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }

    render() { 
        // const imageUri = "https://lh3.googleusercontent.com/2OtUnlP_Kx1JGXcZcydNmW8PTDxCW26DJG3Gh-bQ4wTOtInmrX586vKiAqHde_fnCo81wY9qwDX_4nG6A3OD-4dhPA" + "=s" + this.state.screenWidth + "-c";
        const heartIconColor = this.state.liked ? "rgb(252, 61, 57)" : null
        return(
        <View>
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
            {/* to do: add flash on click of image */}
            <TouchableNativeFeedback onPress={() => { this.likeToggled() }}>
            <Image
            source={{ uri: "https://lh3.googleusercontent.com/2OtUnlP_Kx1JGXcZcydNmW8PTDxCW26DJG3Gh-bQ4wTOtInmrX586vKiAqHde_fnCo81wY9qwDX_4nG6A3OD-4dhPA" }}
            style={{ width: this.state.screenWidth, height: this.state.imageHeight }} />
            </TouchableNativeFeedback>
            <View style= { styles.iconBar }>
                <Image style= {[styles.icon, { height: 45, width: 45, tintColor: heartIconColor }]} source= {config.images.heartIcon} />
                <Image style= {[styles.icon, { height: 36, width: 36 }]} source= {config.images.bubbleIcon} />
                <Image resizeMode="stretch" style= {[styles.icon, { height: 40, width: 40 }]} source= {config.images.arrowIcon} />
                </View>
                <View style={styles.iconBar}>
                <Image style= {[styles.icon, { height: 30, width: 30 }]} source= {config.images.heartIcon} />
                <Text>128 likes</Text>
            </View>
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
        height: config.styleConstants.rowHeight,
        backgroundColor: "rgb(250, 250, 250)",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between"
    },

    userPic: {
        height: 40,
        width: 40,
        borderRadius: 20
    },

    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor: "rgb(233,233,233)",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center"
    },
    
    icon: {
        marginLeft: 5
    }

})

export default Post;