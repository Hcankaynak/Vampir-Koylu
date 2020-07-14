import React, { Component } from 'react';
import { Text, View,TouchableOpacity,StyleSheet,FlatList,TextInput } from 'react-native';

class NewGame extends Component {
  constructor(props){
    super(props)
    let items = Array.apply(null, Array(5)).map((v, i) => {
      return {
        id: i,
        color: 'aqua',
        name: "",
        role: "",
      };
    });
    this.state = {
      data: items,
      baba: 'helo',
    };
  }

  setText(text,id) {

        
    let items = this.state.data;
    var i;
    for (i = 0; i < items.length; i++) { 
      if(items[i].id == id){
        items[i].name = text;
      }
    }
    console.log(text,id);
    this.setState({data:items})
  }
  
    
  render() {
    
    const { navigation } = this.props;
  
    return (
      <>
      <View style={{flex:1,flexDirection:'row-reverse'}} >
      
        <TouchableOpacity  style={styles.button}
        onPress={() =>
          {  let items = this.state.data;
              items.push({id:items[items.length-1].id + 1, color:"aqua"})
              this.setState({data: items});
              console.log("hello");
        }}>
          <Text style={styles.buttonText} > + </Text>

        </TouchableOpacity>

        <TouchableOpacity  style={styles.button}
        onPress={() =>
        {  
          let items = this.state.data;
          if(items.length>1){
            items.splice(items.length-1, 1);
            this.setState({data:items})
          }
          
        }}>
          <Text style={styles.buttonText} > - </Text>
        </TouchableOpacity>
      
      </View>
      <View style={styles.body}>
        
        
      <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity style={styles.flatView} >
                  <View>
                    <Text style={{fontSize: 30, fontWeight: 'bold',alignSelf:'center'}}>
                      {item.id+1}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={{padding:5}} >
                <TextInput
                  style={styles.textInput}
                  placeholder= "isim"
                  onChangeText= {text => this.setText(text,item.id)}
                />  
                </View>
              </View>
            )}
            //Setting the number of column
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
      <View style={styles.footer} >
        
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate('Oyun Ayarları',{items: this.state.data})}
        >
          <Text style={styles.buttonText} > -> </Text>
        </TouchableOpacity>
      </View>
      </>
    );
  }
}
//this.props.route.params.name
// this.state.baba
const styles = StyleSheet.create({
  
button: {
  backgroundColor: "#035aa6",
  margin: 15,
  width:50,
  height: 50,
  borderRadius:50,
  alignItems:'center',
  
},
buttonText:{
  fontSize:40,
  fontWeight: 'bold',
  color:'#fff',

},
view: {
  flex:1,
  flexDirection:'row-reverse',
  
  
},
body: {
  flex:4,
  justifyContent: 'center',
  alignItems: 'center',
  
},
flatView:{
  flexDirection: 'column',
  margin: 20,
  padding: 20,
  width:80,
  height: 80,
  backgroundColor: 'aqua',
  borderRadius:50,
},
footer: {
  flex:1,
  flexDirection:'row-reverse',
  padding:10,
},
textInput: {
  textAlign:'center',
  padding:5,
  borderWidth:1,
  borderRadius:10,
}
});


export default NewGame;
