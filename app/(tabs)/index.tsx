import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import Iconheader from '@/components/Iconheader';
import Profileperson from '@/components/Profileperson';
import Color from '@/constants/Color';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { OptionIcon, SearchIcon } from '@/components/Icons';
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destinations.json'
import GroupListings from '@/components/GroupListings';
import groupData from '@/data/groups.json'

const Page = () => {

    const [category, setCategory] = useState('All')

    const headerHeight = useHeaderHeight()

    const onCatChanged = (category: string) => {
        setCategory(category)
    }

    return (
        <>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack.Screen
                    options={{
                        headerTransparent: true,
                        headerTitle: "",
                        headerLeft: () => (
                            <Pressable style={styles.pressableImage} onPress={() => { }}>
                                <Profileperson />
                            </Pressable>
                        ),
                        headerRight: () => (
                            <Pressable style={styles.pressableHeaderIcon} onPress={() => { }}>
                                <Iconheader />
                            </Pressable>
                        )
                    }}
                />
                <View style={[styles.container, { paddingTop: headerHeight }]}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Text style={styles.headingText} >Explore The Beautiful World!</Text>

                        <View style={styles.searchSectionWrapper}>
                            <View style={styles.searchBar} >
                                <SearchIcon size={18} />
                                <TextInput placeholder='Search...' />
                            </View>
                            <Pressable style={styles.filterBtn} onPress={() => { }}>
                                <OptionIcon size={28} color={Color.white} />
                            </Pressable>
                        </View>

                        <CategoryButtons onCagtegoryChanged={onCatChanged} />

                        <Listings listing={listingData} category={category} />

                        <GroupListings listing={groupData} />
                    </ScrollView>
                </View>

            </GestureHandlerRootView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        backgroundColor: Color.bgColor
    },
    pressableImage: {
        marginLeft: 15,
    },
    pressableHeaderIcon: {
        marginRight: 15,
        backgroundColor: Color.white,
        padding: 10,
        borderRadius: 10,
        shadowColor: Color.black,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    headingText: {
        fontSize: 30,
        fontWeight: "800",
        color: Color.black,
        marginTop: 10,
    },
    searchSectionWrapper: {
        flexDirection: "row",
        marginVertical: 20,
        columnGap: 10
    },
    searchBar: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: Color.white,
        padding: 16,
        borderRadius: 10,
        columnGap: 15
    },
    filterBtn: {
        backgroundColor: Color.primaryColor,
        padding: 12,
        borderRadius: 10,
    },
})

export default Page;
