import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet, Image } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeopleScreen extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      peoples: [],
      loading: false,
      error: false,
    }
  }

  componentDidMount(){
    this.setState({ loading: true })
    axios
    .get('https://randomusera.me/api?nat=br&results=100')
    .then(response => {
      const { results } = response.data;
      this.setState({peoples: results, loading: false});
    }).catch(error => {
      this.setState( {error: true, loading: false} );
    })
  }

  renderLoading() {
    if(this.state.loading)
      return <ActivityIndicator size="large" color="#6ca2f7"/>;

    return null;
  }

  renderError() {
    if(this.state.error)
      return (
        <View>
          <Image source={{ uri: "https://www.hostinger.my/assets/images/404-3a53e76ef1.png"}} style={styles.errorImage} />
          <Text style={styles.error}>Ops... Algo deu errado =(</Text>
        </View>
      );
  }

  renderList() {
    if(!this.state.error && !this.state.loading)
      return <PeopleList 
                peoples={this.state.peoples} 
                onPressItem={(screenParams)=> {
                  this.props.navigation.navigate('PeopleDetail', screenParams)
                }}
              />;
  }

  render() {
    return (
      <View style={styles.container}>
        { this.renderLoading() }
        { this.renderError() }
        { this.renderList() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'gray',
    fontSize: 25,
    alignSelf: 'center',
  },
  errorImage: {
    aspectRatio: 1,
    width: 300,
    alignSelf: 'center',
  },
})