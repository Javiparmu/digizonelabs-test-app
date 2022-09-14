import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-elements'
import { useAppDispatch } from '../hooks';
import { setAnimals } from '../store/animals/animalSlice';

type animal = {
  name: String,
  habitat: String,
  image_link: String
}

export const PublicApiScreen = () => {

  const dispatch = useAppDispatch();

  const [data, setData] = useState<animal[]>()

  useEffect(() => {
    getPublicApi()
  }, [])

  useEffect(() => {
    dispatch(setAnimals(data))
  }, [data])

  const getPublicApi = async () => {
    const response = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
    const json = await response.json()
    setData(json)
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ marginHorizontal: 15 }} >
        {
          data?.map((animal: animal, index: number) => {
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
    marginLeft: Dimensions.get('window').width * 0.003,
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
    height: 320,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderColor: 'rgba(236, 236, 234, 1)',
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
  },
})
