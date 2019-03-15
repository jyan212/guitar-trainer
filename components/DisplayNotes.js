import React from 'react';
import { View , TouchableHightlight, Text} from 'react-native';

export default class FunctionHandler extends React.Component{
    constructor(props){
        super(props);
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
        this.props.guitarNotes[index-1].active = false;
        }else{
           index = 0;
        }
    }
    render(){
        return(
            <View style={styles.col}>
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
        </View>
        )
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