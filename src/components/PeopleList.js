import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
  const { peoples, onPressItem} = props;

  return (
    <FlatList 
      style={styles.container} 
      data={peoples} 
      renderItem={({ item }) => (
        <PeopleListItem navigateToDetail={onPressItem} people={item}/>
      )}
      keyExtractor={item => item.email}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff'
  }
});

export default PeopleList;