import { Text, StyleSheet, View } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-elements'


interface CommunityAvatar {
    imageUrl: string,
    name: string
}

export const CommunityAvatar = ({imageUrl, name}: CommunityAvatar) => {

    return (
        <View style={styles.community}>
            <Avatar
              rounded
              size={100}
              source={{ uri: imageUrl }}
              containerStyle={styles.communityavatar}
            />
            <Text style={styles.communityname}>{name}</Text>
          </View>
    )
}


const styles = StyleSheet.create({
      communityavatar: {
        marginHorizontal: 15,
        marginTop: 5,
        borderWidth: 3,
        borderColor: '#6BE8C7',
      },
      communityname: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Helvetica',
        alignSelf: 'center',
        marginTop: 2,
      },
      community: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }
})