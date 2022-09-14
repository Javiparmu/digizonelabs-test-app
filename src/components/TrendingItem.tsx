import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'


interface TrendingItem {
    imageUrl: string,
    title: string
}

export const TrendingItem = ({ imageUrl, title }: TrendingItem) => {

    return (
        <View>
            <Image source={{ uri: imageUrl }} style={styles.trendingimg} />
            <View style={styles.trendingtextcontainer}>
                <Text style={styles.trendingtitle}>{title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    trendingimg: {
        width: 210,
        height: 250,
        marginHorizontal: 10,
      },
      trendingtextcontainer: {
        position: 'absolute',
        bottom: '18%',
        left: '12.5%',
        width: '75%',
        height: 70,
        backgroundColor: 'rgba(0,0,0,0.4)',
        padding: 5,
        borderWidth: 1,
        borderColor: '#7BE2C1',
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      trendingtitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
      }
})