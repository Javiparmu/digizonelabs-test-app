import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { imageUrls } from '../utils/constants'
import { DiscoverImages } from './DiscoverImages'
import { Text } from 'react-native-elements'

export const DiscoverScroll = () => {

    return (
        <>
            <Text h3 style={styles.title}>DISCOVER</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginBottom: 40 }}>
                {
                    imageUrls.map((image, index) => (
                        <DiscoverImages key={index} imageUrl={image} />
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