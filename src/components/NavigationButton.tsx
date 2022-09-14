import { StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements'
import { StackNavigationProp } from '@react-navigation/stack'

interface NavigationButton {
    title: string
    navigation: StackNavigationProp<any, 'Home'>
}

export const NavigationButton = ({ title, navigation }: NavigationButton) => {

    const navigateTo = (screen: string) => {
        navigation.navigate(screen)
    }

    return (
        <>
            <Button
                title={title}
                type='outline'
                raised
                onPress={() => navigateTo(title.replace(/\s/g, ''))}
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.button}
            />
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        marginBottom: 50,
        width: '50%',
        textAlign: 'center',
        borderRadius: 10,
    },
    button: {
        height: 50,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
})