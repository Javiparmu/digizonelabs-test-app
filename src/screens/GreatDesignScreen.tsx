import { StackScreenProps } from '@react-navigation/stack'
import React, { useLayoutEffect } from 'react'
import { StatusBar, StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Icon, Image, SearchBar } from 'react-native-elements'
import { useState } from 'react';
import { DiscoverScroll, CommunityScroll, TrendingScroll } from '../components';

interface Props extends StackScreenProps<any, any> { }

export const GreatDesignScreen = ({ navigation }: Props) => {

  const [search, setSearch] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white'
      }
    })
  }, [navigation])

  const updateSearch = (search: string) => {
    setSearch(search)
  }

  return (
    <ScrollView style={styles.container} >
      <StatusBar barStyle='dark-content' backgroundColor='white' />
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: 'https://beder.app/wp-content/uploads/2022/05/logo-beder-opt.png' }} onPress={() => navigation.navigate('Home')} style={styles.titleimage} />
      </View>
      <TouchableOpacity style={styles.icon}>
        <Icon
          name='favorite-outline'
          type='material'
          color='#000'
          size={40}
        />
      </TouchableOpacity>
      <SearchBar
        placeholder="Search for Destinations, People"
        onChangeText={updateSearch}
        value={search}
        lightTheme
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
      />
      <DiscoverScroll />
      <CommunityScroll />
      <TrendingScroll />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  titleimage: {
    width: 210,
    height: 80,
    marginBottom: -10,
  },
  searchBar: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    borderTopWidth: 0,
    marginVertical: 10,
  },
  searchBarInput: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#86F2D9',
    borderRadius: 30,
    height: 60,
    width: '90%',
    alignSelf: 'center',
    elevation: 5,
  },
  icon: {
    position: 'absolute',
    right: 20,
    top: 0
  },
})