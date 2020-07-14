import React, { Component } from 'react';
import { Text, View,Button,StyleSheet,
    TouchableOpacity } from 'react-native';

class HomeScreen extends Component {
  
    
  render() {
    const { navigation } = this.props; 
    return (
        <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        
        <TouchableOpacity style={styles.button}
          onPress={() =>
            {navigation.navigate('Yeni Oyun', { name: 'Jane',age:'19' })
            console.log('hl');}
          }>
        <Text style={styles.text}>Yeni Oyun</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate('Nasıl Oynanır', { name: 'Jane' })
          }>
        <Text style={styles.text} > Nasıl Oynanır?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}
          onPress={() =>
            navigation.navigate('Ayarlar', { name: 'Jane' })
          }>
        <Text style={styles.text}>Ayarlar</Text>
        </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      flexDirection: 'column'
      
    },
    button: {
    alignItems: "center",
    backgroundColor: "#035aa6",
    margin: 20,
    width:200,
    height: 50,
    justifyContent:'center'
  },
    text: {
        color: "#ffffff",
        fontSize: 20,
        fontWeight: 'bold'
        
    }
  });

export default HomeScreen;
