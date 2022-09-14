import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import { avatarUrls } from '../utils/constants'
import { CommunityAvatar } from './CommunityAvatar'

export const CommunityScroll = () => {

    return (
        <View style={styles.communitycontainer}>
            <Text style={styles.communitytitle}>MY COMMUNITY</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    avatarUrls.map(({ avatarUrl, name }, index) => (
                        <CommunityAvatar key={index} imageUrl={avatarUrl} name={name} />
                    ))
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    communitycontainer: {
        width: '100%',
        height: 180,
        backgroundColor: '#000',
        paddingLeft: 5,
        marginBottom: 15,
      },
      communitytitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 10,
        alignSelf: 'flex-start',
      },
})