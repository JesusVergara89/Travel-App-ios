import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Card from './Card';

type Props = {
    listing: any[]
    category: string;
}

const Listings = ({ listing, category }: Props) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log('update')
        //setLoading(true)
        //setTimeout(() => {
          //  setLoading(false)
        //}, 200)
    }, [category])
    return (
        <View>
            <FlatList
                data={loading ? [] : listing}
                renderItem={({ item }) => <Card item={item} />}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Listings;
