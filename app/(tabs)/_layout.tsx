import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { BookMarkIcon, CompassIcon, DasboardIcon, ProfileIcon, SearchIcon } from '@/components/Icons'
import Color from '@/constants/Color'

export default function _layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                backgroundColor: Color.bgColor,
                borderTopWidth: 0,
                padding: 0,
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: Color.black,
            tabBarInactiveTintColor: Color.grey
        }} >
            <Tabs.Screen name='index' options={{
                tabBarIcon: ({ color }) => <CompassIcon color={color} />
            }} />
            <Tabs.Screen name='category' options={{
                tabBarIcon: ({ color }) => <DasboardIcon color={color} />
            }} />
            <Tabs.Screen name='search' options={{
                tabBarIcon: ({ color }) => (
                    <View style={styles.bgIcon}>
                        <SearchIcon color={Color.white} size={25} />
                    </View>
                ),
            }} />
            <Tabs.Screen name='bookmarks' options={{
                tabBarIcon: ({ color }) => <BookMarkIcon color={color} />
            }} />
            <Tabs.Screen name='profile' options={{
                tabBarIcon: ({ color }) => <ProfileIcon color={color} />
            }} />
        </Tabs>
    )
}


const styles = StyleSheet.create({
    bgIcon: {
        backgroundColor: Color.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 10,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    }
})