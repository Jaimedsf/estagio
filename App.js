import React from 'react';
import { View,
         Text,
         AppRegistry,
         StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import Cadastro from './components/pages/Cadastro';
import firebase from 'firebase';

const RootStack = StackNavigator({
  Home: { screen: Login},
  Profile: { screen: Profile},
  Cadastro: { screen: Cadastro},
  },{
    navigationOptions:{
      header: false,
    }
  });

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}