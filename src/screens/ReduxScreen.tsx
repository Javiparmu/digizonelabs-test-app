import React, { useEffect } from 'react'
import { Alert, ScrollView, StyleSheet, Text } from 'react-native'
import { Card } from 'react-native-elements'
import { useAppSelector } from '../hooks'

type animal = {
  name: String,
  habitat: String,
  image_link: String
}

export const ReduxScreen = () => {

  const { animals } = useAppSelector(state => state.animal)

  useEffect(() => {
    if (animals.length === 0) Alert.alert('Error', 'No data found')
  }, [])

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ marginHorizontal: 15 }} >
        {
          animals &&
          animals?.map((animal: animal, index: number) => {
            return (
              <Card key={index} containerStyle={{ width: 350 }} >
                <Card.Title style={styles.name}>{animal.name}</Card.Title>
                <Card.Divider />
                <Card.Image source={{ uri: animal.image_link }} style={styles.image} />
                <Text style={[styles.description, { fontWeight: 'bold' }]}>
                  Habitats:
                </Text>
                <Text style={styles.description}>
                  {animal.habitat}
                </Text>
              </Card>
            )
          })
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 2,
    color: '#000000'
  },
  image: {
    marginBottom: 10,
    width: 320,
    height: 300,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: 'rgba(236, 236, 234, 1)',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  }
})