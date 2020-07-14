import React, { Component } from 'react';
import { Text, View,TextInput,StyleSheet, TouchableOpacity } from 'react-native';

class GameSettings extends Component {

  constructor(props){
    super(props)
    
    let count = this.props.route.params.items;
    console.log(count.length);
    this.state = {
      totalCount: count.length,
      vampireCount: 1,
      villagerCount: count.length-1,
      data: this.props.route.params.items,
    };
  }

  increaseCount (type){

    if(type == "vampire"){
      let temp = this.state.vampireCount;
      if(this.state.totalCount > this.state.vampireCount + this.state.villagerCount){
        temp = temp + 1;
        this.setState({vampireCount:temp})
      }
    }
    else if(type == "villager"){
      let temp = this.state.villagerCount;
      if(this.state.totalCount > this.state.vampireCount + this.state.villagerCount){
        temp = temp + 1;
        this.setState({villagerCount:temp})
      }
      
    }
  }

  decreaseCount (type){

    if(type == "vampire"){
      let temp = this.state.vampireCount;
      if(temp > 0){
        temp = temp - 1;
        this.setState({vampireCount:temp})    
      }
    }
    else if(type == "villager"){
      let temp = this.state.villagerCount;
      if(temp >0){
        temp = temp - 1;
        this.setState({villagerCount:temp})
      }
      
    }
  }

  
    
  render() {
    const { navigation } = this.props;
    return (
      <>
      <View style={styles.header}>
        <Text style={styles.headerText} >Oyun Karakter Ayarları</Text>
      </View>
      <View style={styles.body} >
        <View style={styles.bodyItem1} >
          <Text style={styles.bodyText} >Vampir </Text>
          <View style={styles.bodyItemRight} >
            <View style={{flexDirection:'row'}} >
              <TouchableOpacity onPress={()=> this.decreaseCount("vampire")} style={styles.bodyItemButton} >
                <Text style={styles.bodyItemRealButtonText} >-</Text>
              </TouchableOpacity>
              <Text style={styles.bodyItemButtonText} > {this.state.vampireCount} </Text>
              <TouchableOpacity onPress={()=> this.increaseCount("vampire")} style={styles.bodyItemButton} >
                <Text style={styles.bodyItemRealButtonText} >+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.bodyItem2} >
          <Text style={styles.bodyText} >Köylü </Text>
          <View style={styles.bodyItemRight} >
            <View style={{flexDirection:'row'}} >
              <TouchableOpacity onPress={()=> this.decreaseCount("villager")} style={styles.bodyItemButton} >
                <Text style={styles.bodyItemRealButtonText} >-</Text>
              </TouchableOpacity>
              <Text style={styles.bodyItemButtonText} > {this.state.villagerCount} </Text>
              <TouchableOpacity onPress={()=> this.increaseCount("villager")} style={styles.bodyItemButton} >
                <Text style={styles.bodyItemRealButtonText} >+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
        
      <View style={styles.bottom} >
        <TouchableOpacity style={styles.bottomButton} onPress={()=> {navigation.navigate('Oyun',{items : this.state.data , vampireCount : this.state.vampireCount})}} >
          <Text style={styles.bodyItemRealButtonText} > -> </Text>
        </TouchableOpacity>
      </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    height:70,
    backgroundColor: '#f4511e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  body: {
    flex : 4,
    margin: 30,
    
  },
  bottom: {
    flex:1,
    flexDirection:'row-reverse',
    margin: 10,

  },
  bottomButton: {
    backgroundColor: "#035aa6",
    margin: 15,
    width:50,
    height: 50,
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
  },
  bodyItem1: {
    marginBottom:20,
    padding:20,
    flexDirection:'row',
    backgroundColor: '#f4511e',
    alignItems:'center',
    borderRadius:10,
  },
  bodyItem2: {
    marginBottom:20,
    padding:20,
    flexDirection:'row',
    backgroundColor: '#96bb7c',
    alignItems:'center',
    borderRadius:10,
  },
  bodyItemRight: {
    flex:1,
    padding:5,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  },
  bodyText: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  bodyItemButton:{
    width:30,
    height: 30,
    backgroundColor: 'aqua',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:5,
  },
  bodyItemButtonText:{
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyItemRealButtonText:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#fff',
    
  }

});

export default GameSettings;
