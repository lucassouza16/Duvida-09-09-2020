import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Dimensions, StatusBar, View, Text, ScrollView, TouchableOpacity, Animated, } from 'react-native';

const { width, height } = Dimensions.get('window');

const Circle = ({ }) => {

  return(    
    <View style={ [ { flex: 1, } ] }>
    <Animated.View style={ [ {flex: 1} ] }>
      <ScrollView contentContainerStyle={{ width: width, alignItems: 'center' }}>

      <View style={{ width: width, height:height-84, backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ color: 'white' }}> BOX AZUL </Text>
      </View>   

      <View style={{ width: width, height: 60, flexDirection: 'row',}}>

      <View style={{ width: width/2, height: 60, backgroundColor: 'brown',  alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 20 }}>   
        <Text style={{ color: 'white' }}> BOX MARROM</Text>     
      </View>
      <View style={{ width: width/2,  backgroundColor: 'green', alignItems: 'flex-end', justifyContent: 'center', paddingRight: 20 }}>
        <Animated.View style={ [ { height: 60, justifyContent: 'center' } ] }>
          <Text style={{ color: 'white' }}> BOX VERDE </Text>
        </Animated.View>
      </View>

      </View> 

      </ScrollView>
    </Animated.View>
    </View>  
  )
}

const isPortrait = () => {  
  const dimensions = Dimensions.get('window');
  return dimensions.height >= dimensions.width;
};

export default function App(){
  const [orientation, setOrientation] = useState(isPortrait() ? 'portrait' : 'landscape');
  Dimensions.addEventListener('change', () => {
    setOrientation(isPortrait() ? 'portrait' : 'landscape');
  });  
  if (orientation === 'portrait') {
    return (
    <View style={{ flex: 1}}>
      <StatusBar backgroundColor={'green'} barStyle="light-content" />
      <Circle /> 
     </View>
     );
  }
  else {
  return(
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor={'red'} barStyle="light-content" />
      <Circle  /> 
    </View>
    );
  }
}

const styles = StyleSheet.create({ });
