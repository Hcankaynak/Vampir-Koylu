import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HowTo extends Component {

    
  render() {
    const { navigation } = this.props;
    return (
      <View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Text>Nasıl Oynanır?</Text>
        <Text> {this.props.route.params.name} </Text>
      </View>
    );
  }
}

export default HowTo;
