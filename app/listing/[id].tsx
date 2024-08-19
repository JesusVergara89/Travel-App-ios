import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Pressable } from 'react-native';
import listingData from '@/data/destinations.json'
import { ListingTypes } from '@/types/listingTypes';
import { ArroeLeftIcon, BookMarkIcon, ClockIcon, GroupPersonIcon, MapIcon, StarIcon } from '@/components/Icons';
import Color from '@/constants/Color';

const { width } = Dimensions.get("window")
const height = 350

const ListingDetails = () => {
    const { id } = useLocalSearchParams()
    const listing: ListingTypes | undefined = (listingData as ListingTypes[]).find(
        (item) => item.id === id
    );

    const router = useRouter()

    if (!listing) {
        return (
            <View >
                <Text>No listing found for id {id}</Text>
            </View>
        );
    }

    return (
        <>
            <Stack.Screen
                options={{
                    headerTransparent: true,
                    headerTitle: "",
                    headerLeft: () => (
                        <Pressable style={styles.pressableBack} onPress={() => router.back()}>
                            <View style={styles.backArrow}>
                                <ArroeLeftIcon size={24} />
                            </View>
                        </Pressable>
                    ),
                    headerRight: () => (
                        <Pressable style={styles.pressableBack} onPress={() => { }}>
                            <View style={styles.backArrow}>
                                <BookMarkIcon size={24} />
                            </View>
                        </Pressable>
                    )
                }}
            />
            <View style={styles.container}>
                <Image source={{ uri: listing.image }} style={styles.image} />
                <View style={styles.contentWrapper}>
                    <Text style={styles.listingName}>{listing.name}</Text>
                    <View style={styles.listingLocationWrapper}>
                        <MapIcon size={18} color={Color.primaryColor} />
                        <Text style={styles.listingLocationText}>{listing.location}</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <View style={styles.mostInnerContainer}>
                            <View style={styles.iconMetrics}>
                                <ClockIcon size={18} color={Color.primaryColor} />
                            </View>
                            <View>
                                <Text style={styles.listingDurationText}>Duration</Text>
                                <Text style={styles.listingDuration}>{listing.duration} Days</Text>
                            </View>
                        </View>
                        <View style={styles.mostInnerContainer}>
                            <View style={styles.iconMetrics}>
                                <GroupPersonIcon size={18} color={Color.primaryColor} />
                            </View>
                            <View>
                                <Text style={styles.listingDurationText}>Person</Text>
                                <Text style={styles.listingDuration}>{listing.duration}</Text>
                            </View>
                        </View>
                        <View style={styles.mostInnerContainer}>
                            <View style={styles.iconMetrics}>
                                <StarIcon size={18} color={Color.primaryColor} />
                            </View>
                            <View>
                                <Text style={styles.listingDurationText}>Duration</Text>
                                <Text style={styles.listingDuration}>{listing.rating}</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.listingTextDescription}>{listing.description}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.footerBtn} onPress={() => { }}>
                    <Text style={styles.footerBtnText} >Book Now</Text>
                </Pressable>
                <Pressable style={styles.footerBtn_} onPress={() => { }}>
                    <Text style={styles.footerBtnText} >${listing.price}</Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height
    },
    backArrow: {
        backgroundColor: Color.white,
        padding: 6,
        borderRadius: 10,
    },
    pressableBack: {
        backgroundColor: "rgba(255,255,255,0.5)",
        borderRadius: 10,
        padding: 4
    },
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    contentWrapper: {
        padding: 20
    },
    listingName: {
        fontSize: 24,
        fontWeight: "500",
        color: Color.black,
        letterSpacing: 0.5,
    },
    listingLocationWrapper: {
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 10,
        alignItems: "center",
        columnGap: 8,
    },
    listingLocationText: {
        fontSize: 14,
        fontWeight: "500",
        color: Color.black
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    mostInnerContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 8,
    },
    listingDurationText: {
        fontSize: 16,
        color: Color.grey
    },
    listingDuration: {
        fontSize: 18,
        fontWeight: "600"
    },
    iconMetrics: {
        padding: 7,
        backgroundColor: "#ededed",
        borderRadius: 10
    },
    listingTextDescription: {
        fontSize: 20,
        letterSpacing: 0.4,
        lineHeight: 35,
    },
    footer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        padding: 20,
        paddingBottom: 30,
        width: width,
        columnGap: 10
    },
    footerBtn: {
        flex: 1,
        backgroundColor: Color.primaryColor,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    footerBtnText: {
        color: Color.white,
        fontWeight: "800",
        fontSize: 17,
        textTransform: "uppercase",
    },
    footerBtn_: {
        width: 130,
        backgroundColor: Color.black,
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
})

export default ListingDetails;
