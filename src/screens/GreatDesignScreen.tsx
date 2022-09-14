import { StackScreenProps } from '@react-navigation/stack';
import React, { useLayoutEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity } from 'react-native';
import { Icon, Image, SearchBar } from 'react-native-elements';
import { useState } from 'react';
import { DiscoverScroll, CommunityScroll, TrendingScroll } from '../components';
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'GreatDesign'>{}

export const GreatDesignScreen = ({ navigation }: Props) => {

  const [search, setSearch] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      cardStyle: {
        backgroundColor: 'white',
      },
    });
  }, [navigation]);

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <ScrollView style={styles.container} >
      <View style={{ alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://beder.app/wp-content/uploads/2022/05/logo-beder-opt.png' }}
          onPress={() => navigation.navigate('Home')}
          style={styles.titleimage}
        />
      </View>
      <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)} style={styles.icon} >
        <Icon
          name={isFavorite ? 'favorite' : 'favorite-outline'}
          type='material'
          color={isFavorite ? 'red' : 'black'}
          size={40}
        />
      </TouchableOpacity>
      <SearchBar
        placeholder="Search for Destinations, People"
        onChangeText={updateSearch}
        value={search}
        containerStyle={styles.searchBar}
        inputContainerStyle={styles.searchBarInput}
        inputStyle={{ paddingLeft: -20 }}
        searchIcon={
          <Icon
            name='search'
            type='material'
            color='#A6A6A6'
            size={20}
            containerStyle={{ marginLeft: 10, marginRight: -5 }}
          />}
      />
      <DiscoverScroll />
      <CommunityScroll />
      <TrendingScroll />
    </ScrollView>
  );
};

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
    top: 0,
  },
});
