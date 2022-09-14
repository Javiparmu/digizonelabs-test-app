import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Text } from 'react-native-elements'
import { trendings } from '../utils/constants'
import { TrendingItem } from './TrendingItem'

export const TrendingScroll = () => {

    return (
        <>
            <Text h4 style={styles.title}>TRENDING NOW</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ paddingLeft: 10, marginBottom: 30 }}>
                {
                    trendings.map(({ trendingImg, title }, index) => (
                        <TrendingItem key={index} imageUrl={trendingImg} title={title} />
                    ))
                }
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    title: {
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        marginLeft: 20,
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
})