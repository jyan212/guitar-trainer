import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import ImageOverlay from 'react-native-image-overlay'
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };
    render() {
        
        return (
            <View style={styles.col}>
                <View style={styles.row}>
                    <TouchableOpacity style={{flex:1, 
                        backgroundColor: 'powderblue',
                        justifyContent:"center",
                        alignItems:'center'
                        }} 
                        onPress={()=> this.props.navigation.navigate('NoteTraining')}
                        >
                        <Text style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:35,marginLeft:10}}>Notes Trainer</Text>
                    </TouchableOpacity>
                <TouchableOpacity style={{
                    flex:1, 
                    backgroundColor: 'lightgreen',
                    justifyContent:"center",
                    alignItems:'center'
                    }} 
                    >
                    <Text style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:35,marginLeft:10}}>Metronome</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity style={{flex:1, backgroundColor: 'skyblue', justifyContent:"center",
                    alignItems:'center'}}>
                    <Text style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:35,marginLeft:10}}>Coming Soon</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.row}>
                <TouchableOpacity style={{flex:1, backgroundColor: 'steelblue', justifyContent:"center",
                    alignItems:'center'}}>
                    <Text style={{fontFamily:'sans-serif',fontWeight:'bold',fontSize:35,marginLeft:10}}>About</Text>
                </TouchableOpacity>
                </View>
          </View>
        );
     
      }
}
const styles = StyleSheet.create({
    col:{
        flex: 1, 
        flexDirection: 'column'
    },
    row:{
        flex:1,
        flexDirection:'row'
    }

  });