import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Cardgroups from './Cardgroups';
import Color from '@/constants/Color';

type Props = {
    listing: any[]
}


const GroupListings = ({listing}: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top travel groups</Text>
            <FlatList
                data={listing }
                renderItem={({ item }) => <Cardgroups item={item} />}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: Color.black,
        marginBottom: 10,
    }
})

export default GroupListings;
