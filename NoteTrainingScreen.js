import React from 'react';
import { FlatList,StyleSheet, Text, View,Button } from 'react-native';

export default class NoteTrainingScreen extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           guitarNotes : [{active:false,key:'A'},{active:false,key:'A#'},{active:false,key:'B'},{active:false,key:'C'},{active:false,key:'C#'},{active:false,key:'D'},{active:false,key:'D#'},{active:false,key:'F'},{active:false,key:'F#'},{active:false,key:'E'},{active:false,key:'G'},{active:false,key:'G#'}],
       }
       this.handlingPress = this.handlingPress.bind(this);
   }
   
    _keyExtractor = (item, index) => item.id;
    handlingPress(){
        this.setState({
            guitarNotes : this.shuffle(this.state.guitarNotes)
        })
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
       
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          //swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
    render(){
        return(
            // display shuffle cards
            <View style={styles}>
            <View id='display_notes'>
                <FlatList
                data={this.shuffle(this.state.guitarNotes)}
                renderItem={({item}) => 
            <View style={[styles.box,{backgroundColor: item.active ? 'yellow' : 'skyblue'}]}>    
                <Text>{item.key}</Text>
            </View>
            }
                keyExtractor={this._keyExtractor}
                />
                <Button onPress={this.handlingPress()} title="Go" style={{height:100,width:100}}/>
            </View>
        
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      position:'relative',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box:{
       flex:1,
       height:300, 
       justifyContent:'center',
       alignItems:'center',
       borderWidth:3,
       borderColor:'black'
       
    }
  });