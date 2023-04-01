
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
 
  StyleSheet,
  
} from 'react-native';


import { GameDashboard } from './src';



function App(): JSX.Element {
 

  return (
    <SafeAreaView style={{flex:1}}>
      <GameDashboard/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
