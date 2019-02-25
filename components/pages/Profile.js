import React from 'react';
import { View,
         Text,
         StyleSheet,
        TouchableOpacity,
         Button       
         
} from 'react-native';

export default class Profile extends React.Component {
  
  render() {
    return (
        <View style={styles.container}>
        
            <Text style={styles.text}>Bem-vindo</Text>
            <TouchableOpacity style={styles.btn} 
              onPress={this.cadastro}>
              <Text style={styles.bt}>Cadastro</Text>
            </TouchableOpacity>     
            
        </View>
      
    );
  }
}
const styles = StyleSheet.create({ 
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor : '#2896d3',
  },
  text : {
    color: '#fff',
  }
  
});  