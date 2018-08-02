import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Row from '../components/Row'

export default class PeopleDetailScreen extends React.Component {

  render() {
    const { people } = this.props.navigation.state.params;
    return (
      <ScrollView style={styles.container}>
        <Image source={{ uri: people.picture.large }} style={styles.avatar}/>
        <View style={styles.detailContainer}>
          <Row label="Email" content={people.email}/>
          <Row label="Cidade" content={people.location.city}/>
          <Row label="Estado" content={people.location.state}/>
          <Row label="Tel" content={people.phone}/>
          <Row label="Cel" content={people.cell}/>
          <Row label="Nacionalidade" content={people.nat}/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  avatar: {
    aspectRatio: 1,
    borderRadius: 100
  },
  detailContainer: {
    backgroundColor: '#e2f9ff',
    marginTop: 20,
    elevation: 1
  }
})