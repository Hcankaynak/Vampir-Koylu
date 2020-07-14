import React, { Component } from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';

class Game extends Component {

  constructor(props){
    super(props);

    let temp = this.props.route.params.items
    temp[0].role = "vampire"
    
    var i;
    for (i = 0; i < temp.length; i++) { 
        temp[i].role = "Köylü";
    }
    
    var index;
    for (i = 0; i < this.props.route.params.vampireCount; i++) { 
        index = Math.floor((Math.random() * temp.length-1) + 1)
        while(temp[index].name == "helin"){
            index = Math.floor((Math.random() * temp.length-1) + 1)
        }
        temp[index].role = "Vampir";
        
    }
    console.log(Math.floor((Math.random() * temp.length-1) + 1));

      // TODO:
        // - make random vampir selection and assign to items.
    this.state = {
        items: temp, 
        vampireCount: this.props.route.params.vampireCount,
        currentIndex: 0,
        isVisible: false,
    }
  }

  nextPlayer(){
    let temp = this.state.currentIndex;

    if(temp < this.state.items.length-1){
        temp = temp + 1;
        this.setState({currentIndex:temp})
    }
    this.setState({isVisible:false})
    

  }
  showRole(){
    let temp = this.state.isVisible;
    this.setState({isVisible: !temp})
    console.log(temp);
      
  }

    
  render() {
    const { navigation } = this.props;
    return (
        <>
            <View style={styles.header} >
                <TouchableOpacity style={styles.headerCloseButton}  onPress={()=> {navigation.navigate('Home', { name: 'Jane',age:'19' })}} >
                    <Text style={styles.headerCloseButtonText} > X </Text>
                </TouchableOpacity>
            </View>
                
            <View style={styles.body}>
                <View style={styles.avatar} >
                    <Text style={styles.headerCloseButtonText} > {this.state.items[this.state.currentIndex].id} </Text>
                </View>
                <Text style={styles.name} >
                    {this.state.items[this.state.currentIndex].name}
                </Text>
                <TouchableOpacity style={styles.showRoleButton} onPress={()=> this.showRole() }>
                    {this.state.isVisible? 
                    <Text style={styles.headerCloseButtonText} >
                        Rolü Gizle
                    </Text>
                    : 
                    <Text style={styles.headerCloseButtonText} >
                        Rolü Göster
                    </Text>
                    }
                </TouchableOpacity>

                {(this.state.isVisible)? <Text style={styles.role} >{this.state.items[this.state.currentIndex].role}</Text> : <Text></Text>}

                {(this.state.currentIndex == this.state.items.length-1)?

                <TouchableOpacity style={styles.goToHome} onPress={()=> navigation.navigate('Home')} >
                    <Text style={styles.headerCloseButtonText} > Ana sayfaya dön </Text>
                </TouchableOpacity>
                : 
                <TouchableOpacity style={styles.nextPlayerButton} onPress={()=> this.nextPlayer()} >
                    <Text style={styles.headerCloseButtonText} > Sonraki Oyuncu </Text>
                </TouchableOpacity>}
            </View>
        </>
    );
  }
}

const styles = StyleSheet.create({
  
    header: {
        height:70,
        margin:15,
        flexDirection: 'row-reverse',
    },
    headerCloseButton: {
        backgroundColor: "#FF0000",
        margin: 15,
        width:35,
        height: 35,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    },
    headerCloseButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    body: {
        alignItems:'center',
        marginTop:30,
    },
    avatar: {
        backgroundColor: '#000',
        width:100,
        height:100,
        borderRadius: 50,
        alignItems:'center',
        justifyContent:'center',
    },
    showRoleButton: {
        backgroundColor: "#035aa6",
        marginTop:10,
        width:200,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    role:{
        marginTop:10,
        fontSize:24,
        fontWeight: 'bold',
    },
    name: {
        fontSize:30,
        fontWeight:'bold',
        marginVertical:20,
    },
    nextPlayerButton: {
        backgroundColor: "#FF0000",
        marginTop:60,
        width:200,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    },
    goToHome: {
        backgroundColor: '#32CD32',
        marginTop:60,
        width:200,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
    }

    
    });
    

export default Game;
