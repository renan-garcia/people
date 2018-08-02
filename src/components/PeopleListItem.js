import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { capitalize } from '../../common';

const PeopleListItem = props => {
  const { people, navigateToDetail } = props;
  const { first, last } = people.name;
  return (
    <TouchableOpacity onPress={() => navigateToDetail( { people } )}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={ {uri: people.picture.large} }/>
        <Text style={styles.lineText}>
          { `${capitalize(first)} ${capitalize(last)}` }
        </Text>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    borderRadius: 50,
  }
});

export default PeopleListItem;