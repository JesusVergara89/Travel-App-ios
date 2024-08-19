import Color from '@/constants/Color';
import { ListingTypes } from '@/types/listingTypes';
import React from 'react';
import { ListRenderItem, StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { BookMarkIcon, MapIcon } from './Icons';
import { Link } from 'expo-router';

type CardProps = {
    item: ListingTypes;
}

const Card = ({ item }: CardProps) => {
    return (
        <Link asChild href={`/listing/${item.id}`} >
            <Pressable>
                <View style={styles.card}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <View style={styles.bookmark}>
                        <BookMarkIcon size={20} color={Color.white} />
                    </View>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={styles.itemText} >{item.name}</Text>
                    <View style={styles.itemOtherInfo}>
                        <View style={styles.location}>
                            <MapIcon size={18} color={Color.primaryColor} />
                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.locationText} >{item.location}</Text>
                        </View>
                        <Text style={styles.itemPriceText}>${item.price}</Text>
                    </View>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: Color.white,
        padding: 10,
        borderRadius: 10,
        width: 220,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 7,
        marginBottom: 30,
    },
    bookmark: {
        position: "absolute",
        top: 185,
        right: 30,
        backgroundColor: Color.primaryColor,
        padding: 10,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: Color.white
    },
    itemText: {
        fontSize: 16,
        fontWeight: "600",
        color: Color.black,
        marginBottom: 10,
    },
    itemOtherInfo: {
        flexDirection: "row"
    },
    location: {
        flex: 1,
        flexDirection: "row",
        columnGap: 5,
        alignItems: "center",
    },
    locationText: {
        fontSize: 12,
    },
    itemPriceText: {
        fontSize: 12,
        fontWeight: "600",
        color: Color.primaryColor
    }
})

export default Card;
