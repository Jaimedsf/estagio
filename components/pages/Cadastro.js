import React from 'react';
import { View,
         Text,
         StyleSheet,
         TextInput,
         KeyboardAvoidingView,
         TouchableOpacity,
         AsyncStorage,
         Alert,
         Button, 
         Input
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

var config = {
    apiKey: "AIzaSyAB3U7JBu159td1-8TIak6Qa33lOMXBFhA",
    authDomain: "social-d45b4.firebaseapp.com",
    databaseURL: "https://social-d45b4.firebaseio.com",
    projectId: "social-d45b4",
    storageBucket: "social-d45b4.appspot.com",
    messagingSenderId: "238876384870"
  };

export default class Cadastro extends React.Component {
  
  constructor(props){
      super(props);
      this.state = {
        profile: '',
        username : '',
        password : '',
      }
  }
  cadastroUser(){
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    
    firebase.database().ref('users').push({
      profile: this.state.profile,
      username: this.state.username,
      password: this.state.password
    });
}
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
            <Text style={styles.header}>Cadastro</Text>
            
            <TextInput style={styles.textInput} 
              onChangeText = { (profile) => this.setState ({profile}) }
              placeholder='E-Mail'
            />
            <TextInput style={styles.textInput}  
              onChangeText = { (username) => this.setState ({username}) }
              placeholder='Usuário'
            />
            <TextInput style={styles.textInput}
              onChangeText = { (password) => this.setState ({password}) }
              placeholder='Senha'
              secureTextEntry
            />
            <Button title = 'Cadastrar'
              onPress={this.cadastroUser.bind(this)}
            />

        </View>
      </KeyboardAvoidingView>
    );
  }  
}
const styles = StyleSheet.create({ 
wrapper: {
  flex: 1,
},
container : {
  flex : 1,
  justifyContent: 'center',
  backgroundColor : '#2896d3',
  paddingLeft: 40,
  paddingRight: 40,
  
},
header:{
  fontSize: 24,
  marginBottom: 60,
  color: '#fff',
  fontWeight : 'bold',
  textAlign: 'center',
},
textInput : {
  alingSelf: 'stretch',
  padding : 16,
  marginBottom : 20,
  backgroundColor : '#fff',  
  borderRadius: 10
},
});  