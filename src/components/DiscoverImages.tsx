import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'


interface DiscoverImage {
    imageUrl: string
}

export const DiscoverImages = ({imageUrl}: DiscoverImage) => {

    return (
        <Image source={{ uri: imageUrl }} style={styles.image} >
          <View style={styles.innerframe}>
          </View>
        </Image>
    )
}


const styles = StyleSheet.create({
    innerframe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, .1)',
        borderRadius: 20,
      },
      image: {
        width: 140,
        height: 230,
        marginHorizontal: 10,
        borderRadius: 20,
      },
})