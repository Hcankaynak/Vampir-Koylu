import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Settings extends Component {
  
    
  render() {
    const { navigation } = this.props;
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Ayarlar</Text>
      </View>
    );
  }
}

export default Settings;
