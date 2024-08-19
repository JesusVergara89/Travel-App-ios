import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

export default function Profileperson() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 10, 
    },
})