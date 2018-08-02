import PeopleScreen from './src/screens/PeopleScreen';
import { StackNavigator } from 'react-navigation';
import PeopleDetailScreen from './src/screens/PeopleDetailScreen';
import { capitalize } from './common';

export default StackNavigator(
  {
    'Main': {
      screen: PeopleScreen
    },
    'PeopleDetail': {
      screen: PeopleDetailScreen,
      navigationOptions: ( { navigation } ) => {
        const { first, last } = navigation.state.params.people.name;
        return ({
          title: `${capitalize(first)} ${capitalize(last)} `
        });
      }
    }
  },
  {
    navigationOptions: {
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 30
      }
    }
  }
);