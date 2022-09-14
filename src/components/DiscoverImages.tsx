import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Icon, Image, Text } from 'react-native-elements';


interface DiscoverImage {
    imageUrl: string,
    title: string,
}

export const DiscoverImages = ({ imageUrl, title }: DiscoverImage) => {

    return (
        <View style={{ height: 270 }} >
            <View style={styles.playicon}>
                <Icon name="play-arrow" type="material" size={55} color="white" tvParallaxProperties={undefined} />
            </View>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity activeOpacity={0.9} style={styles.infoicon} >
                <Icon name="info" type="feather" size={35} color="white" tvParallaxProperties={undefined} />
            </TouchableOpacity>
            <Image source={{ uri: imageUrl }} style={styles.image} >
                <View style={styles.innerframe} />
            </Image>
        </View>
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
        overflow: 'visible',
    },
    playicon: {
        position: 'absolute',
        top: '20%',
        left: '27%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 50,
        padding: 5,
        zIndex: 1,
    },
    infoicon: {
        position: 'absolute',
        bottom: '5%',
        left: '33%',
        backgroundColor: '#000',
        borderRadius: 50,
        padding: 10,
        zIndex: 1,
    },
    titlecontainer: {
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        left: 15,
        bottom: '30%',
        height: 40,
        width: 130,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})