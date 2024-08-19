import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { NotificationIcon } from './Icons'

export default function Iconheader() {
    return (
        <View style={styles.container}>
            <NotificationIcon />
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