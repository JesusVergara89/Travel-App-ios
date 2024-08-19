import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import Color from '@/constants/Color'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
    onCagtegoryChanged: (category: string) => void;
}

const CategoryButtons = ({onCagtegoryChanged}: Props) => {

    const scrolRef = useRef<ScrollView>(null)

    const itemRef = useRef<(React.ElementRef<typeof Pressable> | null)[]>([]);

    const [activeindex, setActiveindex] = useState(0)

    const handleSelectCategory = (index: number) => {
        const selected = itemRef.current[index];
        setActiveindex(index)

        selected?.measure((x) => {
            scrolRef.current?.scrollTo({x: x, y: 0, animated: true})
        })

        onCagtegoryChanged(destinationCategories[index].title)
    } 

    return (
        <View>
            <Text style={styles.title} >Categories</Text>
            <ScrollView ref={scrolRef} horizontal contentContainerStyle={{
                gap: 20,
                paddingVertical: 10,
                marginBottom: 10,
            }}
                showsHorizontalScrollIndicator={false}
            >
                {destinationCategories.map((item, index) => (
                    <Pressable
                        key={index}
                        ref={(element) => { itemRef.current[index] = element }}
                        onPress={() => handleSelectCategory(index)}
                        style={activeindex === index ? styles.categoryBtnActive : styles.categoryBtn}
                    >
                        <MaterialCommunityIcons name={item.iconName as any} size={20} color={activeindex === index ? Color.white : Color.black} />
                        <Text style={activeindex === index ? styles.categoryBtnTextActive : styles.categoryBtnText}>{item.title}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    )
}

export default CategoryButtons

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: "700",
        color: Color.black
    },
    categoryBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: Color.grey,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 3,
        shadowRadius: 3,
    },
    categoryBtnText: {
        marginLeft: 5,
        color: Color.black,
    },
    categoryBtnActive: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.primaryColor,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
        shadowColor: Color.grey,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 3,
        shadowRadius: 3, 
    },
    categoryBtnTextActive: {
        marginLeft: 5,
        color: Color.white,
    }
})