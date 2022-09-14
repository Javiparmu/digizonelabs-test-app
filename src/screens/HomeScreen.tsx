import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationButton } from '../components';

interface Props extends StackScreenProps<any, any>{}

export const HomeScreen = ({ navigation }: Props) => {

  return (
    <View style={styles.container}>
      <NavigationButton title="Public Api" navigation={navigation}/>
      <NavigationButton title="Redux" navigation={navigation}/>
      <NavigationButton title="Great Design" navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
