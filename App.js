import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import NoteTrainingScreen from './NoteTrainingScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  NoteTraining: {screen: NoteTrainingScreen},
});

const App = createAppContainer(MainNavigator);

export default App;


