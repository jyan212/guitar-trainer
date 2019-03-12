import React from 'react';
import {StyleSheet, Text, View,Button,TouchableHighlight } from 'react-native';
import { Overlay } from 'react-native-elements'
export default class NoteTrainingScreen extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           guitarNotes : [{active:false,key:'A'},{active:false,key:'A#'},{active:false,key:'B'},{active:false,key:'C'},{active:false,key:'C#'},{active:false,key:'D'},{active:false,key:'D#'},{active:false,key:'F'},{active:false,key:'F#'},{active:false,key:'E'},{active:false,key:'G'},{active:false,key:'G#'}],
           isVisible : false,
           timer: false,
           index: 0,
           bpm:500,
       }
       this.handlingShuffle = this.handlingShuffle.bind(this);
       this.handlingAbout = this.handlingAbout.bind(this);
       this.handlingPress = this.handlingPress.bind(this);
       this.handlingStop = this.handlingStop.bind(this);
   }
   
   //should component update? only update when timer is true.
   //only happen after component update ( setState / forceUpdate );
   //changed id to key
    _keyExtractor = (item, index) => item.key;

    
    handlingAbout(){
        this.setState({
            isVisible : true,
        })
    }
    handlingShuffle(){
        this.setState({
            guitarNotes : this.shuffle(this.state.guitarNotes)
        })
    }
    handlingPress(){
        this.state.timer = true;
        this.interval = setInterval(()=>{
            this.tick();
        },this.state.bpm)

    }
    handlingStop(){
        this.state.guitarNotes[this.state.index].active = false;
        this.state.index = 0;
        this.state.timer = false;
        clearInterval(this.interval);
        this.forceUpdate();
    }
    tick(){
        //set current one to true
        if(this.state.index < this.state.guitarNotes.length){
        this.state.guitarNotes[this.state.index].active = true;
        this.state.index += 1
        this.forceUpdate();
        //change previous one to false!!
        this.state.guitarNotes[this.state.index-1].active = false;
        }else{
           this.state.index = 0;
        }
    }
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
       
        // while still got remain to shuffle
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
            <View style={styles.col}>
            <Overlay
                isVisible={this.state.isVisible}
                windowBackgroundColor="rgba(255, 255, 255, .5)"
                overlayBackgroundColor="white"
                onBackdropPress={() => this.setState({ isVisible: false })}
                width="auto"
                height="auto"
                >
                <View>
                <Text>This training will help you to memorize</Text>
                <Text>each notes on your guitar string!</Text>
                <Text>Try memorize each string at first!</Text>
                </View>
                </Overlay>
                <View style={styles.row}>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[0].active ? 'yellow':'white' }]}>
                        <Text>
                        {this.state.guitarNotes[0].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[1].active ? 'yellow':'white' }]}>
                    <Text>
                        {this.state.guitarNotes[1].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[2].active ? 'yellow':'white' }]}>
                    <Text>
                        {this.state.guitarNotes[2].key}
                        </Text>
                    </View>
                
                </View> 
                <View style={styles.row}>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[3].active ? 'yellow':'white' }]}>
                    <Text>
                        {this.state.guitarNotes[3].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[4].active ? 'yellow':'white' }]}>
                    <Text>
                        {this.state.guitarNotes[4].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[5].active ? 'yellow':'white' }]}>
                        <Text>
                        {this.state.guitarNotes[5].key}
                        </Text>
                    </View>
                </View> 
                <View style={styles.row}>
                <View style={[styles.box,{backgroundColor: this.state.guitarNotes[6].active ? 'yellow':'white' }]}>
                    <Text>
                        {this.state.guitarNotes[6].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[7].active ? 'yellow':'white' }]}>
                    <Text>
                        {this.state.guitarNotes[7].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[8].active ? 'yellow':'white' }]}>
                        <Text>
                        {this.state.guitarNotes[8].key}
                        </Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[9].active ? 'yellow':'white' }]}>
                        <Text>
                        {this.state.guitarNotes[9].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[10].active ? 'yellow':'white' }]}>
                        <Text>
                        {this.state.guitarNotes[10].key}
                        </Text>
                    </View>
                    <View style={[styles.box,{backgroundColor: this.state.guitarNotes[11].active ? 'yellow':'white' }]}>
                        <Text>
                        {this.state.guitarNotes[11].key}
                        </Text>
                    </View>
                </View>
                <View id="function_area" style={{
                            flex:1,
                            flexDirection:'row',
                            height:50,
                        }}>
                <TouchableHighlight 
                onPress={this.handlingShuffle} 
                style={{flex:1, backgroundColor: 'steelblue', justifyContent:"center",alignItems:'center'}}>
                <Text>Shuffle</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                onPress={this.state.timer ? this.handlingStop: this.handlingPress}
                style={{flex:1, backgroundColor: 'lightgreen', justifyContent:"center",alignItems:'center'}}>
                <Text>{this.state.timer ? 'STOP' : 'START'}</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                onPress={this.handlingAbout}
                style={{flex:1, backgroundColor: 'aqua', justifyContent:"center",alignItems:'center'}}>
                <Text>?</Text>
                </TouchableHighlight>
                </View>
            </View>
         
        );
    }
}
const styles = StyleSheet.create({
    box:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       borderWidth:1,
       borderColor:'black'
       
    },
    col:{
        flex: 1, 
        flexDirection: 'column'
    },
    row:{
        flex:1,
        flexDirection:'row'
    }
  });