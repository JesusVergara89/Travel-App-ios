import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Page = () => {
    return (
        <View style={styles.container} >
            <Text>Category</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Page;
