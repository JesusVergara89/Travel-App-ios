import Color from '@/constants/Color';
import { GroupTypes } from '@/types/groupTypes';
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StarIcon } from './Icons';

type CardProps = {
    item: GroupTypes;
}


const Cardgroups = ({ item }: CardProps) => {
    return (
        <View style={styles.item} >
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.reviewsContainer}>
              <Text style={styles.reviewsName} >{item.name}</Text>  
              <View style={styles.reviewsContainerInner}>
                <StarIcon color={Color.primaryColor} size={18}/>
                <Text style={styles.reviewsRate}>{item.rating}</Text>
                <Text style={styles.reviewsReviews}>({item.reviews})</Text>
              </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        backgroundColor: Color.white,
        padding: 10,
        borderRadius: 10,
        columnGap: 8,
        alignItems: "center"
    },
    image: {
        width: 80,
        height: 100,
        borderRadius: 8,
    },
    reviewsContainer: {
        flexDirection: "column",
        rowGap: 8
    },
    reviewsContainerInner: {
        flexDirection: "row",
        columnGap: 5,
    },
    reviewsName: {
        fontSize: 14,
        fontWeight: "700"
    },
    reviewsRate: {
        fontWeight: "bold"
    },
    reviewsReviews: {
        color: Color.grey
    }
})

export default Cardgroups;
