import React from 'react';
import { View , TouchableHightlight, Text} from 'react-native';

var index = 0;
var bpm = 1000;
var guitarNotes;
export default class FunctionHandler extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            guitarNotes : [{active:false,key:'A'},{active:false,key:'A#'},{active:false,key:'B'},{active:false,key:'C'},{active:false,key:'C#'},{active:false,key:'D'},{active:false,key:'D#'},{active:false,key:'F'},{active:false,key:'F#'},{active:false,key:'E'},{active:false,key:'G'},{active:false,key:'G#'}],
            isVisible : false,
            timer: false,
        }
        this.handlingShuffle = this.handlingShuffle.bind(this);
        this.handlingAbout = this.handlingAbout.bind(this);
        this.handlingPress = this.handlingPress.bind(this);
        this.handlingStop = this.handlingStop.bind(this);
    }
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
        // try to use setState instead of = next time.
        this.state.guitarNotes[this.state.index].active = false;
        index = 0;
        this.state.timer = false;
        clearInterval(this.interval);
        this.forceUpdate();
    }

    tick(){
        //set current one to true
        if(index < this.state.guitarNotes.length){
            // try to use setState instead of = next time.
        this.state.guitarNotes[this.state.index].active = true;
        index += 1
        this.forceUpdate();
        //change previous one to false!!
        this.state.guitarNotes[index-1].active = false;
        }else{
           index = 0;
        }
    }
    render(){
        return(
            <View id="function_area" style={{
                flex:1,
                flexDirection:'row',
                height:50,
            }}>
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
                <TouchableHighlight 
                    onPress={this.handlingShuffle} 
                    style={{flex:1, 
                    backgroundColor: 'steelblue', 
                    justifyContent:"center",
                    alignItems:'center'}}>
                <Text>Shuffle</Text>
                </TouchableHighlight>
                 <TouchableHighlight 
                    onPress={this.state.timer ? this.handlingStop: this.handlingPress}
                    style={{flex:1, 
                    backgroundColor: 'lightgreen', 
                    justifyContent:"center",
                    alignItems:'center'}}>
                <Text>{this.state.timer ? 'STOP' : 'START'}</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    onPress={this.handlingAbout}
                    style={{flex:1, 
                    backgroundColor: 'aqua', 
                    justifyContent:"center",
                    alignItems:'center'}}>
                <Text>?</Text>
                </TouchableHighlight>
                </View>
        )
    }

}