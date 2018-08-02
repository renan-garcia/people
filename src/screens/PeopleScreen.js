import React from 'react';
import { View } from 'react-native';
import PeopleList from '../components/PeopleList';
import axios from 'axios';

export default class PeopleScreen extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      peoples: []
    }
  }

  componentDidMount(){
    axios
    .get('https://randomuser.me/api?nat=br&results=15')
    .then(response => {
      const { results } = response.data;
      this.setState({peoples: results});
    });
  }

  render() {
    return (
      <View>
        <PeopleList 
          peoples={this.state.peoples} 
          onPressItem={(screenParams)=> {
            this.props.navigation.navigate('PeopleDetail', screenParams)
          }}
        />
      </View>
    );
  }
}